import React, {Component} from 'react';
import Friend from './Friend';


class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    render() {
        return (
            <Friend />
        )
    }
}

export default FriendsList;