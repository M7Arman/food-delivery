import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MenuItems from '../menu-items/MenuItems'

import './MainContent.scss';


export class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <Route path="/" exact component={MenuItems} />
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </div>
    )
  }
}

export default MainContent
