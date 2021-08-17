import { useState } from 'react'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import { ExtendedInputProps, StyledInput } from './Input'
import InputWrapper from './InputWrapper'

const TextArea = ({
    maxLength,
    value,
    errors,
    ...props
}: StyledComponentProps<'textarea', DefaultTheme, Omit<ExtendedInputProps, 'label'>, never>) => {
    const numberOfCharacters = value?.toString().length
    const [invalid, setInvalid] = useState(false)

    return (
        <InputWrapper value={value} setErrorState={setInvalid} errors={errors}>
            <StyledInput
                as={'textarea'}
                style={{ minHeight: '300px' }}
                value={value}
                maxLength={maxLength}
                invalid={invalid}
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
