import { useState } from "react"

function Weeks({activity}) {

    const [unit, setUnit] = useState('h')


    return (
    <div className="week_container">
        <h2>Current Week</h2>
        <div className = "week_data_container">
            {activity.days.map((day, index) => (
                <div className="day_container">
                    {index === 0 && <h3 className="day_text">MON</h3>}
                    {index === 1 && <h3 className="day_text">TUE</h3>}
                    {index === 2 && <h3 className="day_text">WED</h3>}
                    {index === 3 && <h3 className="day_text">THU</h3>}
                    {index === 4 && <h3 className="day_text">FRI</h3>}
                    {index === 5 && <h3 className="day_text">SAT</h3>}
                    {index === 6 && <h3 className="day_text">SUN</h3>}
                    <div className="day_bar"
                        style=
                        {{
                            backgroundColor:activity.color,
                            height: day > 0 ? 
                            (day * (unit === 'h' ? 40 : (unit === 'm' ? 200 : 1000)))
                            : 0.1 + "px"
                        }}>
                    </div>
                    <h3 className="day_time"style={{color:activity.color}}>
                        {unit === 'h' && <>{Math.round(day*100)/100}h</>}
                        {unit === 'm' && <>{Math.round(day*6000)/100}m</>}
                        {unit === 's' && <>{Math.round(day*3600*100)/100}s</>}
                    </h3>
                </div>
            ))}
        </div>
        <div className="unit-select_container">
            <select className="unit-select" onChange={(e)=> setUnit(e.target.value)}>
                <option value="h">Hours</option>
                <option value="m">Minutes</option>
                <option value="s">Seconds</option>
            </select>
        </div>
    </div>
  )
}

export default Weeks