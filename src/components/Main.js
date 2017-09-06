import React from 'react';
import Logo from '../components/images/logo.png';
import '../components/App.css';
import '../index.css';


var Main = (props) => {
  return (
    <div id="main" className="container">
      <img src={Logo} className="img-fluid wow fadeIn animated" data-wow-duration="0.5s" data-wow-delay="0s" alt="Responsive Logo"></img>
      <div className="input-section container text-center">
        <br />
        <div className="input-group wow fadeIn animated" data-wow-duration="0.2s" data-wow-delay="0s">
          <input id="message" type="text" className="form-control" placeholder="Your Message Here!"  onChange={(e) => props.getSearchInput(e.target.value)}></input>
          <span className="input-group-btn">
            <button className="btn btn-primary submit" type="submit" value="Submit" onClick={() => props.handleSearchInput()} >Submit</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Main;