import React, { Component } from 'react'

export default class NoData extends Component {
 
    render() {
  
      return (
        <div className="NoDataBox text-center" >
            <p className="NoDataMessage">No data selected</p>
        </div>
      )
    }
  }