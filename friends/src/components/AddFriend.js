import React, {Component} from 'react';
import {Form, Input, Button} from '../StyledComponents';

export default class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }

    addNewFriend = event => {
        event.preventDefault();
        console.log(this.state.newFriend);
        this.props.addFriend(this.state.newFriend)
    }

    render() {
        return(
            <Form onSubmit={this.addNewFriend}>
                <Input name="name" placeholder="Enter Name" onChange={this.handleChange}/>
                <Input name="age" placeholder="Enter Age" onChange={this.handleChange}/>
                <Input name="email" placeholder="Enter Email" onChange={this.handleChange}/>
                <Button type="submit">Add Friend</Button>
            </Form>
        )
    }
}