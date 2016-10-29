import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  handleSelect() {
    console.log("I WAS SELECTED")
  }
  render() {
    let offset
    if (this.props.eventKey === 1) {
      offset = 1
    } else {
      offset = 0
    }
    return(
      <Col xs={2} xsOffset={offset}>
        <LinkContainer to={this.props.href}>
          <NavItem
            eventKey={this.props.eventKey}
            href={this.props.href}
          >
            <Glyphicon glyph={this.props.icon}>
              <p style={{ fontSize: '10px' }}>{this.props.tab}</p>
            </Glyphicon>
          </NavItem>
        </LinkContainer>
      </Col>
    )
  }
}
