import React, { Component } from 'react'
import {DropdownButton, Dropdown, Button, drop} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Label } from '@amcharts/amcharts4/core';

export default class Selection extends Component {
 
  render() {

    return (
      <div className="text-center">
      <h1 className="pt-2 pb-2 mb-3">European Commission Obstacle Statistics</h1>
        <p><b>Research by topics</b></p>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Choose a topic
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/work">Work</Dropdown.Item>
            <Dropdown.Item href="/taxes">Taxes</Dropdown.Item>
            <Dropdown.Item href="/travel">Travel</Dropdown.Item>
            <Dropdown.Item href="/driver_license">Driver license</Dropdown.Item>
            <Dropdown.Item href="/studies">Studies</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

