import React from 'react';
import {Card, CardBody, CardTitle, CardText} from '../StyledComponents';

export default function Friend(props) {
    return (
        <Card color="dodgerblue">
            <CardBody>
                <CardTitle><strong>Name:</strong> {props.friend.name}</CardTitle>
                <CardText><strong>Age:</strong> {props.friend.age}</CardText>
                <CardText><strong>Email:</strong> {props.friend.email}</CardText>
            </CardBody>
        </Card>
    )
}