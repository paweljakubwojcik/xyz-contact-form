import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Clock from './Clock'
import ThemeChanger from './ThemeChanger'

export default forwardRef<HTMLElement, {}>(function Navbar(props, forwardedRef) {
    return (
        <Wrapper ref={forwardedRef}>
            <Logo>XYZ</Logo>

            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/policy">Polityka Prwatności</StyledLink>
            </LinksContainer>
            <Clock />
            <ThemeChanger />
        </Wrapper>
    )
})

const Wrapper = styled.header`
    display: flex;
    align-items: center;

    padding: 0 ${(props) => props.theme.padding.layoutHorizontal};

    background-color: ${(props) => props.theme.colors.main.main};
    color: ${(props) => props.theme.colors.main.contrastText};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.24);
`

const Logo = styled.h1`
    margin-right: auto;
`

const LinksContainer = styled.nav`
    display: flex;
`

const StyledLink = styled(Link)`
    margin: 1em;
`
