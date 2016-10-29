import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon, Grid, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import TabItem from './TabItem'

export default class TabBar extends Component {
  render() {
    return (
      <Row className="show-grid">
          <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect} >

            <Col xs={2} xsOffset={1}>
              <LinkContainer to="/">
                <TabItem key={1} icon="star" tab="Favorites" />
              </LinkContainer>
            </Col>

            <Col xs={2} xsOffset={0}>
              <LinkContainer to="/about">
                <TabItem key={2} icon="time" tab="Recents" />
              </LinkContainer>
            </Col>

            <Col xs={2} xsOffset={0}>
              <LinkContainer to="/contacts">
                <TabItem key={3} icon="user" tab="Contacts" />
              </LinkContainer>
            </Col>

            <Col xs={2} xsOffset={0}>
              <LinkContainer to="/chats">
                <TabItem key={4} icon="comment" tab="Chats" />
              </LinkContainer>
            </Col>

            <Col xs={2} xsOffset={0}>
              <LinkContainer to="*">
                <TabItem key={5} icon="cog" tab="Settings" />
              </LinkContainer>
            </Col>
          </Nav>
      </Row>
    )
  }
}
