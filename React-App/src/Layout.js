import React, { Component } from 'react'
import NavBar from './NavBar'
import Routes from './Routes'
import Footer from './Footer'


export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Routes/>
        <Footer />
      </React.Fragment>
    )
  }
}

