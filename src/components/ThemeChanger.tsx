import { useTheme } from 'src/context/Theme'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ThemeChanger() {
    const { changeTheme, theme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'light') {
            changeTheme('dark')
        }
        if (theme === 'dark') {
            changeTheme('light')
        }
    }

    return (
        <ToggleSwitch onClick={toggleTheme} title="change theme">
            <FontAwesomeIcon icon={faSun} />
            <Toggle active={theme === 'light'} />
            <FontAwesomeIcon icon={faMoon} />
        </ToggleSwitch>
    )
}

const size = 1.5

const ToggleSwitch = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: relative;

    width: ${size * 2}em;
    height: ${size}em;

    border-radius: 1000px;
    background-color: ${(props) => props.theme.colors.background.paper};
    color: ${(props) => props.theme.colors.text.secondary};
`

const Toggle = styled.span<{ active: boolean }>`
    position: absolute;
    display: block;
    height: ${size * 0.8}em;
    width: ${size * 0.8}em;

    border-radius: 50%;

    background-color: ${(props) => props.theme.colors.main.light};

    transform: translateX(${(props) => (props.active ? '50%' : '-50%')});

    ${ToggleSwitch}:hover &,
    ${ToggleSwitch}:focus & {
        filter: brightness(0.8);
    }

    transition: transform 0.3s;
`
