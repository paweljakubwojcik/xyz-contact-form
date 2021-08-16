import { ChangeEvent, useEffect, useState } from 'react'
import { Prompt, useHistory, useLocation } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import Form from 'src/components/Form/Form'
import PageHeader from 'src/components/PageHeader'
import DEPARTAMENTS from 'src/constants/DEPARTAMENTS'
import ThankYouScreen from 'src/containers/ThankYouScreen'
import { FormState } from 'src/globalTypes'
import useFetch from 'src/hooks/useFetch'

const initialFormState: FormState = {
    name: '',
    secondName: '',
    email: '',
    content: '',
}

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
    const [formNotEmpty, setFormNotEmpty] = useState(false)
    useEffect(() => {
        const formNotEmpty = !!Object.values(formState).find((v) => !!v)
        setFormNotEmpty(formNotEmpty)
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
        }, 2000)
    }

    // alert before reload
    useEffect(() => {
        function confirmExit(e: BeforeUnloadEvent) {
            e.preventDefault()
            e.returnValue = ''
        }
        if (formNotEmpty) {
            window.addEventListener('beforeunload', confirmExit)
        } else {
            window.removeEventListener('beforeunload', confirmExit)
        }

        return () => window.removeEventListener('beforeunload', confirmExit)
    }, [formNotEmpty])

    return (
        <>
            {!submitted ? (
                <>
                    <PageHeader>Form</PageHeader>
                    <Card>
                        <Card.Header>{state?.department}</Card.Header>
                        <Form onSubmit={handleSubmit} loading={loading}>
                            <Prompt when={formNotEmpty} message={`Your data will be lost`} />
                            <Form.Input
                                type="text"
                                label={'Name'}
                                name="name"
                                title="Enter your name"
                                onChange={handleChange}
                                value={formState.name}
                            />
                            <Form.Input
                                type="text"
                                label={'Second Name'}
                                name="secondName"
                                title="Enter your second name"
                                onChange={handleChange}
                                value={formState.secondName}
                            />
                            <Form.Input
                                type="email"
                                label={'Email'}
                                name="email"
                                title="Enter your email"
                                onChange={handleChange}
                                value={formState.email}
                            />
                            <Form.TextArea
                                placeholder={placeholder}
                                name="content"
                                title="Write something"
                                onChange={handleChange}
                                maxLength={5000}
                                value={formState.content}
                            />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Card>
                </>
            ) : (
                <ThankYouScreen formData={formState} />
            )}
        </>
    )
}
