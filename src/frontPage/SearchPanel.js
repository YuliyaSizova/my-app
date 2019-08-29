import './css/SearchPanel.css';
import { TextField, Button } from '@material-ui/core'

import React from 'react';


class SearchPanel extends React.Component {
  render() {
    return (
      <div id="search-panel">
        <form>
          <TextField
            label={"Имя"}
          />
          <TextField
            label={"Фамилия"}
          />
          <div className="pr-3">
            <Button
              className="align-bottom mr-3 my-2"
              label="Поиск"
              type="submit"
              variant="contained"
            >
              Поиск
            </Button>
            <Button
              className="align-bottom my-2"
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