import { useState } from 'react'
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
`

type ExtendedInputProps = {
    label: string
    id?: string
}

const Input = ({
    label,
    value,
    ...props
}: StyledComponentProps<'input', DefaultTheme, ExtendedInputProps, never>) => {
    const [focused, setFocus] = useState<boolean>(false)

    return (
        <InputWrapper onFocusCapture={() => setFocus(true)} onBlurCapture={() => setFocus(false)}>
            <StyledInput {...props} value={value} />
            <StyledLabel focused={focused || !!value}>{label}</StyledLabel>
        </InputWrapper>
    )
}

const TextArea = ({
    ...props
}: StyledComponentProps<'textarea', DefaultTheme, Omit<ExtendedInputProps, 'label'>, never>) => {
    return (
        <InputWrapper>
            <StyledInput as={'textarea'} {...props} />
        </InputWrapper>
    )
}

const InputPadding = '0.5em'

const InputWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    margin: 1em;

    width: 100%;
`

const StyledInput = styled.input`
    padding: 0.3em ${InputPadding};
    max-width: 100%;
    width: 100%;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;

    border-radius: 0.3em;
    border: 1px solid rgba(0, 0, 0, 0.2);

    &:focus {
        border-color: ${(props) => props.theme.colors.main.light};
    }

    &:invalid {
        border-color: ${(props) => props.theme.colors.text.error};
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

export default Object.assign(Form, { Input, TextArea })
