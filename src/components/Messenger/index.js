import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import ConversationList from '../ConversationList';
import {MessageList} from '../Freegaly/MessageList';
// import MessageList from '../MessageList';
import './Messenger.css';

import firebaseSvc from '../FirebaseSvc';

import { Context } from '../context';
import '../MessageList/MessageList.css';

export default function MessengerInner(props) {

  const context = useContext(Context);
  const getUser = () => {
    console.log('PARAMS = ', this.props);
    return {
      name: context.user.name,
      email: context.user.email,
      // avatar: context.user.avatar,
      id: firebaseSvc.uid,
      _id: firebaseSvc.uid, // need for gifted-chat
    };
  }


    return (
      <div className="messenger">



        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable content">
          <MessageList
            messages={context.data.messages}
            onSend={firebaseSvc.send}
            user={context.user}
          />
        </div>
      </div>
    );
}

export const Messenger = withRouter(MessengerInner);