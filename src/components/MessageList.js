import React from 'react';
import Message from '../components/Message';
import PropTypes from 'prop-types';


var MessageList = ({messages}) => (
  <div className="message-list">
    {messages.map((message, i) => (
    <Message 
      message={message}
      key={message.username + i}
    />
    )
  )}
  </div>
);

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;