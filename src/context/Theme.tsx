import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/styles/theme'
import React, { useCallback, useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const THEMES = {
    dark: darkTheme,
    light: lightTheme,
}

type ThemeType = keyof typeof THEMES

const ThemeContext = createContext<{
    theme: ThemeType
    changeTheme: (themeName: ThemeType) => void
}>({
    theme: 'light',
    changeTheme: (themeName) => {},
})

/**
 *  Provider for changing theme, it allows easily add storing theme in some indexDB or in cookie
 */
const ThemeProvider = ({
    children,
    ...props
}: {
    children: React.ReactNode
    [key: string]: any
}) => {
    const [theme, setTheme] = useState<ThemeType>('light')

    const changeTheme = useCallback((themeName: ThemeType) => {
        setTheme(themeName)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <StyledComponentsThemeProvider theme={THEMES[theme]} {...props}>
                {children}
            </StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider }
