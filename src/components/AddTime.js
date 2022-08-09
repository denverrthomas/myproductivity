import { useState } from "react"
import { useEffect } from 'react'
import Button from './Button'


const AddTime = ({color, toggleAddTime, addToDay}) => 
{
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    function timeFinish()
    {
        addToDay(time)
        setTime(0)
        toggleAddTime()
    }

    useEffect(() => {
        let interval = null;
        if(timerOn)
        {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        }
        else
        {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    return (
        <div className="atime_container">
            <div className="atime_popup">
                <div className="time-container">
                    <h1 className="time_mins" style={{color:color}}>
                        <span style={{color:color}}>
                            {("0" + Math.floor((time/60000) % 60)).slice(-2)}
                        </span>
                    </h1>
                    <h1 className="time_secs" style={{color:color}}>:
                        <span style={{color:color}}>
                            {("0" + Math.floor((time/1000) % 60)).slice(-2)}
                        </span>
                    </h1>
                    <h2 className="time_milisecs" style={{color:color}}>.
                        <span style={{color:color}}>
                            {("0" + ((time/10) % 100)).slice(-2)}
                        </span>
                    </h2>
                </div>
                <div className="atime_buttons">
                    {!timerOn && time === 0 && (<Button type='regular' text='START' color={color}
                        onClick={() => setTimerOn(true)}/>)}
                    {timerOn && (<Button type='regular' text='STOP' color={color}
                        onClick={() => setTimerOn(false)}/>)}
                    {!timerOn && time !== 0 && (<Button type='regular' text='RESUME' color={color}
                        onClick={() => setTimerOn(true)}/>)}
                    {!timerOn && time > 0 && (<Button type='regular' text='FINISH' color={color}
                        onClick={() => timeFinish()}/>)}
                </div>
            </div>
        </div>
    )
}

export default AddTime