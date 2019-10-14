import 'normalize.css'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import VkPanel from './components/Vk/Vk';
import  LoginPage  from './components/Login/LoginPage';
import { PrivateRoute } from './components/Login/PrivateRoute';


function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/vk" component={VkPanel}/>
      <PrivateRoute  path="/about" component={About} />

    </Router>
  );
}



export default App;
