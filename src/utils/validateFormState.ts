const emptyError = 'pole nie może być puste'
const emailError = 'proszę wprowadzić prawidłowy email'
const toLongError = 'wiadomość jest zbyt długa'

const checkIfIsEmpty = (value: string, errors: Array<string>) => {
    if (!value.trim()) {
        errors.push(emptyError)
    }
}

const validateTextField = (value: string) => {
    let errors: Array<string> = []
    checkIfIsEmpty(value, errors)
    return errors.length ? errors : undefined
}

const validateEmailField = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let errors: Array<string> = []
    checkIfIsEmpty(value, errors)
    if (!value.match(emailRegex)) {
        errors.push(emailError)
    }

    return errors.length ? errors : undefined
}

const validateTextAreaField = (value: string, maxLength: number) => {
    let errors: Array<string> = []
    checkIfIsEmpty(value, errors)

    const numberOfCharacters = value?.toString().length
    if (numberOfCharacters === maxLength) {
        errors.push(toLongError)
    }

    return errors.length ? errors : undefined
}

export { validateTextAreaField, validateEmailField, validateTextField }
