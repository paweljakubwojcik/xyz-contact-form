import React from 'react'
import useElementSize from 'src/hooks/useElementSize'
import styled from 'styled-components'
import Navbar from './Navbar'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children, ...props }: LayoutProps) {
    const [{ height: navbarHeight = 100 }, refToNavbar] = useElementSize()

    return (
        <>
            <Navbar ref={refToNavbar as any} />
            <ContentWrapper marginTop={navbarHeight}>{children}</ContentWrapper>
        </>
    )
}

const ContentWrapper = styled.main<{ marginTop: number }>`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    min-height: calc(100vh - ${(props) => props.marginTop}px);

    padding: 1em ${(props) => props.theme.padding.layoutHorizontal};
    margin: 0 auto;
`
