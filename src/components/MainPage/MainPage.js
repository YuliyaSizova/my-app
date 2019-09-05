import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import './MainPage.css'

import SearchPanel from '../SearchPanel/SearchPanel'

import MainPageTree from '../MainPageTree/MainPageTree'
class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div>
        <Header/>
        <section>
          <SearchPanel/>
        </section>
        <section>
          <MainPageTree/>
        </section>
        <Footer/>
        </div>
      </div>
    );
  }
}
export default MainPage;