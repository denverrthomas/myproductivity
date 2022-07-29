import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Weeks from '../Weeks';

export const ActivityHome = () =>{

    const location = useLocation()
    const activity = location.state.activity
    const navigate = useNavigate()
    const [btnToggle, setBtnToggle] = useState(false)

    function onBackClick()
    {
        // When the back button is clicked, it should redirect to last page (do we use history hook for this?)
        navigate('../home')
    }

    return (
        // creating a header for the activity home page
        <div className='ahome_wrapper'>
            <header className="ahome_header" style={{backgroundColor: activity.color, backgroundImage:'none'}}>
                <Button type="back" text="<" onClick={onBackClick}></Button>
                <h1 style={{color:'white'}}>{activity.name}</h1>    
            </header>

            <div className="ahome_content_wrapper">
                <Weeks activity={activity} />
                <Button type="regular" text="ADD TIME" onClick={btnToggle && onAddTime}></Button>
            </div>
        </div>

        // content for rest of page
    )
}