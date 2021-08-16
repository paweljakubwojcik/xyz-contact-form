import { useState } from 'react'
import { useHistory } from 'react-router'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import PageHeader from 'src/components/PageHeader'
import RadioSelect from 'src/components/RadioSelect'
import DEPARTAMENTS from '../constants/DEPARTAMENTS'

export default function Home() {
    const history = useHistory()
    const [choosenDepart, setChoosenDepart] = useState<typeof DEPARTAMENTS[number]>()

    const handleGoToForm = () => {
        history.push('/form', { department: choosenDepart })
    }

    return (
        <>
            <PageHeader>Home</PageHeader>
            <Card>
                <Card.Header>Choose departament</Card.Header>
                <RadioSelect
                    options={DEPARTAMENTS.map((dep) => ({ label: dep, value: dep }))}
                    active={choosenDepart}
                    setActive={setChoosenDepart}
                />
                <Button onClick={handleGoToForm} disabled={typeof choosenDepart === 'undefined'}>
                    Go to Form
                </Button>
            </Card>
        </>
    )
}
