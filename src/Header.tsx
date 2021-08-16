import styled from 'styled-components'

export default function Header() {
    return (
        <Wrapper>
            <Logo>XYZ</Logo>
            <NavContainer>
                <div>Link 1</div>
                <div>Link 2</div>
            </NavContainer>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;

    padding: 0 min(3em, 5%);

    background-color: ${(props) => props.theme.colors.main.main};
    color: ${(props) => props.theme.colors.main.contrastText};
`

const Logo = styled.h1`
    margin-right: auto;
`

const NavContainer = styled.nav`
    display: flex;
`
