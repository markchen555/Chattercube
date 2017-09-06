import React from 'react';
import PropTypes from 'prop-types';

var Message = ({message}) => (
  <div className="message-entry">
  <br></br>
    Username: {message.username}
  <br></br>
    Text: {message.message}
  </div>
  );

Message.propTypes = {
    message: PropTypes.object.isRequired
};
    
    
    
export default Message;