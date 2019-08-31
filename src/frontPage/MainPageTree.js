import React from 'react';
import './css/MainPageTree.scss';
class MainPageTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people')
      .then((response)=> {
      return response.json();
        })
        .then((result)=> {
          return this.setState({
                          items: result? result.results : []
                        });

        })

  }

  render() {
      const {state, props} = this;
      const {items} = state;
      const {characters, hasCharacters} = props;
    return (
      <div id="object-tree" className="tree">
        <h4>Список персонажей</h4>
        <ul>
          {hasCharacters? characters.map(function(person) {
            return <li>{person.name}</li>;
          }) : items && items.map(function(person) {
            return <li>{person.name}</li>;
        })}
        </ul>
      </div>
    );
  }
}

export default MainPageTree;