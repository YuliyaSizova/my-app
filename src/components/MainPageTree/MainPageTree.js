import React from 'react';
import './MainPageTree.scss';
import { connect } from 'react-redux'
import { fetchPeople } from '../../reducers/actions/actions'
class MainPageTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

 componentDidMount(){
   this.props.fetchPeople();
 /*    fetch('https://swapi.co/api/people')
       .then((response)=> {
       return response.json();
         })
         .then((result)=> {
          return this.setState({
                           items: result? result.results : []
                         });

        })
*/
  }

  render() {
      const {characters, people} = this.props;
      const hasCharacters = characters.length > 0;
    console.log(this.props);

    return (
      <div id="object-tree" className="tree">
        <h4>Список персонажей</h4>
        <ul>
          {hasCharacters? characters.map(function(person) {
            return <li>{person.name}</li>;
          }) : people && people.map(function(person) {
            return <li>{person.name}</li>;
        })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    people: state.people
  }
};
const mapDispatchToProps = (dispatch) => {
 return {  fetchPeople: () => dispatch(fetchPeople())
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageTree);