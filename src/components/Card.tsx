import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0.4em;

    background-color: ${(props) => props.theme.colors.background.paper};
    color: ${(props) => props.theme.colors.text.secondary};

    border-radius: 4px;
    border: 1px solid #e5e5e5;
`

const Header = styled.div`
    font-weight: bolder;
    font-size: larger;

    margin: 0.4em 0;

    color: ${(props) => props.theme.colors.text.primary};
`

export default Object.assign(Card, { Header })
