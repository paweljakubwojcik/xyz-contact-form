import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'

type ExtendedButtonProps = { disabled?: boolean }
type ButtonProps = StyledComponentProps<'button', DefaultTheme, ExtendedButtonProps, never>

export default function Button({ children, type = 'button', disabled, ...props }: ButtonProps) {
    return (
        <StyledButton
            type={type}
            tabIndex={disabled ? -1 : undefined}
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button<ExtendedButtonProps>`
    font-weight: bold;
    font-size: inherit;

    padding: 0.4em 0.6em;
    margin: 1em;

    background-color: ${(props) =>
        props.disabled ? props.theme.colors.inactive.main : props.theme.colors.main.main};
    color: ${(props) => props.theme.colors.main.contrastText};

    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24);
    border-radius: 2px;

    ${(props) => (props.disabled ? 'cursor: default; pointer-events: none;' : '')};

    transition: background-color 0.3s;
`
