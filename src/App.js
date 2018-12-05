import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Route, NavLink, Switch } from "react-router-dom";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div>WestSide University</div>
          <div className="link-wrap">
            <NavLink className="links" exact to="/">
              Home
            </NavLink>
            <NavLink className="links" to="/about">
              About
            </NavLink>
          </div>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/classlist/:class" component={ClassList} />
          <Route path="/student/:id" component={Student} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
