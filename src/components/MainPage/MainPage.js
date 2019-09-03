import React, { Fragment } from 'react';
import Header from '../Header/Header'

import SearchPanel from '../SearchPanel/SearchPanel'

import MainPageTree from '../MainPageTree/MainPageTree'
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }
  callbackFunction = (childData) => {
    this.setState({characters: childData})
  };

  render() {
    return (
      <Fragment>
        <Header/>
          <SearchPanel parentCallback = {this.callbackFunction}/>
          <MainPageTree characters = {this.state.characters}
          />
      </Fragment>
    );
  }
}
export default MainPage;