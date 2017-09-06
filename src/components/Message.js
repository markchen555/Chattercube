import React from 'react';
import PropTypes from 'prop-types';
import Addimg from '../components/images/add.png';
import '../components/App.css';
import '../index.css';
import TimeAgo from 'react-timeago'

var Message = ({message}) => {

  return (
    <div className="single-message wow fadeIn animated" data-wow-duration="0.5s" data-wow-delay="0s">
      <div className="row">
        <div className="col-sm-8">
          <div className="username-section">
            <a href="/">
              {'@' + message.username}
            </a>
          </div>
        </div>

        <div className="col-sm-1">
          <div className="add-friend">
            <img alt="Add-Img" src={Addimg}></img>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="timestamp">
          <TimeAgo date={message.createdAt} />
          </div>
        </div>
      </div>
      <div className="row " >
        <div className="col-sm-12 ">
          <p className="message" >
            {message.message }
          </p>
        </div>
      </div>
    </div>
  )
};

Message.propTypes = {
    message: PropTypes.object.isRequired
};
    
    
    
export default Message;