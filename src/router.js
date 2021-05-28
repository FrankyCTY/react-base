import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
