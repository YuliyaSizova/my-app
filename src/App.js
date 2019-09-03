import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import  LoginPage  from './components/Login/LoginPage';
import { PrivateRoute } from './components/Login/PrivateRoute';


function App() {
  return (
    <Router>
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      <Route exact path="/" component={MainPage}/>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute  path="/about" component={About} />
    </Router>
  );
}



export default App;
