import {Routes, Route} from 'react-router-dom'
import {Login} from './components/routes/Login'
import {Home} from './components/routes/Home'
function App()
{
  return(
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
  ); 
}

export default App;