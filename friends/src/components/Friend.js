import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Input} from '../StyledComponents';

export default class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                id: props.friend.id,
                name: props.friend.name,
                age: props.friend.age,
                email: props.friend.email
            }
        }
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteFriend(this.props.friend) //pass in the current friend, from Props
    }

    handleUpdate = e => {
        e.preventDefault();
        this.props.updateFriend(this.state.friend) //pass in updated friend, from State
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        console.log(this.state.friend)
        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        <h2>{this.state.friend.name}</h2>
                    </CardTitle>
                    <CardText>
                        <Input small name="name" value={this.state.friend.name} onChange={this.handleChange}/><br/>
                        <Input small name="age" value={this.state.friend.age} onChange={this.handleChange}/><br/>
                        <Input small name="email" value={this.state.friend.email} onChange={this.handleChange}/>
                    </CardText>
                    <Button type="submit" onClick={this.handleUpdate}>Edit</Button>
                    <Button onClick={this.handleDelete}>Delete</Button>
                </CardBody>
            </Card>
        )
    }
}