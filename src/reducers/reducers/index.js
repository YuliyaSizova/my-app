import { ADD, LOAD_PEOPLE, SEARCH_PEOPLE, LOGIN } from '../constants/actionTypes';
const initialState = {
  counts: 0,
  items: [],
  login: false
};
function rootReducer(state = initialState, action) {

  if (action.type === ADD) {
    return { counts: state.counts+1 };
  } else if (action.type === LOAD_PEOPLE){
    return {...state, items: action.payload}
  } else if (action.type === SEARCH_PEOPLE){
    return {...state, items: action.payload}
  } else if (action.type === LOGIN){
    return {login: true}
  }
  return state;
}
export default rootReducer;