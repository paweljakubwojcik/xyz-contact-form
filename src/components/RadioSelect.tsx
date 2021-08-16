import styled from 'styled-components'

type RadioSelectProps = {
    options: Array<{ label: string; value: any }>
    active?: any
    setActive: (value: any) => void
}

export default function RadioSelect({ options, active, setActive }: RadioSelectProps) {
    return (
        <Container>
            {options.map(({ label, value }, i) => (
                <SelectOption key={i} checked={active === value}>
                    <StyledInput
                        type="radio"
                        id={label}
                        name={label}
                        value={value}
                        checked={active === value}
                        onChange={() => setActive(value)}
                    />
                    <label htmlFor={label}>{label}</label>
                </SelectOption>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;

    margin: 1em;
`
const SelectOption = styled.div<{ checked: boolean }>`
    display: flex;
    align-items: center;

    color: ${(props) => (props.checked ? props.theme.colors.main.main : 'inherit')};

    margin: 1em;

    &:hover,
    &:focus-within {
        color: ${(props) => (!props.checked ? props.theme.colors.main.light : '')};
    }

    transition: color 0.3s;
`

const StyledInput = styled.input`
    margin: 0.6em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 16px;
    height: 16px;

    border: 2px solid #999;
    transition: 0.2s all linear;

    &:checked {
        border: 2px solid ${(props) => props.theme.colors.main.main};
    }
`
