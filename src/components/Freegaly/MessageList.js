import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled, {css} from 'styled-components';
import { Context } from '../context';
import {Message} from './Message';

export function MessageList(props) {

  const {
  messages = [],
  onSend,
  user
} = {...props};

  const context = useContext(Context);
  return (
    <div>

{context.data.messages.map((oneMessage, ind) =>
  {
  return <Message
  key={oneMessage['_id']}
  {...oneMessage}
  />
}

  )}



    </div>
  )
}