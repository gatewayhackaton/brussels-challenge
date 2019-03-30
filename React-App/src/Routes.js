import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Profile from './Profile'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Profile} />
    </Switch>)

export default Routes