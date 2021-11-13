import React, { Fragment, useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";
// import firebase from 'firebase';
// import { auth, initializeApp, storage } from 'firebase';
import styled, { css } from "styled-components";
import Messenger from "../Messenger";
import FirebaseSvc from "../FirebaseSvc";
import { Login } from "../Login/Login";
import { Provider } from "../context";

export default function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            <Route
              exact
              path="/clear"
              render={({ history }) => {
                localStorage.clear();
                history.push("");
                return null;
              }}
            />

            <Route
              path="/chat"
              render={(props) => {
                return <Messenger />;
              }}
            />

            <Route
              path="/login"
              render={(props) => {
                return <Login />;
              }}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
