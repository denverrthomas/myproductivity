const Activity = ({activity}) => {
  return (
    <div className="activity" style={{color:activity.color}}>
        <div className="activity-content">
            <h3>{activity.name}</h3>
            <div className="days-container">
                <hr style={{backgroundColor:activity.color, width:(activity.days[0] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[1] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[2] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[3] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[4] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[5] * 10) + "px"}}/>
                <hr style={{backgroundColor:activity.color, width:(activity.days[6] * 10) + "px"}}/>
            </div>
        </div>
    </div>
  )
}

export default Activity