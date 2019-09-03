
class ApiClient {

  async  getResource(url) {
    const _apiUrl = 'https://swapi.co/api';
    await fetch(`${_apiUrl}${url}`).then(response => {
        if (!response.ok) {
          throw  new Error(`Could not fetch ${url} , received ${response.status}` );
        } else {
          console.log(response.json());
          return  response.json();}
     }
      ).then(json => {

      return json
    });
  }

  getAllPeople() {
    return this.getResource('/people/');
  }

  getPersonById(id) {
    return this.getResource(`/people/${id}/`);
  }

  getAllPlanets() {
    return this.getResource('/planets/');
  }

  getPlanetById(id) {
    return this.getResource(`/planets/${id}/`);
  }

  getAllShips() {
    return this.getResource('/starships/');
  }

  getShipById(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

export default ApiClient;