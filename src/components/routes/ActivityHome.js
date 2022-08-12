import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Weeks from '../Weeks';
import AddTime from '../AddTime';

export const ActivityHome = () =>{

    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const location = useLocation()
    const activity = location.state.activity
    const navigate = useNavigate()
    const [showAddTime, setShowAddTime] = useState(false)


    function onBackClick()
    {
        // When the back button is clicked, it should redirect to last page (do we use history hook for this?)
        navigate('../home')
    }

    function toggleAddTime()
    {
        setShowAddTime(!showAddTime)
        console.log(showAddTime)
    }

    function addToDay(newTime)
    {
        activity.days[currentDay === 0 ? 6 : (currentDay-1)] += (newTime/3600000)
        console.log(newTime)
    }

    return (
        // creating a header for the activity home page
        <div className='ahome_wrapper'>
            <header className="ahome_header" style={{backgroundColor: activity.color, backgroundImage:'none'}}>
                {/* <Button type="back" text="<" onClick={onBackClick}></Button> */}
                <h1 style={{color:'white'}}>{activity.name}</h1>    
            </header>

            <div className="ahome_content_wrapper">
                <Weeks activity={activity} />
                <Button type="regular" text="ADD TIME" onClick={toggleAddTime} color={'black'}></Button>
                {showAddTime && <AddTime color={activity.color} toggleAddTime={toggleAddTime} addToDay={addToDay}/>}
            </div>
        </div>

        // content for rest of page
    )
}