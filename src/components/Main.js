import React, { Component } from 'react';
import Logo from '../components/images/logo.png';
// import Loading from '../components/images/loading.GIF'
import '../components/App.css';
import '../index.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="main" className="container">
        <img src={Logo} className="img-fluid wow fadeIn animated" data-wow-duration="0.5s" data-wow-delay="0s" alt="Responsive Logo"></img>
        <div className="spinner container text-center">
          {/* <img src={Loading}></img> */}
          {/* <br> </br> */}
          <div className="input-group wow fadeIn animated" data-wow-duration="0.2s" data-wow-delay="0s">
            <input id="message" type="text" className="form-control" placeholder="Your Message Here!"></input>
            <span className="input-group-btn">
              <button className="btn btn-primary submit" type="submit" value="Submit">Submit</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;