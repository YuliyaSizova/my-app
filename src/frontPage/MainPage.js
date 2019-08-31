import React, { Fragment } from 'react';

import SearchPanel from './SearchPanel'

import MainPageTree from './MainPageTree'
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
        <div>
          <SearchPanel parentCallback = {this.callbackFunction}/>
          <MainPageTree characters = {this.state.characters}
          hasCharacters = {this.state.characters.length > 0}
          />
        </div>
      </Fragment>
    );
  }
}
export default MainPage;