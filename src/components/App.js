import React, { Component } from 'react';
import logo from '../logo.svg';
import '../components/App.css';
import axios from 'axios';
import MessageList from '../components/MessageList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : []
    }
  }

  componentDidMount() {
    // axios.get('http://chattercube.thirdtape.com/messages')
    // .then(function (response) {
    //   console.log(response.data.messages);
    //   this.setState({
    //     messages: response.data.messages
    //   }, ()=>{})   
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    this.fetch();
    // this.send();
  }

  // fetch() {
  //   var context = this;
  //   axios.get('http://chattercube.thirdtape.com/messages')
  //   .then((data) => {
  //     context.setState({
  //       messages: data.data.messages
  //     })
  //   })
  //   .catch((data) => {
  //     console.log('ERROR')
  //   })
  // }


  fetch() {
    var context = this;
    axios.get('http://chattercube.thirdtape.com/messages')
    .then((data) => {
      context.setState({ 
        messages: data.data.messages
      })
    })
    .catch((data) => {
      console.log('ERROR: failed to fetch');
    })
  }

  send() { 
    axios.post('http://chattercube.thirdtape.com/messages', {
      message: 'Got you Alex',
      username: 'Mark'
    })
    .then((response) => {
      console.log('Sent');
    })
    .catch((data) => {
      console.log('ERROR: failed to send');
    })
  }
  

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ChatterCube</h2>
        </div>
        <div className="App-intro Message-list">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <MessageList messages={this.state.messages} />
        </div>
      </div>
    );
  }
}

export default App;
