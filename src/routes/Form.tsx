import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import Form from 'src/components/Form/Form'
import PageHeader from 'src/components/PageHeader'
import DEPARTAMENTS from 'src/constants/DEPARTAMENTS'
import ThankYouScreen from 'src/containers/ThankYouScreen'
import { FormState } from 'src/globalTypes'

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

    const [formState, setFormState] = useState<FormState>({
        name: '',
        secondName: '',
        email: '',
        content: '',
    })

    const [placeholder, setPlaceholder] = useState<string>()

    useEffect(() => {
        ;(async () => {
            const placeholder = await fetch(
                'https://baconipsum.com/api/?type=all-meat&paras=2'
            ).then((res) => res.json())

            setPlaceholder(placeholder)
        })()
    }, [])

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
        }, 2000)
    }

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
