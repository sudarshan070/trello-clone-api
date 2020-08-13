import React from 'react';
import { Route } from 'react-router-dom';
import '../scss/index.scss';
import "@material-ui/core"
import "@material-ui/icons"
import "@material-ui/styles"

import HomePage from '../components/HomePage';
import Header from '../components/Header';
import SignUp from "../components/SignUp"

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signUp" component={SignUp} />
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





