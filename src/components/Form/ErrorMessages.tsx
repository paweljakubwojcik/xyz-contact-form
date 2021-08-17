import React from 'react'
import styled from 'styled-components'

type ErrorMessagesProps = {
    children: React.ReactNode
}

export default function ErrorMessages({ children }: ErrorMessagesProps) {
    return <Errors>{children}</Errors>
}

const Errors = styled.div`
    color: ${(props) => props.theme.colors.text.error};
`
