import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';
import {TodoCard} from '../widgets/todocard';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
  }

  async componentDidMount(){
    let response = await axios.get("http://localhost:5000/todoitems");
    this.setState({
      items: response.data
    });
  }

  render() {
    // console.log(this.state.items)
    return (
      <div className="container">
        <h1 className="border-bottom">Todos to complete</h1>
        
        {
          this.state.items.map(
            function (item){
              return (<TodoCard
              key={item._id} 
              title={item.title} 
              description={item.description}
              subtitle={item.date}
              username={item.username}
              id={item._id}
              />)
            }
          )
        }
      </div>
    )
  }
}