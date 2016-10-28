import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
export default class App extends Component {

  render() {
    return(
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" bsStyle='pills'>
        <Tab eventKey={1} title="Tab 1" />
        <Tab eventKey={2} title="Tab 2" />
        <Tab eventKey={3} title="Tab 3" />
      </Tabs>
    )
  }
}
