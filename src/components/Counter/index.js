import React from 'react';
import { connect } from 'react-redux'
import { addNumber } from '../../reducers/actions/actions'

const CountClick = (props) => {
  return(<div>
    test
    {props.counts}
      <button onClick={props.addNumber}>+1</button>
    </div>)
};
const mapStateToProps = (state) => {
  return {counts: state.counts}
};
const mapDispatchToProps = { addNumber } ;
export default connect(mapStateToProps, mapDispatchToProps)(CountClick)