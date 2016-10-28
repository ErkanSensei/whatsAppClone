import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import TabBar from './TabBar'
import Header from './Header'
import styles from '../main.css'
export default class App extends Component {

  render() {
    return(
      <div>
      <div id="Header">
        <Header />
      </div>
      <div id="TabBar">
        <TabBar />
      </div>
      </div>
    )
  }
}
