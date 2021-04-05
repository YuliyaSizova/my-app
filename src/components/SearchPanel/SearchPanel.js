import './SearchPanel.css';
import { TextField, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel  } from '@material-ui/core'
import { fetchSearchObjects } from '../../reducers/actions/actions'
import { connect } from 'react-redux'

import React from 'react';


class SearchPanel extends React.Component {
  constructor(props) { 
    super(props); 
     this.state = {
      object: '',
      searchType: 'art_design'
    };

  }
  handleReset=()=> {
    this.setState({object: '', searchType: 'art_design' });
  };
  handleRadioChange=(event)=> {
    this.setState({searchType: event.target.value});
  };
  handleChange=(event)=> {
    this.setState({object: event.target.value});
  };
  handleSubmit=(event)=> {
    event.preventDefault();
    const { object, searchType } = this.state;
    this.props.fetchSearchObjects(object, searchType);
  };

  render() {
    return (
      <div id="search-panel" >
        <div id="search-content">
        <form  onSubmit={this.handleSubmit}>
          <TextField
            style={{ margin: 20}}
            value={this.state.object}
            onChange={this.handleChange}
            label={"Object"}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup
              aria-label="type"
              name="type"
              value={this.state.searchType}
              onChange={this.handleRadioChange}
            >
              <FormControlLabel
                value="art_design"
                control={<Radio color="primary" />}
                label="Art/Design"
                labelPlacement="start"
              />
              <FormControlLabel
                value="history_culture"
                control={<Radio color="primary" />}
                label="History/Culture"
                labelPlacement="start"
              />
              <FormControlLabel
                value="science_technology"
                control={<Radio color="primary" />}
                label="Science/Technology"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
          <div >
            <Button
              style={{ margin: 20}}
              label="Search"
              type="submit"
              variant="contained"
            >
              Search
            </Button>
            <Button
              variant="contained"
              onClick={this.handleReset}
              label="Clean"
            >
              Clean
            </Button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {  fetchSearchObjects: (category, type) => dispatch(fetchSearchObjects(category, type))
  }
};

export default connect (null, mapDispatchToProps)(SearchPanel);