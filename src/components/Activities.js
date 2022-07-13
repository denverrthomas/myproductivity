import Button from './Button'
import Activity from './Activity'

const Activities = ({activities, onAdd, showAdd}) => {
  function checkForActivities()
  {
    if(activities.length < 1)
    {
      return <div style={{width:'100%', textAlign:'center', marginTop:'3em'}}><p style={{fontSize: '20px', letterSpacing: '2px', opacity:'50%'}}>No Activities</p></div>
    }
  }
  return (
    <div className="activities-section">
        <div className="activities-header">
            <h2>MY ACTIVITIES</h2>
            <Button type="round" text={showAdd ? "x" : "+"} onClick={onAdd}/>
        </div>
        <div className="activities-wrapper">
    
            {activities.slice(0).reverse().map((activity) => (
            <Activity key={activity.id} activity={activity}/>
            ))}

            {checkForActivities()}


        </div>
    </div>
  )
}

export default Activities