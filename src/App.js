import React, { Fragment }from 'react';
import { MuiThemeProvider } from '@material-ui/core'
import Header from './frontPage/Header'

import './App.css';
import MainPage from './frontPage/MainPage'
function App() {
  return (
    <Fragment>
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      <MuiThemeProvider>
        <Header/>
        <MainPage/>
        </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
