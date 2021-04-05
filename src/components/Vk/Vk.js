import './Vk.css'
import React, { Fragment } from 'react';
import Header from '../Header/index'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { addNotification, removeAllNotifications } from '../../reducers/actions/actions'
import { Button } from '@material-ui/core';
import {getNote} from '../utils/constants'



const Vk = (props) => {
  const { addNotification, notifications, removeAllNotifications } = props;
  const handleClick= () => {
    removeAllNotifications()
console.log(getNote(Math.floor(Math.random() * 10)));
  
  }
  return (
    <Fragment>
      <Header />
      <div className="vk-field">

        <div className="vk-bar">
          <div className="bell-area">
            <div className="bell" onClick={handleClick}>
              {notifications && (notifications !== 0) ?
                <Fragment><FontAwesomeIcon className="bell-active" icon={faBell} size="2x" /> <div className="notification-vk"> {notifications}</div> </Fragment> :
                <FontAwesomeIcon className="bell-inactive" icon={faBell} size="2x" />}
            </div>
          </div>
          <div className="button-notification">
            <Button className="bell-button" onClick={addNotification}>Добавить оповещение</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}


const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
};

const mapDispatchToProps = { addNotification, removeAllNotifications };
export default connect(mapStateToProps, mapDispatchToProps)(Vk);