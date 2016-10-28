import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import styles from '../main.css'
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
          <NavItem eventKey={this.props.key} href={this.props.href}>
            <Glyphicon glyph={this.props.icon}>
              <p style={{ fontSize: '10px' }}>{this.props.tab}</p>
            </Glyphicon>
          </NavItem>
    )
  }
}
