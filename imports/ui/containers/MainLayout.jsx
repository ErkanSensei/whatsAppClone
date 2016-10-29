import React from 'react';
import Header from '../components/Header.jsx';
import TabBar from '../components/TabBar.js'

export default class MainLayout extends React.Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
        <div id="TabBar">
          <TabBar location={this.props.location}/>
        </div>
      </div>
    );
  }
}
