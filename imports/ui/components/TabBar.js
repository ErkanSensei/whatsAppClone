import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TabItem from './TabItem'

export default class TabBar extends Component {
  render() {
    console.log(this.props.location)
    return (
      <Row className="show-grid">
          <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect} >
                <TabItem eventKey={1} icon="star" tab="Favorites" href="/" />
                <TabItem eventKey={2} icon="time" tab="Recents" href="/about" />
                <TabItem eventKey={3} icon="user" tab="Contacts" href="/contacts"/>
                <TabItem eventKey={4} icon="comment" tab="Chats" href="/chats" />
                <TabItem eventKey={5} icon="cog" tab="Settings" href="*"/>
          </Nav>
      </Row>
    )
  }
}
