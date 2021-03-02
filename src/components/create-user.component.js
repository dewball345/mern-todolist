import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props){
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {username: ""};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  async onSubmit(event){
    console.log("HERE ERE")
    event.preventDefault();
    const user = {
      username: this.state.username,
    };
  
    console.log(user);
    let response = await axios.post('http://localhost:5000/users/add', user);
    console.log(response.data)
    window.location = '/';
  }

  render() {
    return (
      <div className="container">
        <h3 className="border-bottom">You are on the Create User component!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text" 
              required
              className="form-control"
              onChange={this.onChangeUsername}>
            </input>
          </div>

          <div className="form-group">
            <input type="submit"
             value="Create User" 
             className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}