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
// import firebase from 'firebase';
// import { auth, initializeApp, storage } from 'firebase';
// import styled, { css } from "styled-components";
import Messenger from "../Messenger";
// import firebaseSvc from '../FirebaseSvc';


export default function App() {
  return (<div className="App">

        <Router>
          <Routes>
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

          </Routes>
        </Router>
      </div>
  );
}
