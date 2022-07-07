import Button from './Button'
import Activity from './Activity'

const Activities = ({activities, onAdd, showAdd}) => {
  return (
    <div className="activities-section">
        <div className="activities-header">
            <h2>MY ACTIVITIES</h2>
            <Button type="round" text={showAdd ? "x" : "+"} onClick={onAdd}/>
        </div>
        <div className="activities-wrapper">
            {activities.map((activity) => (
            <Activity key={activity.id} activity={activity}/>
            ))}
        </div>
    </div>
  )
}

export default Activities