import { ADD, LOAD_PEOPLE } from '../constants/actionTypes';
const initialState = {
  counts: 4,
  people: []
};
function rootReducer(state = initialState, action) {

  if (action.type === ADD) {
    return { counts: state.counts+1 };
  } else if (action.type === LOAD_PEOPLE){
    console.log(action);
    return {...state, people: action.payload}
  }
  return state;
}
export default rootReducer;