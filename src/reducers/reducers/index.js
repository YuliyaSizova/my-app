import { ADD, LOAD_OBJECTS, SEARCH_OBJECTS, LOGIN, ADD_NOTIFICATION, REMOVE_ALL_NOTIFICATIONS } from '../constants/actionTypes';
const initialState = {
  counts: 0,
  items: [],
  login: false,
  notifications: 0
};
function rootReducer(state = initialState, action) {

  if (action.type === ADD) {
    return { ...state, counts: state.counts + 1 };
  } else if (action.type === LOAD_OBJECTS) {
    return { ...state, items: action.payload }
  } else if (action.type === SEARCH_OBJECTS) {
    return { ...state, items: action.payload }
  } else if (action.type === LOGIN) {
    return { login: true }
  } else if (action.type === ADD_NOTIFICATION) {
    return { ...state, notifications: state.notifications + 1 }
  } else if (action.type === REMOVE_ALL_NOTIFICATIONS) {
    return { ...state, notifications: 0 }
  }

  return state;
}
export default rootReducer;