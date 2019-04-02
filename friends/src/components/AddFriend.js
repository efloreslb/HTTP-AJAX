import React from 'react';
import {Form} from 'reactstrap';


export default function AddFriend(props) {
    return(
        <form>
            <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter Age"/>
            <input type="text" placeholder="Enter Email"/>
            <button>Add Friend</button>
        </form>
    )
}