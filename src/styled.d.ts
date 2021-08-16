import 'styled-components'

type Color = {
    light: string
    main: string
    dark: string
    contrastText: string
}

//typing theme prop in styled components
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            main: Color
            inactive: Color
            background: {
                paper: string
                default: string
            }
            text: {
                primary: string
                secondary: string
                error: string
            }
        }
        padding: {
            layoutHorizontal: string
        }
    }
}
