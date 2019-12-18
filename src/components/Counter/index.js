import React from 'react';
import { connect } from 'react-redux'
import { addNumber } from '../../reducers/actions/actions'
import { Button } from '@material-ui/core'

const CountClick = (props) => {

  return (<div>
    Нажмите плюс:
    {props.counts}
    <Button onClick={props.addNumber}>+1</Button>
  </div>)
};
const mapStateToProps = (state) => {
  return { counts: state.counts }
};
const mapDispatchToProps = { addNumber };
export default connect(mapStateToProps, mapDispatchToProps)(CountClick)