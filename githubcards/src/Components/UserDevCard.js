import React, { Component } from 'react';
import Axios from 'axios';

class UserDevCard extends Component {

    constructor(name) {
        super()
        this.state = {
            name: {name},
            company: '',
            bio: '',
            location: '',
        }
    }


    componentDidMount() {
        Axios.get(`https://api.github.com/users/${this.state.name}`)
        .then(res => {
            console.log(res)
            this.setState({
                name: res.data.name,
                company: res.data.company,
                bio: res.data.bio,
                location: res.data.location
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

   render() {
       return (
           <>
           <h1>{this.state.name}</h1>
           <h1>{this.state.company}</h1>
           <h1>{this.state.bio}</h1>
           <h1>{this.state.location}</h1>
           </>
       )
   }

}

export default UserDevCard;