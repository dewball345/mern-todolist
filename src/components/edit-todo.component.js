import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {TextWidget} from "../widgets/textwidget.js";
import { parseISO} from 'date-fns';

export default class EditTodo extends Component {
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
      "http://localhost:5000/todoitems/" + this.props.match.params.id);
    let users = await axios.get(
        "http://localhost:5000/users/");
    console.log(response);
    this.setState({
      username: response.data.username,
      description: response.data.description,
      title: response.data.title,
      date: new Date(parseISO(response.data.date)),
      users: users.data.map(
        (element, index) => element.username),
    });

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


  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      title: this.state.title,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/todoitems/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    // console.log("hello")
    return (
      <div className = "container">
        <h3 className="border-bottom">You are on the edit  todo component!</h3>
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
            value={this.state.title}
            onChange={this.onChangeTitle} />

          <TextWidget 
            title="Description" 
            placeholder="Enter Description"
            value={this.state.description} 
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