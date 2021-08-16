import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: ${(props) => props.theme.colors.background.default};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace;
    }

    pre { white-space: pre-wrap; }

    * :focus {
            outline: none;
    }
    * :focus:not(input):not(textarea):not(:active) {
            outline: 1px solid ${(props) => props.theme.colors.divider};
    }

    a{
        color: inherit;
        text-decoration: none;
        &:hover, &:focus{
            filter: opacity(0.6);
        }
    }

    button {
        outline: none;
        border: none;
        color: inherit;
        font-family: inherit;
        cursor: pointer;
        
    }
`
