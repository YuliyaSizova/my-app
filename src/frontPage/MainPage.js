import React, { Fragment } from 'react';

import SearchPanel from './SearchPanel'

import MainPageTree from './MainPageTree'
class MainPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <SearchPanel/>
          <MainPageTree/>
        </div>
      </Fragment>
    );
  }
}
export default MainPage;