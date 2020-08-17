import React, { useState } from "react";
import Logo from "../images/trello-logo-blue.svg";
import { NavLink } from "react-router-dom";
import userSignUp from "../actions/index";

export default function SignUpSlug() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (props) => {
    try {
      var res = await userSignUp({
        user: {
          username,
          email,
          password,
        },
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signUp-form">
      <section>
        <div className="signUp-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="form-wrapper">
          <div className="form-box">
            <h2>Sign up for your account</h2>
            <input
              className="signUp-form-input login-form-input"
              type="email"
              placeholder="email"
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <input
              className="signUp-form-input login-form-input"
              type="text"
              placeholder="Enter full name"
              onChange={({ target: { value } }) => setUserName(value)}
            />
            <input
              className="signUp-form-input login-form-input"
              type="password"
              placeholder="Create password"
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <p>
              By signing up, you confirm that you've read and accepted our Terms
              of Service and Privacy Policy.
            </p>
            <button type="submit" onClick={handleSubmit} className="form-btn ">
              Continue
            </button>
            <hr />
            <div className="login-link">
              <NavLink className="signUp-link" to="/login">
                Already have an account? Log In
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
