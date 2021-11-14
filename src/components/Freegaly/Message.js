import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Context } from '../context';

export function Message(props) {
  const context = useContext(Context);
const {
  id,
  text,
  timestamp,
  _id,
  user = {
    avatar: '',
    email: '@',
    id: '',
    _id: ''
  }
} = {...props}


  return (
    <div>
      {user['email']}<br/>
      <h3>{text}</h3>
    </div>
  )
}