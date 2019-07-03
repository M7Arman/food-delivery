import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import BrandImg from '../../logo.svg';

export class Header extends Component {
  render() {
    return (
      <div>
          <header className="main-header">
            <Link to="/" ><img src={BrandImg} className="main-header-logo" alt="brand icon" /></Link>
            <div className="main-menu">
              <Link to='hello' className="main-menu-item" >Burrito</Link>
              <Link to='hello' className="main-menu-item" >Item 2</Link>
              <Link to='hello' className="main-menu-item" >Item 3</Link>
            </div>
          </header>
      </div>
    )
  }
}

export default Header
