import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import ExtendedPrompt from 'src/components/ExtendedPrompt'
import Form from 'src/components/Form/Form'
import PageHeader from 'src/components/PageHeader'
import DEPARTAMENTS from 'src/constants/DEPARTAMENTS'
import ThankYouScreen from 'src/containers/ThankYouScreen'
import ErrorScreen from 'src/containers/ErrorScreen'
import { FormState } from 'src/globalTypes'
import useFetch from 'src/hooks/useFetch'
import {
    validateEmailField,
    validateTextAreaField,
    validateTextField,
} from 'src/utils/validateFormState'
import checkSecondsValue from 'src/utils/checkSecondsValue'

const initialFormState: FormState = {
    name: '',
    secondName: '',
    email: '',
    content: '',
}

type ErrorsState = Partial<Record<keyof FormState, Array<string>> & { form: Array<Error> }>

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

    // formNotEmpty is changed independently from formState after submission
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

    const { result: placeholder = '' } = useFetch<string>(
        'https://baconipsum.com/api/?type=all-meat&paras=2'
    )

    useEffect(() => {
        setFormState((prev) => ({ ...prev, content: placeholder }))
    }, [placeholder])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // simulating real word error handling
        try {
            checkSecondsValue()
            setLoading(true)
            // if some hacker tries to edit html directly and deletes disabled class from button
            if (areThereAnyErrors) {
                throw new Error('błędne dane')
            }
            // simulating sending real request
            setTimeout(() => {
                setLoading(false)
                setSubmitted(true)
                setFormNotEmpty(false)
            }, 1000)
        } catch (e) {
            setErrors({ form: [e] })
            setLoading(false)
        }
    }

    const areThereAnyErrors = !!Object.values(errors).find((v) => !!v)

    if (errors.form?.length) {
        return <ErrorScreen errors={errors.form} />
    }

    /* rendering 2 screens on the same route to not making 'thank u' url  */
    return (
        <>
            {!submitted ? (
                <>
                    <PageHeader>Formularz zgłoszeniowy</PageHeader>
                    <Card>
                        <Card.Header>{state?.department}</Card.Header>
                        <Form onSubmit={handleSubmit} loading={loading}>
                            <Form.Input
                                type="text"
                                label={'Imię'}
                                name="name"
                                title="Enter your name"
                                onChange={handleChange}
                                value={formState.name}
                                errors={errors.name}
                            />
                            <Form.Input
                                type="text"
                                label={'Nazwisko'}
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
                                name="content"
                                title="Write something"
                                onChange={handleChange}
                                maxLength={MAX_CONTENT_LENGTH}
                                value={formState.content}
                                errors={errors.content}
                            />
                            <Button type="submit" disabled={areThereAnyErrors}>
                                Wyślij
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
