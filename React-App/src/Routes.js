import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WorkGraph from './WorkGraph'
import TaxesGraph from './TaxesGraph'
import TravelGraph from './TravelGraph'
import DriverLicenseGraph from './DriverLicenseGraph'
import StudiesGraph from './StudiesGraph'
import NoData from './NoData'

const Routes = () => (
    <Switch>
      <Route exact path="/" component={NoData}/>
      <Route exact path="/work" component={WorkGraph} />
      <Route exact path="/taxes" component={TaxesGraph} />
      <Route exact path="/travel" component={TravelGraph} />
      <Route exact path="/driver_license" component={DriverLicenseGraph} />
      <Route exact path="/studies" component={StudiesGraph} />
    </Switch>)

export default Routes