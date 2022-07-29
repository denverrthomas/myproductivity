import {useState} from 'react'
import Header from '../Header.js'
import Activities from '../Activities.js'
import AddActivity from '../AddActivity.js'

export const Home = () => {
    const [showAddActivity, setShowAddActivity] = useState(false)
    const [activities, setActivities] = useState(
      [
          {
              id:1,
              name: 'Reading',
              description: 'Logged amount of reading (limited to books)',
              color: '#3E1CFF',
              days:[1,2,3,4,5,6,7]
          },
          {
              id:2,
              name: 'Fitness',
              description: 'Any form of exercise is logged',
              color: '#FF5252',
              days:[3,2,1,3,5,2.3,10]
          },
          {
              id:3,
              name: 'Programming',
              description: 'Any form of programming is logged',
              color: '#A700FF',
              days:[10,8,1.5,4.3,2.5,3.5,6.7]
          }
      ]
    )
  
    function addActivity(activity)
    {
      const id = Math.floor(Math.random() * 1000) + 1
      const newActivity = {id,...activity}
      setActivities([...activities, newActivity])
      setShowAddActivity(false)
    }

    function removeActivity(id)
    {
      setActivities(activities.filter((activity) => activity.id !== id))
    }
  
    return (
      <div>
        <Header/>
        {showAddActivity && <AddActivity addActivity={addActivity}/>}
        <Activities activities={activities} onAdd={()=> setShowAddActivity(!showAddActivity)} showAdd={showAddActivity} removeActivity={removeActivity}/>
      </div>
    );
}