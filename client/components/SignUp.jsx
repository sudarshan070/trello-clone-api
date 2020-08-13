import React from "react";
import Logo from "../images/trello-logo-blue.svg";
import { NavLink } from "react-router-dom";

export default class SignUp extends React.Component {
  render() {
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
                className="signUp-form-input"
                type="email"
                placeholder="email"
              />
              <p>
                By signing up, you confirm that you've read and accepted our
                Terms of Service and Privacy Policy.
              </p>
              <button type="submit" className="form-btn ">
                Continue
              </button>
              <div className="or">
                <span>OR</span>
              </div>
              <button type="submit" className="form-btn auth-btn">
                Login with Google
              </button>
              <button type="submit" className="form-btn auth-btn">
                Continue with Microsoft
              </button>
              <button type="submit" className="form-btn auth-btn">
                Continue with Apple
              </button>
              <hr />
              <div className="login-link">
                <NavLink className="signUp-link" to="/login">Already have an account? Log In</NavLink>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    );
  }
}
