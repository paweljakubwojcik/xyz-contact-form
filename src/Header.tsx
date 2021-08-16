import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
    return (
        <Wrapper>
            <Logo>XYZ</Logo>
            <NavContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/policy">Privacy Policy</StyledLink>
            </NavContainer>
        </Wrapper>
    )
}

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

const NavContainer = styled.nav`
    display: flex;
`

const StyledLink = styled(Link)`
    margin: 1em;
`
