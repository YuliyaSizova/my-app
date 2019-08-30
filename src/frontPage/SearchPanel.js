import './css/SearchPanel.css';
import { TextField, Button } from '@material-ui/core'

import React from 'react';


class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      hasCharacters: false
    };

  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  };
  handleSubmit=(event)=> {
    event.preventDefault();
    fetch('https://swapi.co/api/people/?search='+this.state.value)
      .then((response)=> {
        return response.json();
      })
      .then((response)=> {
        this.props.parentCallback(response? response.results : []);
      })

  };

  render() {
    return (
      <div id="search-panel" >
        <form  onSubmit={this.handleSubmit}>
          <TextField
            style={{ margin: 20}}
            value={this.state.value}
            onChange={this.handleChange}
            label={"Имя"}
          />
          <TextField
            style={{ margin: 20}}
            label={"Фамилия"}
          />
          <div >
            <Button
              style={{ margin: 20}}
              label="Поиск"
              type="submit"
              variant="contained"
            >
              Поиск
            </Button>
            <Button
              variant="contained"
              label="Очистить"
            >
              Очистить
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPanel;