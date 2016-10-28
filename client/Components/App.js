import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import TabItem from './TabItem'
import styles from '../main.css'
export default class App extends Component {

  render() {
    return(
      <div>
        <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
          <TabItem key={1} href="/home" icon="star" tab="Favorites" />
          <TabItem key={2} href="/home" icon="time" tab="Recents" />
          <TabItem key={3} href="/home" icon="user" tab="Contacts" />
          <TabItem key={4} href="/home" icon="comment" tab="Chats" />
          <TabItem key={5} href="/home" icon="cog" tab="Settings" />
        </Nav>
      </div>
    )
  }
}
