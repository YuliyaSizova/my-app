import React from 'react';
import './MainPageTree.scss';
import { connect } from 'react-redux'
import { fetchArt } from '../../reducers/actions/actions'
class MainPageTree extends React.Component {
 componentDidMount(){
   this.props.fetchArt();
  }

  render() {
    const { items } = this.props;
    return (
      <div id="object-tree" className="tree">
        <div id="content">
        <h4>List</h4>
          <ul key={"ul"}>
          { items && items.length > 0 ? items.map(item => {
                   return <li key={item.id}>{item.title} - {item.content?.freetext?.objectType ? item.content?.freetext?.objectType.map(object =>{ return <span>{object?.content}</span>} ) : "Not found"}</li>;
          }) : 'Not found'}
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
 return {  fetchArt: () => dispatch(fetchArt())
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageTree);