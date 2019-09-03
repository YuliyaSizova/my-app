import { ADD, LOAD_PEOPLE } from '../constants/actionTypes'
/*import ApiClient from '../../api/ApiClient'*/

export function addNumber() {
  return{ type: ADD }
}

export function loadPeople(payload) {
  return{ type: LOAD_PEOPLE, payload: payload }
}

export function fetchPeople() {
  return (dispatch)=> {
    console.log('here');
    return fetch('https://swapi.co/api/people/').then(response => {

         return response.json()

      }
    ).then((json)=> {
     // console.log(json);
      dispatch(loadPeople(json.results))
    })
  }
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