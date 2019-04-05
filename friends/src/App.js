import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import {Container} from './StyledComponents';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Say Hello to My Lil' Friends</h1>
        <FriendsList />
      </Container>
    );
  }
}

export default App;
