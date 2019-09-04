import React from "react";
import { Button } from '@material-ui/core';
import {
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        <Button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Выйти
        </Button>
      </p>
    ) : (
      <p>Вы не залогинины.</p>
    )
);

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
