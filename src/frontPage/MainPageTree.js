import React from 'react';
import './css/MainPageTree.scss';
class MainPageTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount(){
    let currentComponent = this;
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
          return response.json();
        })
        .then(function(result) {
          console.log(result);
          return currentComponent.setState({
                          items: result
                        });

        })

  }

  render() {
    console.log(this);
    return (
      <div id="object-tree" className="tree">
        <h4>Список объектов</h4>
        <ul>
          <li>tree</li>
        </ul>
      </div>
    );
  }
}

export default MainPageTree;