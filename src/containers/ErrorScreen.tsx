import { useHistory } from 'react-router'
import Button from 'src/components/Button'
import PageHeader from 'src/components/PageHeader'
import { useTheme } from 'styled-components'
import Card from '../components/Card'

type ErrorsScreenProps = {
    errors: Array<Error>
}

export default function ErrorScreen({ errors }: ErrorsScreenProps) {
    const { colors } = useTheme()
    const history = useHistory()

    return (
        <>
            <PageHeader>Wystąpił nieznany błąd</PageHeader>
            <Card style={{ color: colors.text.error }}>
                {errors.map((e) => (
                    <>
                        <pre style={{ fontSize: '2em' }}>{e.message}</pre>
                        <pre> {JSON.stringify(e.stack, undefined, 2)} </pre>
                    </>
                ))}
            </Card>
            <Button onClick={() => history.push('/')}>Wróc na strone startową</Button>
        </>
    )
}
