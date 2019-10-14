import './Vk.css'
import React, { Fragment }  from 'react';
import Header from '../Header/index'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'



class Vk extends React.Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <div className="vk-field">
          <div className="vk-bar">
            <div className="bell-area">
            <div className="bell">
              <FontAwesomeIcon icon={faBell} size="2x"/>
              <div className="notification-vk">3</div>
            </div>
            </div>
            <div className="button-notification">
              <a href="" className="bell-button">Добавить оповещение</a>
            </div>
        </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default Vk;