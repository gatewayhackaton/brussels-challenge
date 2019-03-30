import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'

const Routes = () => (
    <div>
      <Route path="/" component={Profile} />
    </div>
)

export default Routes