import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import UserDevCard from './UserDevCard';

class HomeForm extends Component {

    constructor() {
        super()
        this.state = {
            user: '',
        }
    }

    // componentDidUpdate(prevProps, prevState) {
        
    //     if (prevState.user !== this.state.user) {
    //         return <UserDevCard name={this.state.user} />
    //     }
    // }

    handleChange = (event) => {
        this.setState({
            user: event.target.value
        });
    console.log(this.state.user);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit} >
                <h1>Search for GitHub Users</h1>
                <input type='text'
                       id='user'
                       name='user'
                       value= {this.state.value}
                       placeholder='User Name'
                       onChange={this.handleChange}
                />
                <Link to='/users'>
                <button type='submit' onSubmit={this.handleSubmit} >Submit</button>
                </Link>
                <Link to='/Joe-Thompson'>
                <button value='Joe-Thompson' >View Joe's Card</button>
                </Link>
            </form>
            </>
        )
    }
}


export default HomeForm;