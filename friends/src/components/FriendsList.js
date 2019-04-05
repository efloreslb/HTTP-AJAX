import React, {Component} from 'react';
import Friend from './Friend';
import AddFriend from './AddFriend';
import axios from 'axios';


export default class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    postFriend = friend => {
        axios.post('http://localhost:5000/friends', friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err));
    }

    updateFriend = friend => {
        console.log("inside update", friend);
        axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    deleteFriend = friend => {
        axios.delete(`http://localhost:5000/friends/${friend.id}`, friend)
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        console.log("State", this.state)
        return (
            <>
                <AddFriend addFriend={this.postFriend}/>
                {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend}/>)}
            </>
        )
    }
}