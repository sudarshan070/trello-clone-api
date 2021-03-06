import React from "react";
import Logo from "../images/trello-logo-blue.svg";
import { NavLink, Link } from "react-router-dom";
import { userSignUp } from "../actions/index";
import { connect } from "react-redux";

class SignUpSlug extends React.Component {
  state = {
    email: "",
    password: "",
    username: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    return this.props.dispatch(userSignUp(this.state, this.props.history));
  };

  render() {
    const { email, password, username } = this.state;
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
                name="email"
                value={email}
                onChange={(e) => this.handleInput(e)}
              />
              <input
                className="signUp-form-input login-form-input"
                type="text"
                placeholder="Enter full name"
                value={username}
                name="username"
                onChange={(e) => this.handleInput(e)}
              />
              <input
                className="signUp-form-input login-form-input"
                type="password"
                placeholder="Create password"
                value={password}
                name="password"
                onChange={(e) => this.handleInput(e)}
              />
              <p>
                By signing up, you confirm that you've read and accepted our
                Terms of Service and Privacy Policy.
              </p>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="form-btn "
              >
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
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState)(SignUpSlug);
