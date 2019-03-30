import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
	constructor() {
    super();

    this.state = {
      countriesEU: [],
			countries: [],
			profile: [],
			exactProfile: []
    };
	}
	
	componentDidMount(){
		fetch('')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            characters: result
          });
        }
      )
	}

  render() {
    return (
    	<React.Fragment>
				<h2>About you</h2>
				<Form>
					<Form.Group className="userProfile" controlId="userProfile">
						<Form.Label for="countryEU" className="mt-3">What's your country ?</Form.Label>
						<Form.Control type="text" name="countryEU"/>
						<Form.Label for="country" className="mt-3">In witch country did your problem happend ?</Form.Label>
						<Form.Control type="text" name="country"/>
					</Form.Group>
      	</Form>
			</React.Fragment>
    )
  }
}
