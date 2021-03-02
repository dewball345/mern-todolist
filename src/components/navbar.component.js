import React from 'react';
import {Link} from 'react-router-dom';



export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar fixed-top navbar-dark bg-primary navbar-expand-lg" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" href="#">Generic Todo</Link>
                <div className="collpase navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Todo list</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Todo Item</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}