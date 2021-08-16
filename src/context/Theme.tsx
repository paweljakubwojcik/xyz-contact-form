import { DefaultTheme, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
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
    theme: DefaultTheme
    changeTheme: (themeName: ThemeType) => void
}>({
    theme: {} as DefaultTheme,
    changeTheme: (themeName) => {},
})

/**
 *  Provider for changing theme, it allows easily add storing theme in some indexDB
 */
const ThemeProvider = ({
    children,
    ...props
}: {
    children: React.ReactNode
    [key: string]: any
}) => {
    const [theme, setTheme] = useState<DefaultTheme>(THEMES.light)

    const changeTheme = useCallback((themeName: ThemeType) => {
        setTheme(THEMES[themeName])
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <StyledComponentsThemeProvider theme={theme} {...props}>
                {children}
            </StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider }
