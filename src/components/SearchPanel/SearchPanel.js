import './SearchPanel.css';
import { TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel  } from '@material-ui/core'
import { fetchSearchPeople } from '../../reducers/actions/actions'
import { connect } from 'react-redux'

import React from 'react';


class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      searchType: 'people'
    };

  }
  handleReset=()=> {
    this.setState({name: ''});
  };
  handleRadioChange=(event)=> {
    this.setState({searchType: event.target.value});
  };
  handleChange=(event)=> {
    this.setState({name: event.target.value});
  };
  handleSubmit=(event)=> {
    event.preventDefault();
    const { name, searchType } = this.state;
    this.props.fetchSearchPeople(name, searchType);
  };

  render() {
    return (
      <div id="search-panel" >
        <form  onSubmit={this.handleSubmit}>
          <TextField
            style={{ margin: 20}}
            value={this.state.name}
            onChange={this.handleChange}
            label={"Имя/Название"}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Объект поиска</FormLabel>
            <RadioGroup
              aria-label="type"
              name="type"
              value={this.state.searchType}
              onChange={this.handleRadioChange}
            >
              <FormControlLabel
                value="starships"
                control={<Radio color="primary" />}
                label="Корабль"
                labelPlacement="start"
              />
              <FormControlLabel
                value="people"
                control={<Radio color="primary" />}
                label="Персонаж"
                labelPlacement="start"
              />
              <FormControlLabel
                value="planets"
                control={<Radio color="primary" />}
                label="Планета"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
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
              onClick={this.handleReset}
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
const mapDispatchToProps = (dispatch) => {
  return {  fetchSearchPeople: (name, type) => dispatch(fetchSearchPeople(name, type))
  }
};

export default connect (null, mapDispatchToProps)(SearchPanel);