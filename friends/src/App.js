import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friend's App</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
