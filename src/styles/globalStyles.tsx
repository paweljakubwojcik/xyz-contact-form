import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

    * :focus {
            outline: none;
    }
    * :focus:not(input):not(textarea):not(:active) {
            outline: 1px solid ${(props) => props.theme.colors.main.contrastText};
    }

    a{
        color: inherit;
        text-decoration: none;
        &:hover, &:focus{
            filter: opacity(0.6);
        }
    }
`
