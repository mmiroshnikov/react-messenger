import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
// import { Constants, ImagePicker, Permissions } from 'expo';
// import {
//   StyleSheet, Text,
//   TextInput,  TouchableOpacity, View,
//   Button, ImageEditor,
// } from 'react-native';
import firebaseSvc from "../FirebaseSvc";
// import firebase from 'firebase';
// import { auth, initializeApp, storage } from 'firebase';
// import uuid from 'uuid';

import { Context } from '../context';

const LoginInner = ({history}) => {

  const context = useContext(Context);

  // static navigationOptions = {
  //   title: 'Scv Chatter',
  // };


  const [state, setState] = useState({
    name: "Alex B",
    email: "mikoza@gmail.com",
    password: "123123",
    avatar: "",
  })

  // using Fire.js
  const onPressLogin = async () => {
    console.log("pressing login... email:" + state.email);
    const user = {
      name: state.name,
      email: state.email,
      password: state.password,
      avatar: state.avatar,
    };

    const response = firebaseSvc.login(
      user,
      loginSuccess,
      loginFailed
    );
  };

  const loginSuccess = () => {
    console.log("login successful, navigate to chat.");
    context.handles.setUserData({
      name: state.name,
      email: state.email,
      avatar: state.avatar,
    })
    history.push('/chat')
    // props.navigation.navigate("Chat", {
    //   name: state.name,
    //   email: state.email,
    //   avatar: state.avatar,
    // });

  };
  const loginFailed = () => {
    console.log("login failed ***");
    alert("Login failure. Please tried again.");
  };

  const onChangeTextEmail = (email) => setState({ ...state, email: email });
  const onChangeTextPassword = (password) => setState({ ...state, password });


    return (
      <>
        <div
        // style={styles.title}
        >
          Email:
        </div>
        <input
          // style={styles.nameInput}
          placeHolder="test3@gmail.com"
          onChangeText={onChangeTextEmail}
          value={state.email}
        />
        <div
        // style={styles.title}
        >
          Password:
        </div>
        <input
          // style={styles.nameInput}
          onChangeText={onChangeTextPassword}
          value={state.password}
        />
        <button
          title="Login 2"
          // style={styles.buttonText}
          onClick={onPressLogin}
        >
          Login 2
        </button>

        <button
          title="Go to create new account"
          // style={styles.buttonText}
          onClick={() => {
            // props.navigation.navigate("CreateAccount")
          }}
        >
          Go to create new account
        </button>
      </>
    );

}

const offset = 16;
// const styles = StyleSheet.create({
//   title: {
//     marginTop: offset,
//     marginLeft: offset,
//     fontSize: offset,
//   },
//   nameInput: {
//     height: offset * 2,
//     margin: offset,
//     paddingHorizontal: offset,
//     borderColor: '#111111',
//     borderWidth: 1,
//     fontSize: offset,
//   },
//   buttonText: {
//     marginLeft: offset,
//     fontSize: 42,
//   },
// });

export const Login = withRouter(LoginInner);
