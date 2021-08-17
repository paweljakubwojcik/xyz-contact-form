import { useEffect, useState } from 'react'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import ErrorMessages from './ErrorMessages'
import { ExtendedInputProps, InputWrapper, StyledInput } from './Input'

const TextArea = ({
    maxLength,
    value,
    errors,
    ...props
}: StyledComponentProps<'textarea', DefaultTheme, Omit<ExtendedInputProps, 'label'>, never>) => {
    const numberOfCharacters = value?.toString().length

    const [touched, setTouche] = useState(false)
    useEffect(() => {
        if (value) setTouche(true)
    }, [value])

    const errorState = !!errors?.length && touched
    return (
        <InputWrapper>
            <StyledInput
                as={'textarea'}
                style={{ minHeight: '300px' }}
                value={value}
                maxLength={maxLength}
                invalid={errorState}
                {...props}
            />
            {errorState && <ErrorMessages> {errors?.map((e) => e)} </ErrorMessages>}
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
