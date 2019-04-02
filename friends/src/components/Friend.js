import React from 'react';

export default function Friend(props) {
    return (
        <div>
            <h4>Name: {props.friend.name}</h4>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}