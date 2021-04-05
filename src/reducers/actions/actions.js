import {
  ADD,
  LOAD_OBJECTS,
  SEARCH_OBJECTS,
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

export function loadObjects(payload) {
  return { type: LOAD_OBJECTS, payload: payload }
}

export function searchObjects(payload) {
  return { type: SEARCH_OBJECTS, payload: payload }
}

export function login() {
  return { type: LOGIN }
}
export function fetchSearchObjects(name, type) {
  return (dispatch) => {
    const apiUrl = `https://api.si.edu/openaccess/api/v1.0/category/${type}/search?q=${name}&api_key=gs0nmaUFv5GOU9cYOJlx6Qx6mJJzt0445MbYCzgL`;
    return fetch(apiUrl).then(response => {
      return response.json()
    }
    ).then((json) => {
      dispatch(searchObjects(json.response.rows))
    })
  }
}

export function fetchArt() {
  const apiUrl = 'https://api.si.edu/openaccess/api/v1.0/search?q=Smith&api_key=gs0nmaUFv5GOU9cYOJlx6Qx6mJJzt0445MbYCzgL';
  return (dispatch) => {
    return fetch(apiUrl).then(response => {
      return response.json()
    }
    ).then((json) => {
      dispatch(searchObjects(json.response.rows))
    })
  }
}