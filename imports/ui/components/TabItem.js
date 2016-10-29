import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  handleSelect() {
    console.log("I WAS SELECTED")
  }
  render() {
    return(
          <NavItem
            eventKey={this.props.key}
            href={this.props.href}
          >
            <Glyphicon glyph={this.props.icon}>
              <p style={{ fontSize: '10px' }}>{this.props.tab}</p>
            </Glyphicon>
          </NavItem>
    )
  }
}
