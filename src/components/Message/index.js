import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
  console.log('props = ', props);
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = props;

    const friendlyTimestamp = moment(data.createdAt).format('LLLL');
    console.log('data.createdAt = ', data.createdAt);
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.text }
          </div>
        </div>
      </div>
    );
}