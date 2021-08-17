import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import ExtendedPrompt from 'src/components/ExtendedPrompt'
import Form from 'src/components/Form/Form'
import PageHeader from 'src/components/PageHeader'
import DEPARTAMENTS from 'src/constants/DEPARTAMENTS'
import ThankYouScreen from 'src/containers/ThankYouScreen'
import { ErrorsState, FormState } from 'src/globalTypes'
import useFetch from 'src/hooks/useFetch'
import {
    validateEmailField,
    validateTextAreaField,
    validateTextField,
} from 'src/utils/validateFormState'

const initialFormState: FormState = {
    name: '',
    secondName: '',
    email: '',
    content: '',
}

const MAX_CONTENT_LENGTH = 5000

export default function FormPage() {
    const { state } = useLocation<{ department: typeof DEPARTAMENTS[number] }>()
    const history = useHistory()

    // handling typing url directly in the browser
    useEffect(() => {
        if (!state || !state.department) {
            history.push('/')
        }
    }, [history, state])

    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formState, setFormState] = useState<FormState>(initialFormState)
    const [errors, setErrors] = useState<ErrorsState>({})

    // formNotEmpty is changed independently form formState after submission
    const [formNotEmpty, setFormNotEmpty] = useState(false)
    useEffect(() => {
        const formNotEmpty = !!Object.values(formState).find((v) => !!v)
        setFormNotEmpty(formNotEmpty)

        // validating form fields
        setErrors({
            name: validateTextField(formState.name),
            secondName: validateTextField(formState.secondName),
            email: validateEmailField(formState.email),
            content: validateTextAreaField(formState.content, MAX_CONTENT_LENGTH),
        })
    }, [formState])

    const { result: placeholder } = useFetch<string>(
        'https://baconipsum.com/api/?type=all-meat&paras=2'
    )

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        // simulating sending real request
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
            setFormNotEmpty(false)
        }, 1000)
    }

    const areThereAnyErrors = !!Object.values(errors).find((v) => !!v)

    /* rendering 2 screens on the same route to not making 'thank u' url  */
    return (
        <>
            {!submitted ? (
                <>
                    <PageHeader>Form</PageHeader>
                    <Card>
                        <Card.Header>{state?.department}</Card.Header>
                        <Form onSubmit={handleSubmit} loading={loading}>
                            <Form.Input
                                type="text"
                                label={'Name'}
                                name="name"
                                title="Enter your name"
                                onChange={handleChange}
                                value={formState.name}
                                errors={errors.name}
                            />
                            <Form.Input
                                type="text"
                                label={'Second Name'}
                                name="secondName"
                                title="Enter your second name"
                                onChange={handleChange}
                                value={formState.secondName}
                                errors={errors.secondName}
                            />
                            <Form.Input
                                type="email"
                                label={'Email'}
                                name="email"
                                title="Enter your email"
                                onChange={handleChange}
                                value={formState.email}
                                errors={errors.email}
                            />
                            <Form.TextArea
                                placeholder={placeholder}
                                name="content"
                                title="Write something"
                                onChange={handleChange}
                                maxLength={MAX_CONTENT_LENGTH}
                                value={formState.content}
                                errors={errors.content}
                            />
                            <Button type="submit" disabled={areThereAnyErrors}>
                                Submit
                            </Button>
                        </Form>
                    </Card>
                    <ExtendedPrompt
                        when={formNotEmpty}
                        message={
                            'Formularz posiada nie wysłane dane, czy jesteś pewny że chcesz opuścić stronę ?'
                        }
                    />
                </>
            ) : (
                <ThankYouScreen formData={formState} />
            )}
        </>
    )
}
