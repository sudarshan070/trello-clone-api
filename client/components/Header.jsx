import React from "react";
import logo from "../images/trello-logo-white.svg";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="flex-sb header-container">
          <div className="logo">
            <img src={logo}  height="35" alt="logo" />
          </div>
          <div>
            <Link className="text-white btn-sm">Log In</Link>
            <Link className="bg-white btn-sm text-blue">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}
