export type FormState = {
    name: string
    secondName: string
    email: string
    content: string
}

export type ErrorsState = Partial<Record<keyof FormState, Array<string>>>
