import React from "react";
import AuthHeader from "./AuthHeader";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <AuthHeader />
      <div className="error-msg-page">
        <div className="error-msg">
          <h2>Page not Found</h2>
          <p>
            This page may be private. If someone gave you this link, they may
            need to invite you to one of their boards or teams.
          </p>
          <NavLink to="/login">Switch Account</NavLink>
        </div>
      </div>
    </>
  );
}
