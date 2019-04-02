import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import {Container} from './StyledComponents';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Friend's App</h1>
        <AddFriend />
        <FriendsList />
      </Container>
    );
  }
}

export default App;
