import { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import Form from 'src/components/Form'
import PageHeader from 'src/components/PageHeader'
import DEPARTAMENTS from 'src/constants/DEPARTAMENTS'
import ThankYouScreen from 'src/containers/ThankYouScreen'

type FormState = {
    name?: string
    secondName?: string
    email?: string
    content?: string
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

    const [formState, setFormState] = useState<FormState>({
        name: '',
        secondName: '',
        email: '',
        content: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formState)
        setSubmitted(true)
    }

    return (
        <>
            {!submitted ? (
                <>
                    <PageHeader>Form</PageHeader>
                    <Card>
                        <Card.Header>{state?.department}</Card.Header>
                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                type="text"
                                label={'Name'}
                                name="name"
                                onChange={handleChange}
                                value={formState.name}
                            />
                            <Form.Input
                                type="text"
                                label={'Second Name'}
                                name="secondName"
                                onChange={handleChange}
                                value={formState.secondName}
                            />
                            <Form.Input
                                type="email"
                                label={'Email'}
                                name="email"
                                onChange={handleChange}
                                value={formState.email}
                            />
                            <Form.TextArea
                                placeholder={'lorem ipsum'}
                                name="content"
                                onChange={handleChange}
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
