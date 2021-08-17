import { useHistory } from 'react-router-dom'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import PageHeader from 'src/components/PageHeader'
import { FormState } from 'src/globalTypes'

type ThankYouScreenProps = {
    formData: FormState
}

export default function ThankYouScreen({ formData }: ThankYouScreenProps) {
    const history = useHistory()

    return (
        <>
            <PageHeader>Dziękujemy za zgłoszenie</PageHeader>
            <Card>
                <Card.Header>Wysłane dane:</Card.Header>
                <pre style={{ overflow: 'auto', maxWidth: '100%' }}>
                    {JSON.stringify(formData, undefined, 2)}
                </pre>
            </Card>
            <div>
                <Button onClick={() => history.push('/')}>Go Home</Button>
            </div>
        </>
    )
}
