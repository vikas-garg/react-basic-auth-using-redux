import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Pages
import LoginPage from './components/login'
import Dashboard from './components/dashboard'
import Logout from './components/logout'
import Authenticate from './helpers/authenticate'

const App = (props) => {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path='/' exact component={LoginPage} />
      <Route path='/logout' exact component={Logout} />


      {/* Authenticated Routes */}
      <Authenticate>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Authenticate>


    </Switch>
  )
};

export default App