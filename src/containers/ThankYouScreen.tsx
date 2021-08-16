import { Link } from 'react-router-dom'
import Card from 'src/components/Card'
import PageHeader from 'src/components/PageHeader'

type ThankYouScreenProps = {
    formData: {
        [key: string]: any
    }
}

export default function ThankYouScreen({ formData }: ThankYouScreenProps) {
    return (
        <>
            <PageHeader>thank you</PageHeader>
            <Card>
                <Card.Header>This is submitted data</Card.Header>
                <pre style={{ overflow: 'auto', maxWidth: '100%' }}>
                    {JSON.stringify(formData, undefined, 2)}
                </pre>
            </Card>
            <Link to={'/'}>Go Home</Link>
        </>
    )
}
