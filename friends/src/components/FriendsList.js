import React, {Component} from 'react';
import Friend from './Friend';
import axios from 'axios';


class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends").then(response => {this.setState({friends: response.data})}).catch()
    }

    render() {
        console.log(this.state.friends)
        return (
            this.state.friends.map(friend => <Friend friend={friend} key={friend.id}/>)
        )
    }
}

export default FriendsList;