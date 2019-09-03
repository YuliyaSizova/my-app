import React from 'react';
import Header from '../Header/Header'
import CountClick from '../Counter'


class About extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        Оставить отзыв
        <br/>
        <CountClick/>
      </div>
    );
  }
}

export default About;