import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

function StartButton({
    totalTime,
    setTotalTime
}){
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const countdown = setInterval(() => {
            if(totalTime > 0 && started){
                setTotalTime(totalTime - 1)
            }
        }, 1000)
        return () => clearInterval(countdown)
    }, [started, totalTime])

    return (
        <Button
            variant={started ? "danger" : "success"}
            type="button"
            style={{"width": "15%"}}
            onClick={() => {
                console.log(started)
                setStarted(!started)
            }}
        >
            {started ? "Pause" : "Start"}
        </Button>
    )
}

export default StartButton