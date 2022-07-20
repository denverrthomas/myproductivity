import React from 'react'
import { Router, Route} from 'react-router-dom'
import Home from './components/routes/Home.js';
import Login from './components/routes/Login.js';
//import level from './level.js'
//import level1 from './level1.js'
//import level2 from './level2.js'
//import result from './result.js'

const routes = (
  <Router>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
  </Router>
);

export default routes;