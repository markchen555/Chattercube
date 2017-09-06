import React, { Component } from 'react';
import '../components/App.css';
import axios from 'axios';
import MessageList from '../components/MessageList';
import Navbar from '../components/Navbar';
import Main from '../components/Main';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : [],
      search: ''
    }
    this.send = this.send.bind(this);
    this.getSearchInput = this.getSearchInput.bind(this);
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
  }

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
      message: this.state.search,
      username: 'Mark'
    })
    .then((response) => {
      console.log('Sent');
      this.setState({
        search: ''
      })
      this.fetch();
    })
    .catch((data) => {
      console.log('ERROR: failed to send');
    })
  }

  getSearchInput(message) {
    console.log(message)
    this.setState({
      search: message
    })
    console.log(this.state.search)
  }

  startSpinner() {
    // $('.spinner img').show();
    // $('form input[type=submit]').attr('disabled', "true");
  }

  stopSpinner() {
    // $('.spinner img').fadeOut('fast');
    // $('form input[type=submit]').attr('disabled', null);
  }
  

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main handleSearchInput={this.send} getSearchInput={this.getSearchInput} />
        <div id="chats" className="container" >
          <MessageList messages={this.state.messages} />   
        </div>
      </div>
    );
  }
}

export default App;
