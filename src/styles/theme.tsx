import { DefaultTheme } from 'styled-components'

// common colors

const PADDINGS: Pick<DefaultTheme, 'padding'> = {
    padding: {
        layoutHorizontal: 'min(3em, 5%)',
    },
}

const COMMON_COLOURS: Pick<DefaultTheme['colors'], 'main' | 'inactive'> = {
    main: {
        light: 'hsl(207,90%,70%)',
        main: 'hsl(207,90%,54%)',
        dark: 'hsl(207,90%,30%)',
        contrastText: '#ffffff',
    },
    inactive: {
        light: '#7b7b7bb7',
        main: '#757373',
        dark: '#444444',
        contrastText: '#ffffff',
    },
}

// light and dark themes

const lightTheme: DefaultTheme = {
    colors: {
        ...COMMON_COLOURS,
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
    ...PADDINGS,
}

const darkTheme: DefaultTheme = {
    colors: {
        ...COMMON_COLOURS,
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
    ...PADDINGS,
}

export { lightTheme, darkTheme }
