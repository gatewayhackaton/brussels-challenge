import React, { Component } from 'react'
import {Container, Form, Button} from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
    	<container className="ProfileSelectPage">
    		<div className="ProfileSelectBox">
	      		<button className="btn btn-primary btn-lg" > I'm a citizen </button>
	      		<button className="btn btn-primary btn-lg" > I'm a consumer </button>
	      		<button className="btn btn-primary btn-lg" > I'm a professional </button>
	      </div>
      </container>
    )
  }
}
