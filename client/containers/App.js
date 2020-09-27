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
import Error from '../components/Error';
import AuthHomePage from '../components/AuthHomePage';
import Loader from '../components/Loader'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
    }
  }


  componentDidMount() {
    var token = localStorage.getItem("token") || ""
    if (token) {
      this.setState({ token })
      this.props.dispatch(getCurrentUser())
    } else {
      this.props.dispatch(noToken())
    }
  }

  render() {
    const { token } = this.props.currentUser
    return (
      <Switch>
        <>
          {
            token ?
              <>
                <Route exact path="/" component={AuthHome} />
                <Route path="/login" component={Login} />
                {/* <Route path="/*" component={Error} /> */}
              </> :
              <>
                <Route exact path="/" component={NonAuthHome} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/register/slug" component={SignUpSlug} />
                <Route path="/login" component={Login} />
                {/* <Route path="/*" component={Error} /> */}
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

const AuthHome = () => (
  <>
    <AuthHeader />
    <AuthHomePage />
  </>
)

function mapState(state) {
  return state
}
export default connect(mapState)(App);





