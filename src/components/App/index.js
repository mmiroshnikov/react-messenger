import React, { Fragment, useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import { Provider } from "../context";
// import firebase from 'firebase';
// import { auth, initializeApp, storage } from 'firebase';
// import styled, { css } from "styled-components";

import Messenger from "../Messenger";
// import firebaseSvc from '../FirebaseSvc';
import { Login } from '../Login/Login';


export default function App() {
  return (<div className="App">
      <Provider>
        <Router>
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

        </Router>
      </Provider>
    </div>
  );
}
