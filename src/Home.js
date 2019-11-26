import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/todolist">TodoList</NavLink></li>
        <li><NavLink to="/box">Box</NavLink></li>
        <li><Link to="/box">Box</Link></li>
        <li><Link to="/todolist">TodoList</Link></li>
      </>
    )
  }
}