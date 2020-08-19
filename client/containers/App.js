import React from 'react';
import { Route } from 'react-router-dom';
import '../scss/index.scss';
import "@material-ui/core"
import "@material-ui/icons"
import "@material-ui/styles"
import "@babel/polyfill";
import { Switch } from "react-router-dom"
import { connect } from 'react-redux'

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import SignUpSlug from '../components/SignUpSlug';
import { getCurrentUser, noToken } from '../actions';



class App extends React.Component {
  state = {
    token: ""
  }

  componentDidMount() {
    var token = localStorage.getItem("authToken") || ""
    if (token) {
      this.setState({ token })
      this.props.dispatch(getCurrentUser())
    } else {
      this.props.dispatch(noToken())
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/register/slug" component={SignUpSlug} />
          <Route path="/login" component={Login} />
        </Switch>
      </div >
    );
  }
}

const Home = () => (
  <>
    <Header />
    <HomePage />
  </>
)

function mapState(state) {
  return state
}
export default connect(mapState)(App);





