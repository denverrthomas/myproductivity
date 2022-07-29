import { useState } from "react"
import useLongPress from "../hooks/useLongPress"
import {useNavigate} from 'react-router-dom'

const Activity = ({activity, removeActivity}) => {
  const [deleteMode, setDeleteMode] = useState(false)
  let navigate = useNavigate()

  const onLongPress = () => {
    setDeleteMode(!deleteMode)
  };
  
  const onClick = () => {
    if(deleteMode) // if delete mode is active, then have click delete activity
    {
      console.log("activity has been deleted")
      removeActivity(activity.id);
    }
    else // if delete mode is not active, then have click take user to activity
    {
      // Route to activity page
      console.log('Loading activity page')
      navigate('../activity', {state:{activity}})
    }
  }
  
  const defaultOptions = {
      shouldPreventDefault: true,
      delay: 500,
  };
const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  
  return (
    <div className={`activity deletemode-${deleteMode}`}
      style={{color:activity.color}}
      {...longPressEvent}>

        {
        deleteMode === false ? // if deleteMode is not on then load content...
          <div className="activity-content">
              <h3>{activity.name}</h3>
              <div className="days-container">
                  {activity.days.map((day) => (
                  <hr style={{backgroundColor:activity.color, width: day === 0 ? 1 : (day * 10) + "px"}}/>
                  ))}
              </div>
          </div>
          : // if deleteMode is not on then load activity-delete...
          <div className="activity-delete-cont">
            <h1>X</h1>
          </div>
        }
    </div>
  )
}

export default Activity