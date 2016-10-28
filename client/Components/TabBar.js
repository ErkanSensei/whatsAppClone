import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon, Grid, Row, Col } from 'react-bootstrap'
import TabItem from './TabItem'
import styles from '../main.css'
export default class TabBar extends Component {

  render() {
    return(
        <Row className="show-grid">
          <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect} >
            <Col xs={2} xsOffset={1}><TabItem key={1} href="/home" icon="star" tab="Favorites" /></Col>
            <Col xs={2} xsOffset={0}><TabItem key={2} href="/home" icon="time" tab="Recents" /></Col>
            <Col xs={2} xsOffset={0}><TabItem key={3} href="/home" icon="user" tab="Contacts" /></Col>
            <Col xs={2} xsOffset={0}><TabItem key={4} href="/home" icon="comment" tab="Chats" /></Col>
            <Col xs={2} xsOffset={0}><TabItem key={5} href="/home" icon="cog" tab="Settings" /></Col>
          </Nav>
        </Row>
    )
  }
}
