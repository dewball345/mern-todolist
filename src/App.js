import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import TodoList from "./components/todo-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div style={{
      paddingTop:70 + "px"
    }}>
      <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
