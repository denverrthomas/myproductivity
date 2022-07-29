import {Routes, Route} from 'react-router-dom'
import {Login} from './components/routes/Login'
import {Home} from './components/routes/Home'
import { ActivityHome } from './components/routes/ActivityHome';

function App()
{

  return(
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/activity' element={<ActivityHome/>}></Route>
    </Routes>
  ); 
}

export default App;