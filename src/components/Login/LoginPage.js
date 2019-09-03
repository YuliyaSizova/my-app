import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { fakeAuth } from './PrivateRoute';
import {
  Redirect
} from 'react-router-dom';


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password:'',
      redirectToReferrer: false
    };
  }
  handleChange=(event)=> {
    this.setState({
      login: event.target.login,
      password: event.target.password
    });

  };

  login = (event) => {
    event.preventDefault();
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };


  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
       <form onSubmit={this.login}>
         <TextField
           InputLabelProps ={{shrink: true}}
           style={{ margin: 20}}
         value={this.state.login}
         onChange={this.handleChange}
         label={"Логин"}
         required={true}
       />
         <TextField
           InputLabelProps ={{shrink: true}}
           style={{ margin: 20}}
           value={this.state.password}
           onChange={this.handleChange}
           label={"Пароль"}
           required={true}
         />
         <div >
           <Button
             style={{ margin: 20}}
             type="submit"
             label="Войти"
             variant="contained"
           >
             Войти
           </Button>
         </div>
       </form>
    );
  }
}
export default LoginPage;