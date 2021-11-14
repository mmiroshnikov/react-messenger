import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Context } from '../context';
import firebaseSvc from '../FirebaseSvc';

export function CreateAccountInner({history}) {
  const context = useContext(Context);


  const [name, setName] = useState('')
  const [email, setEmail] = useState(context.user.email)
  const [password, setPassword] = useState('123123')
  const [avatar, setAvatar] = useState('')



  const onPressCreate = async () => {
    // console.log('create account... email:' + email);
    try {

      await firebaseSvc.createAccount(context.user);
    } catch ({ message }) {
      console.log('create account failed. catch error:' + message);
    }
  };

  // const onChangeEmail = (email) => setState({ ...state, email: email });
  const onChangeEmail = (e) => setEmail(e.target.value);
  // const onChangePassword = (password) => setState({ ...state, password });
  const onChangePassword = (e) => setPassword(e.target.value);


  return (
    <>
    <h1>Create account</h1>
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
      title="Create"
      // style={styles.buttonText}
      onClick={onPressCreate}
    >
      Create
    </button><br/><br/>

    <button
      title="Go to create new account"
      // style={styles.buttonText}
      onClick={() => {
        history.push('/login')
        // props.navigation.navigate("CreateAccount")
      }}
    >
      Go to Login
    </button>
  </>
  )
}

export const CreateAccount = withRouter(CreateAccountInner);