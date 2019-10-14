import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthButton } from '../Login/PrivateRoute';
import '../../App.css';

class Header extends React.Component {
  render() {
    return (
      <div id="header-wrapper">
        <div id="header" className="container">
          <div id="logo">
            <h1>Star Wars</h1>
          </div>
          <div id="menu">
            <ul>
            <li> <Link to="/">Главная страница</Link></li>
            <li> <Link to="/about">О ресурсе</Link></li>
            <li> <Link to="/vk">Вконтакте</Link></li>
            </ul>
          </div>
          <div id="exit"> <AuthButton/> </div>
        </div>
      </div>
    );
  }
}


export default Header;