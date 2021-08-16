import React from 'react'
import styled from 'styled-components'
import Header from './Header'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children, ...props }: LayoutProps) {
    return (
        <>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
        </>
    )
}

const ContentWrapper = styled.main`
    display: flex;
    max-width: 1000px;

    padding: 1em;
    margin: 0 auto;
`
