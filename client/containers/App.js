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
import AuthHeader from "../components/AuthHeader"
import { getCurrentUser, noToken } from '../actions';



class App extends React.Component {
  state = {
    token: "",
  }


  verifyLogin = () => {
    var token = localStorage.getItem("token") || ""
    if (token) {
      this.setState({ token: token })
      this.props.dispatch(getCurrentUser())
    } else {
      this.props.dispatch(noToken())
    }
  }

  componentDidMount() {
    this.verifyLogin()
  }


  render() {
    console.log(this.state.token, "app token");
    const { token } = this.state
    return (
      <Switch>
        <>
          {
            token ?
              <Route exact path="/" component={AuthHeader} /> :
              <>
                <Route exact path="/" component={NonAuthHome} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/register/slug" component={SignUpSlug} />
                <Route path="/login" component={Login} />
              </>
          }
        </>
      </Switch>
    );
  }
}

const NonAuthHome = () => (
  <>
    <Header />
    <HomePage />
  </>
)

function mapState(state) {
  return state
}
export default connect(mapState)(App);





