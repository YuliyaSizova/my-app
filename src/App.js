import React, { Fragment }from 'react';
import Header from './frontPage/Header'

import './App.css';
import MainPage from './frontPage/MainPage'
function App() {
  return (
    <Fragment>
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        <Header/>
        <MainPage/>
    </Fragment>
  );
}

export default App;
