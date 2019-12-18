import {
  ADD,
  LOAD_PEOPLE,
  SEARCH_PEOPLE,
  LOGIN,
  ADD_NOTIFICATION,
  REMOVE_ALL_NOTIFICATIONS
} from '../constants/actionTypes'

export function addNumber() {
  return { type: ADD }
}

export function addNotification() {
  return { type: ADD_NOTIFICATION }
}

export function removeAllNotifications() {
  return { type: REMOVE_ALL_NOTIFICATIONS }
}

export function loadPeople(payload) {
  return { type: LOAD_PEOPLE, payload: payload }
}

export function searchPeople(payload) {
  return { type: SEARCH_PEOPLE, payload: payload }
}

export function login() {
  return { type: LOGIN }
}
export function fetchSearchPeople(name, type) {
  return (dispatch) => {
    const apiUrl = `https://swapi.co/api/${type}/?search=`;
    return fetch(`${apiUrl}${name}`).then(response => {
      return response.json()
    }
    ).then((json) => {
      dispatch(searchPeople(json.results))
    })
  }
}

export function fetchPeople() {
  const apiUrl = 'https://swapi.co/api/people/';
  return (dispatch) => {
    return fetch(apiUrl).then(response => {
      return response.json()
    }
    ).then((json) => {
      dispatch(loadPeople(json.results))
    })
  }
}