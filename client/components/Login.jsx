import React from "react";
import Logo from "../images/trello-logo-blue.svg";
import { NavLink } from "react-router-dom";
import { userLogin } from "../actions";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    return this.props.dispatch(userLogin(this.state, this.props.history));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signUp-form">
        <section>
          <div className="signUp-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="form-wrapper">
            <div className="form-box">
              <h2>Log in to Trello</h2>
              <input
                className="signUp-form-input login-form-input"
                type="email"
                placeholder="Enter email"
                value={email}
                name="email"
                onChange={(e) => this.handleInput(e)}
              />
              <input
                className="signUp-form-input login-form-input"
                type="password"
                placeholder="Enter password"
                value={password}
                name="password"
                onChange={(e) => this.handleInput(e)}
              />
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="form-btn login-btn"
              >
                Log In
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
                <NavLink className="signUp-link" to="/signUp">
                  Can't log in? Sign up for an account
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    );
  }
}

function mapState(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapState)(Login);
