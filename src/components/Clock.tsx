import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useState } from 'react'

dayjs.extend(customParseFormat)
const FORMAT_STRING = 'DD/MM/YY HH:mm:ss'

export default function Clock({ ...props }) {
    const [dateString, setDateString] = useState(dayjs().format(FORMAT_STRING))
    useEffect(() => {
        let intervalId = setInterval(() => {
            setDateString(dayjs().format(FORMAT_STRING))
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return <div {...props}>{dateString}</div>
}
