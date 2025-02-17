import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"
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


  const [name, setName] = useState('')
  const [email, setEmail] = useState(context.user.email)
  const [password, setPassword] = useState('123123')
  const [avatar, setAvatar] = useState('')





  // using Fire.js
  const onPressLogin = async () => {
    // console.log("pressing login... email:" + state.email);
    const user = {
      name,
      email,
      // avatar,
      password
    };

    // const response = firebaseSvc.login(
    //   user,
    //   loginSuccess,
    //   loginFailed
    // );
    const response = context.handles.login(
      user,
      loginSuccess,
      loginFailed
    );
  };

  const loginSuccess = () => {
    console.log("login successful, navigate to chat.");
    context.handles.setUserData({
      name,
      email,
      // avatar,
    })
    context.handles.getMessages()
    history.push('/chat')

    // props.navigation.navigate("Chat", {
    //   name: state.name,
    //   email: state.email,
    //   avatar: state.avatar,
    // });

  };


//   const getMessages = () => {
//     // context.handles.refOn(message => (previousState => {
//     //   context.handles.setMessages(
//     //     [
//     //     ...previousState.messages, message
//     //     ])
//     // }))
//     context.handles.refOn(message => {
//       context.handles.setMessages(message)
//     })
//         // context.handles.setMessages(message)
//       // context.handles.setMessages(previousState => ([...context.data.messages, message]))
//       // context.handles.setMessages([...context.data.messages, message])


//     // let mess = firebase.database().ref('Messages');

//     // console.log("messages ====", mess)

//     // mess.length && mess.map(message =>
//     //   context.handles.setMessages([
//     //     ...context.data.messages,
//     //     firebaseSvc.parse(message)])
//     //   )
//   console.log("messages ====", context.data.messages)
// }



  const loginFailed = () => {
    console.log("login failed ***");
    alert("Login failure. Please tried again.");
  };

  // const onChangeEmail = (email) => setState({ ...state, email: email });
  const onChangeEmail = (e) => setEmail(e.target.value);
  // const onChangePassword = (password) => setState({ ...state, password });
  const onChangePassword = (e) => setPassword(e.target.value);


    return (
      <>
        <h1>Login</h1>
        <div
        // style={styles.title}
        >
          Email:
        </div>
        <input
          // style={styles.nameInput}
          placeHolder="test@gmail.com"
          onChange={onChangeEmail}
          value={email}
        />
        <div
        // style={styles.title}
        >
          Password:
        </div>

        <input
          // style={styles.nameInput}
          onChange={onChangePassword}
          value={password}
        />
        <br/><br/>
        <button
          title="Login 2"
          // style={styles.buttonText}
          onClick={onPressLogin}
        >
          Login
        </button><br/><br/>

        <button
          title="Go to create new account"
          // style={styles.buttonText}
          onClick={() => {
            history.push('/createaccount')
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
