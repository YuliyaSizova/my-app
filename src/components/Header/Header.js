import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthButton } from '../Login/PrivateRoute';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <table >
          <tr>
            <th> <Link to="/">Главная страница</Link></th>
            <th>   <Link to="/about">О ресурсе</Link></th>
            <th>   <AuthButton/></th>
          </tr>
        </table>
      </div>
    );
  }
}


export default Header;