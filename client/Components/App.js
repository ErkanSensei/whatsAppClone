import React, { Component } from 'react';
import { Tabs, Tab, Nav, NavItem } from 'react-bootstrap'
import styles from '../main.css'
export default class App extends Component {

  render() {
    return(
      <div>
        <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </div>
    )
  }
}
