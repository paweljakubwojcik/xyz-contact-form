import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useEffect, useState } from 'react'

dayjs.extend(customParseFormat)
const FORMAT_STRING = 'HH:mm:ss'

export default function Clock() {
    const [dateString, setDateString] = useState(dayjs().format(FORMAT_STRING))
    useEffect(() => {
        let intervalId = setInterval(() => {
            setDateString(dayjs().format(FORMAT_STRING))
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return <div style={{ margin: '0.5em' }}>{dateString}</div>
}
