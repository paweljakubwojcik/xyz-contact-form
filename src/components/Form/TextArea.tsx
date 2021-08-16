import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import { ExtendedInputProps, InputWrapper, StyledInput } from './Input'

const TextArea = ({
    maxLength,
    value,
    ...props
}: StyledComponentProps<'textarea', DefaultTheme, Omit<ExtendedInputProps, 'label'>, never>) => {
    const numberOfCharacters = value?.toString().length
    if (numberOfCharacters === maxLength) {
        throw new Error('max number of characters exited')
    }
    return (
        <InputWrapper>
            <StyledInput
                as={'textarea'}
                style={{ minHeight: '300px' }}
                value={value}
                maxLength={maxLength}
                {...props}
            />
            <LengthIndicator>
                {numberOfCharacters}/{maxLength}
            </LengthIndicator>
        </InputWrapper>
    )
}

export default TextArea

const LengthIndicator = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
`
