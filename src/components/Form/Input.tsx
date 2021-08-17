import { useState } from 'react'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import InputWrapper from './InputWrapper'

export type ExtendedInputProps = {
    label: string
    id?: string
    errors?: Array<string>
}

const Input = ({
    label,
    value,
    errors,
    ...props
}: StyledComponentProps<'input', DefaultTheme, ExtendedInputProps, never>) => {
    const [focused, setFocus] = useState<boolean>(false)
    const [invalid, setInvalid] = useState(false)

    return (
        <InputWrapper
            onFocusCapture={() => setFocus(true)}
            onBlurCapture={() => setFocus(false)}
            value={value}
            errors={errors}
            setErrorState={setInvalid}
        >
            <StyledInput {...props} value={value} invalid={invalid} />
            <StyledLabel focused={focused || !!value}>{label}</StyledLabel>
        </InputWrapper>
    )
}

export default Input

export const InputPadding = '0.5em'

export const StyledInput = styled.input<{ invalid: boolean }>`
    padding: 0.3em ${InputPadding};
    max-width: 100%;
    width: 100%;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: inherit;

    border-radius: 0.3em;
    border: 1px solid
        ${(props) => (props.invalid ? props.theme.colors.text.error : 'rgba(0, 0, 0, 0.2)')};

    &:focus {
        border-color: ${(props) => props.theme.colors.main.light};
    }

    resize: none;
`

const StyledLabel = styled.label<{ focused: boolean }>`
    position: absolute;
    left: 0;

    margin: ${InputPadding};

    ${(props) =>
        props.focused
            ? `transform: translate(0, calc(-100% - ${InputPadding})) scale(0.8);
    color: ${props.theme.colors.main.main};
    }`
            : ''}

    transform-origin: left center;
    transition: transform 0.4s, color 0.3s;
`
