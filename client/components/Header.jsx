import React from "react";
import logo from "../images/trello-logo-white.svg";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="flex-sb header-container">
          <NavLink to="/" className="logo">
            <img src={logo} height="35" alt="logo" />
          </NavLink>
          <div>
            <NavLink to="/login" className="text-white btn-sm">
              Log In
            </NavLink>
            <NavLink to="/signUp" className="bg-white btn-sm text-blue" exact>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
