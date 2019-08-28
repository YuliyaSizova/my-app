import React from 'react';

import './App.css';
import MainPage from './frontPage/MainPage'
function App() {
  return (

    <div className="App">

      <header className="App-header">
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        <p>
            <MainPage name="4"/>
        </p>

      </header>
    </div>
  );
}

export default App;
