import React from 'react';
import Logo from '../components/images/logo.png';
// import Loading from '../components/images/loading.GIF'
import '../components/App.css';
import '../index.css';


var Main = (props) => {
  {console.log(props)}
  return (
    <div id="main" className="container">
      <img src={Logo} className="img-fluid wow fadeIn animated" data-wow-duration="0.5s" data-wow-delay="0s" alt="Responsive Logo"></img>
      <div className="spinner container text-center">
        {/* <img src={Loading}></img> */}
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