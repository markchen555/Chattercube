import React, { Component } from 'react';
import '../components/App.css';
import '../index.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="nav-bar highlightTextIn nav-container">
        <ul className="container">
          <li>
            <a alt="ROOM" className="dropdown-toggle" id="room" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ROOM</a>
            <div id="roomSelect" className="dropdown-menu" aria-labelledby="room"></div>
          </li>
          <li>
            <a alt="FRIENDLIST" className="dropdown-toggle" id="friendlist" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FRIENDLIST</a>
            <div id="friendList" className="dropdown-menu" aria-labelledby="friendlist"></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;