import dayjs from 'dayjs'

/**
 * throws an error if seconds on clock are beetween 10-19 or 30-39 or 50-59
 */
const checkSecondsValue = () => {
    const seconds = dayjs().second()
    if (
        (seconds >= 10 && seconds <= 19) ||
        (seconds >= 30 && seconds <= 39) ||
        (seconds >= 50 && seconds <= 59)
    ) {
        throw new Error('seconds on clock are beetween 10-19 or 30-39 or 50-59')
    }
}

export default checkSecondsValue
