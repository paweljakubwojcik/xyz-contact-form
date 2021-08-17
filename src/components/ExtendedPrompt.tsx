import { useCallback, useEffect } from 'react'
import { Prompt, PromptProps } from 'react-router'

type ExtendedPromptProps = PromptProps

/**
 * Component that extends reacts-router's <Prompt /> functionality by adding prompt on reload, and tab close
 */
export default function ExtendedPrompt({ when, message }: ExtendedPromptProps) {
    // alert before leaving the page

    const confirmExit = useCallback(
        (e: BeforeUnloadEvent) => {
            e.preventDefault()
            e.returnValue = message
        },
        [message]
    )

    useEffect(() => {
        if (when) {
            window.addEventListener('beforeunload', confirmExit)
        } else {
            window.removeEventListener('beforeunload', confirmExit)
        }

        return () => window.removeEventListener('beforeunload', confirmExit)
    }, [confirmExit, when])

    return <Prompt when={when} message={message} />
}
