1. Install Meteor


2. Create whatsAppDemo

```$ meteor create whatsApp```

```$ cd whatsApp```

3. ```$ meteor npm install —save react react-dom```

4. ```$ npm install react-bootstrap —save```

5. Create tabItem Component

   App.js

   ```react
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
   ```

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
              <p>{this.props.tab}</p>
            </Glyphicon>
          </NavItem>
    )
  }
}
```

6. ``` npm install -save react-router ```
7. ​

