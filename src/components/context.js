import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import firebase from 'firebase';
// import uuid from 'uuid';
import {v1 as uuid} from "uuid";
import { config } from './Freegaly/config';



const Context = React.createContext();

function Provider({ children }) {
  const getLocal = () => {
    let user = localStorage.getItem("user");
    return user
      ? JSON.parse(user)
      : {
          email: "",
        };
  };

  const [user, setUser] = useState(getLocal());
  const [ready, setReady] = useState(false);
  const [messages, setMessages] = useState([]);

  // const addMessages = (newMessage) => {
  //   debugger
  //   console.log("messages 😘  = ", messages);
  //   setMessages([...messages, newMessage]);
  // };




useEffect(() => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    console.log("firebase apps already running...")
  }
}, [firebase])


const login = async(user, success_callback, failed_callback) => {
  console.log("logging in 😂");
  const output = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(success_callback, failed_callback);
}



const parse = snapshot => {
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: id } = snapshot;
  const { key: _id } = snapshot; //needed for giftedchat
  const timestamp = new Date(numberStamp);

  const message = {
    id,
    _id,
    timestamp,
    text,
    user,
  };
  console.log("message ", message)
  return message;
};

const uid = () => {
  return (firebase.auth().currentUser || {}).uid;
}

const ref = () => {
  return firebase.database().ref('Messages');
}

const refOn = callback => {
  firebase.database().ref('Messages').limitToLast(20)
  .on('child_added', snapshot => callback(
     parse(snapshot)
    ));
}


useEffect(() => {
  refOn(message => setMessages(previousState => ([...previousState, message])))
}, [])


const getMessages = () => {

  // refOn(message => (previousState => {
  //   console.log('previousState =', previousState.messages)ibh_
  //   setMessages(
  //   [...previousState.messages, message]
  //   )}))


      // context.handles.setMessages(message)
    // context.handles.setMessages(previousState => ([...context.data.messages, message]))
    // context.handles.setMessages([...context.data.messages, message])


  // let mess = firebase.database().ref('Messages');

  // console.log("messages ====", mess)

  // mess.length && mess.map(message =>
  //   context.handles.setMessages([
  //     ...context.data.messages,
  //     firebaseSvc.parse(message)])
  //   )


console.log("messages ====", messages)
}




  const setUserData = (newUser) => setUser(newUser);

  return (
    <Context.Provider
      value={{
        ready,
        user: {
          ...user,
        },
        state: {},
        data: {
          messages,
        },
        handles: {
          login,
          setUserData,
          setMessages,
          refOn,
          getMessages,
        },
      }}
    >
      {/* {!ready && <Preloader0><Preloader width={120} height={120}/></Preloader0>} */}
      {children}
    </Context.Provider>
  );
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
