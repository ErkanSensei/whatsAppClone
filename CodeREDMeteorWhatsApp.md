1. Install Meteor


2. Create whatsAppDemo

```$ meteor create whatsApp```

```$ cd whatsApp```

3. ```$ meteor npm install —save react react-dom```
4. ```$ npm install react-bootstrap —save```
5. Create TabBar components

TabItem.js

```react
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
```

TabBar.js

```React
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
```

Header.js

```react
import React, { Component, Text } from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap'
import TabItem from './TabItem'
import styles from '../main.css'
export default class Header extends Component {

  render() {
    return(
      <div>
        WhatsApp
      </div>
    )
  }
}
```

App.js

```react
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
```

main.css

```css
/* CSS declarations go here */
#TabBar {
    position: fixed;
    bottom: 0;
    width: 100%;
}
#Header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    background-color: #F8F8F8;
}
```



6. ```npm install -save react-router ```


7. ​

