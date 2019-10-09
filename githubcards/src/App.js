import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import JoesCard from "./Components/JoesCard";
import UserDevCard from './Components/UserDevCard'

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: [],
      following: []
    }
  }

  componentDidMount(){
    this.fetchUserData();
    this.fetchFollowing()
  }



fetchUserData = () => {
  axios.get('https://api.github.com/users/Joe-Thompson')
      .then(res => {
      console.log(res.data);
      this.setState({user: res.data})   
    })
    .catch(error => {
      console.log(error)
    })
};


fetchFollowing = () => {
  axios.get('https://api.github.com/users/Joe-Thompson/following')
      .then(res => {
      this.setState({following: res.data})
    })
    .catch(error => {
      console.log(error)
    })
} 

  render() {
    return (
      <div className="container">
        <h1 className='title'>My GitHub User Card</h1>
        <JoesCard user={this.state.user}/>
        <h2 className='title'>Users that I Follow</h2>
        {this.state.following.map((item, index) => {
           return <UserDevCard key={index} props={item}/>
        })}
      </div>
    )
  }
}

export default App;