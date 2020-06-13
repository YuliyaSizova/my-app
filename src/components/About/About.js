import './About.css'
import React, { Fragment } from 'react';
import Header from '../Header/index'
import CountClick from '../Counter'
import Footer from '../Footer'
import Canvas from '../Canvas/Canvas'


class About extends React.Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <div id="about">
          Оставить отзыв
          <CountClick/>
          <Canvas/>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default About;