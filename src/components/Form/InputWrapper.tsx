import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ErrorMessages from './ErrorMessages'

type InputWrapperProps = {
    children: React.ReactNode
    value: any
    errors?: Array<string>
    setErrorState: (errorState: boolean) => void
    [key: string]: any
}

export default function InputWrapper({
    value,
    children,
    errors,
    setErrorState,
    ...rest
}: InputWrapperProps) {
    const [touched, setTouched] = useState(false)
    useEffect(() => {
        if (value) setTouched(true)
    }, [value])

    const errorState = !!errors?.length && touched

    useEffect(() => {
        setErrorState(errorState)
    }, [errorState, setErrorState])

    return (
        <Wrapper>
            <InputContainer {...rest}>{children}</InputContainer>
            {errorState && <ErrorMessages> {errors?.map((e) => e)} </ErrorMessages>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 1em;
    width: 100%;
`

const InputContainer = styled.div`
    position: relative;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    width: 100%;
`
