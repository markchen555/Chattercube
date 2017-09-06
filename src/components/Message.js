import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Addimg from '../components/images/add.png';
import '../components/App.css';
import '../index.css';

var Message = ({message}) => (
  // <div className="message-entry">
  // {/* <br></br> */}
    // Username: {message.username}
  // {/* <br></br> */}
    // Text: {message.message}
  // </div>
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
            {message.createdAt }
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
  );

  // class Message extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  
  
  //   render({message}) {
  //     return (
  //       <div class="single-message wow fadeIn animated" data-wow-duration="0.5s" data-wow-delay="0s">
  //               <div class="row">
  //                   <div class="col-sm-8">
  //                       <div class="username-section">
  //                           <a href="#">
  //                               {'@' + message.username}
  //                           </a>
  //                       </div>
  //                   </div>

  //                   <div class="col-sm-1">
  //                       <div >
  //                           <img src="images/add.png"></img>
  //                       </div>
  //                   </div>

  //                   <div class="col-sm-3">
  //                       <div class="timestamp">
  //                           {message.createdAt }
  //                       </div>
  //                   </div>
  //               </div>
  //               <div class="row " >
  //                   <div class="col-sm-12 ">
  //                       <p class="message" word-break: break-all word-wrap: break-word>
  //                          {message.message }
  //                       </p>
  //                   </div>
  //               </div>
  //           </div>
  //     )
  //   }
  // }
  

Message.propTypes = {
    message: PropTypes.object.isRequired
};
    
    
    
export default Message;