import React, {Component} from 'react';
import {Form, Input, Button} from '../StyledComponents';

export default class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.friend);
        this.props.addFriend(this.state.friend)
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Input name="name" placeholder="Enter Name" onChange={this.handleChange}/>
                <Input name="age" placeholder="Enter Age" onChange={this.handleChange}/>
                <Input name="email" placeholder="Enter Email" onChange={this.handleChange}/>
                <Button type="submit">Add Friend</Button>
            </Form>
        )
    }
}