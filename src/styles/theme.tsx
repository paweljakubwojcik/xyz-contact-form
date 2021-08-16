import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
    colors: {
        main: {
            light: 'hsl(207,90%,54%)',
            main: 'hsl(207,90%,54%)',
            dark: 'hsl(207,90%,54%)',
            contrastText: '#ffffff',
        },

        background: {
            paper: '#fff',
            default: '#fafafa',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            error: '#f44336',
        },
    },
}

const darkTheme: DefaultTheme = {
    colors: {
        main: {
            light: 'hsl(207,90%,70%)',
            main: 'hsl(207,90%,54%)',
            dark: 'hsl(207,90%,30%)',
            contrastText: '#ffffff',
        },

        background: {
            paper: '#424242',
            default: '#303030',
        },
        text: {
            primary: 'rgba(255, 255, 255, 1)',
            secondary: 'rgba(255, 255, 255, 0.70)',
            error: '#f44336',
        },
    },
}

export { lightTheme, darkTheme }
