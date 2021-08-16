import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import Card from 'src/components/Card'
import PageHeader from 'src/components/PageHeader'

export default function Form() {
    const { state } = useLocation<{ department: string }>()
    const history = useHistory()
    useEffect(() => {
        if (!state || !state.department) {
            history.push('/')
        }
    }, [history, state])

    return (
        <>
            <PageHeader>Form</PageHeader>
            <Card>
                <Card.Header>{state?.department}</Card.Header>
            </Card>
        </>
    )
}
