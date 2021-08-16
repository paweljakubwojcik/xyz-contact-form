import { useEffect, useState } from 'react'

export default function useFetch<T>(input: RequestInfo) {
    const [result, setResult] = useState<T>()
    const [loading, setLoading] = useState<boolean>()
    useEffect(() => {
        ;(async () => {
            const placeholder = await fetch(input).then((res) => res.json())

            setResult(placeholder)
            setLoading(false)
        })()
    }, [input])

    return { result, loading }
}
