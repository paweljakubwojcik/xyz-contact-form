import { useTheme } from 'src/context/Theme'
import styled from 'styled-components'

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
            <Toggle active={theme === 'light'} />
        </ToggleSwitch>
    )
}

const size = 1.5

const ToggleSwitch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    width: ${size * 2}em;
    height: ${size}em;

    border-radius: 1000px;
    background-color: ${(props) => props.theme.colors.background.paper};
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
