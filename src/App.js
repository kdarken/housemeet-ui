import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { withRouter } from "react-router";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import ProfilePage from "./containers/ProfilePage";
import RestrictedRoute from "./components/RestrictedRoute"

import { Helmet } from "react-helmet";
import logo from "./images/housemeet-logo.svg";

function DisplayLogo() {
  return (
    <img
      src={logo}
      className="Login-logo"
      alt="logo"
      class="rounded mx-auto d-block"
      style={{ paddingTop: 70, alignContent: "center" }}
    />
  );
}

function Logout() {
  //if (!localStorage.getItem('token')) {
   //return null
  //}
  return (
    <div style={{textAlign: "center"}}>
        <Link to="/">
          <button type="button" class="btn btn-primary" onClick={() => {localStorage.clear()}}>
            Logout
          </button>
        </Link>
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h2 className="pageTitle">Welcome to Housemeet!</h2>
      <nav>
        <Link to="/signup">
          <button type="button" class="btn btn-primary">
            Sign Up
          </button>
        </Link>
        &nbsp;
        <Link to="/login">
          <button type="button" class="btn btn-primary">
            Log In
          </button>
        </Link>
      </nav>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <title>housemeet</title>
          </Helmet>
          <header className="Login-header">
            <DisplayLogo />
          </header>
          <Switch>
            <RestrictedRoute exact path="/home" component={Logout} requiresLogin={true} redirectPath="/" />
            <RestrictedRoute exact path="/profile" component={ProfilePage} requiresLogin={true} redirectPath="/" />
            <RestrictedRoute exact path="/signup" component={SignUpPage} requiresLogin={false} redirectPath="/home" /> 
            <RestrictedRoute exact path="/login" component={LoginPage} requiresLogin={false} redirectPath="/home" />
            <RestrictedRoute exact path="/" component={Welcome} requiresLogin={false} redirectPath="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
