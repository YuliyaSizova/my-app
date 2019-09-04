import React, { Fragment } from 'react';
import Header from '../Header/Header'

import SearchPanel from '../SearchPanel/SearchPanel'

import MainPageTree from '../MainPageTree/MainPageTree'
class MainPage extends React.Component {

  render() {
    return (
      <Fragment>
        <Header/>
          <SearchPanel/>
          <MainPageTree/>
      </Fragment>
    );
  }
}
export default MainPage;