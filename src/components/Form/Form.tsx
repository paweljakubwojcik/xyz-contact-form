import styled, { DefaultTheme, StyledComponentProps } from 'styled-components'
import LoadingSpinner from '../LoadingSpinner'
import Input from './Input'
import TextArea from './TextArea'

type ExtendedFormProps = {
    loading?: boolean
}

const Form = ({
    children,
    loading = false,
    ...props
}: StyledComponentProps<'form', DefaultTheme, ExtendedFormProps, never>) => {
    return (
        <StyledForm {...props}>
            {children}
            {loading && (
                <LoadingOverlay>
                    <div>Just simulating real request</div>
                    <LoadingSpinner />
                </LoadingOverlay>
            )}
        </StyledForm>
    )
}

const StyledForm = styled.form`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
`

const LoadingOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dadada95;
    border-radius: 10px;
`

export default Object.assign(Form, { Input, TextArea })
