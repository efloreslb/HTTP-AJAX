import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button} from '../StyledComponents';

export default function Friend(props) {

    const handleClick = e => {
        // console.log("Friend", props.friend);
        e.preventDefault();
        props.deleteFriend(props.friend)
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h2>{props.friend.name}</h2>
                </CardTitle>
                <CardText>
                    <strong>Age: </strong> {props.friend.age}<br/>
                    <strong>Email: </strong> {props.friend.email}
                </CardText>
                <Button onClick={props.updateFriend}>Edit</Button>
                <Button onClick={handleClick}>Delete</Button>
            </CardBody>
        </Card>
    )
}