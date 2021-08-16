import { useEffect, useRef, useState } from 'react'

type Size = Partial<Pick<DOMRect, 'height' | 'width' | 'x' | 'y'>>

/**
 * hook that returns element size and position, and updates it on window resize
 */
export default function useElementSize(): [
    size: Size,
    ref: React.MutableRefObject<HTMLElement | undefined>
] {
    const refToElement = useRef<HTMLElement>()
    const [size, setElementSize] = useState<Size>({})

    useEffect(() => {
        if (refToElement.current) {
            setElementSize(refToElement.current.getBoundingClientRect())
            refToElement.current?.addEventListener('resize', () => console.log('resize'))
        }
    }, [refToElement])

    const handleResize = () => {
        if (refToElement.current) setElementSize(refToElement.current.getBoundingClientRect())
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [refToElement])

    return [size, refToElement]
}
