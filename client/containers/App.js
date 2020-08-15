import React from 'react';
import { Route } from 'react-router-dom';
import '../scss/index.scss';
import "@material-ui/core"
import "@material-ui/icons"
import "@material-ui/styles"
import { Switch } from "react-router-dom"

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import SignUpSlug from '../components/SignUpSlug';


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/register/slug" component={SignUpSlug}/>
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
export default App;





