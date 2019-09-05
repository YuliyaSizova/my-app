import React from 'react';
import './MainPageTree.scss';
import { connect } from 'react-redux'
import { fetchPeople } from '../../reducers/actions/actions'
class MainPageTree extends React.Component {
 componentDidMount(){
   this.props.fetchPeople();
  }

  render() {
    const { items } = this.props;
    return (
      <div id="object-tree" className="tree">
        <div id="content">
        <h4>Список</h4>
          <ul>
          { items && items.length > 0 ? items.map(function(item) {
            return <li>{item.name}</li>;
          }) : 'Не найдено'}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    items: state.items
  }
};
const mapDispatchToProps = (dispatch) => {
 return {  fetchPeople: () => dispatch(fetchPeople())
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageTree);