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
            .then(res => {this.setState({friends: res.data})})
            .catch(err => console.log(err))
    }

    postFriend = friend => {

        axios.post('http://localhost:5000/friends', friend)
            .then(res => {
                this.setState(prevState => prevState.friends = res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log(this.state)
        return (
            <>
                <AddFriend addFriend={this.postFriend} />
                {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} />)}
            </>
        )
    }
}