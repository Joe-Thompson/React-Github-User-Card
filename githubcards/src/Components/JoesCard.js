import React, { Component } from 'react'

class JoesCard extends Component {
    render() {
        return (
            <div className="myCard">
                <img className='myPic' src={this.props.user.avatar_url} alt='missing' />
                <div className="card-info">
                    <h3 className="name">{this.props.user.name}</h3>
                    <p class="username">{this.props.user.login}</p>
                    <p>
                        <a href={this.props.user.html_url}>Profile Link</a>
                    </p>
                    <p>Location - {this.props.user.location}</p>
                    <p>Followers - {this.props.user.followers}</p>
                    <p>Following - {this.props.user.following}</p>
                    <p>About Me - {this.props.user.bio}</p>
                </div>
            </div>



        )
    }
}

export default JoesCard;