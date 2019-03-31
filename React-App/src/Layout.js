import React, { Component } from 'react'
import Selection from './Selection'
import Routes from './Routes'


export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Selection/>
        <div className="box">
          <Routes/>
        </div>
      </React.Fragment>
    )
  }
}

