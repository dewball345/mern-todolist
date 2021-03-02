import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {TextWidget} from "../widgets/textwidget.js";


export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      title: '',
      date: new Date(),
      users: []
    }
  }

  async componentDidMount(){
    let response = await axios.get(
      "http://localhost:5000/users");
    // console.log(response);
    this.setState({
      users: response.data.map(
        (element, index) => element.username),
      username: this.state.users[0],
    })
  }

  // componentDidMount(){
  //   this.setState({
  //     username: "user1",
  //     users: ['poo', 'pee']
  //   })
  // }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate(date){
    this.setState({
      date: date
    });
  }


  async onSubmit(event){
    console.log("HERE ERE")
    event.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      title: this.state.title,
      date: this.state.date,
    };
  
    console.log(exercise);
    let response = await axios.post('http://localhost:5000/todoitems/add', exercise)
    console.log(response.data)
    window.location = '/';
  }

  render() {
    // console.log("hello")
    return (
      <div className = "container">
        <h3 className="border-bottom">You are on the Create todo component!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>

          <TextWidget 
            title="Title" 
            placeholder="Enter Title" 
            onChange={this.onChangeTitle} 
            value={this.state.title} />

          <TextWidget 
            title="Description" 
            placeholder="Enter Description" 
            onChange={this.onChangeDescription} />
      
          <div className="form-group">
            <label>When to finish: </label><br/>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate} /> 
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}