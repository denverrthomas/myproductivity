import { useState } from "react"

function Weeks({activity}) {

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
                            height: day > 0 ? (day * 10) : 1 + "px"
                        }}>
                    </div>
                    <h3 className="day_time"style={{color:activity.color}}>
                        {day}h
                    </h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Weeks