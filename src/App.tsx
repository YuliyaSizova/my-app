import React from 'react';
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';


function App() {
  return (
      <Router >
          <Container>
         <Switch>
            <Route exact path="/" component={MainPage} />
         </Switch>
          </Container>
      </Router>

  );
}



export default App;
