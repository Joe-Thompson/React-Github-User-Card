import React, { Component } from 'react'
import axios from 'axios';
import FollowingCards from "./FollowingCards";

class UserDevCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: [props.props['login']],
            user: []
        };
        console.log(this.state.user)
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.userData}`)
            .then(res => {
                this.setState({user: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
            <FollowingCards user={this.state.user} />
            </div>
        )
    }
}

export default UserDevCard;