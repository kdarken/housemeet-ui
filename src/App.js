import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import ProfilePage from "./containers/ProfilePage";

import { Helmet } from "react-helmet";
import logo from "./images/housemeet-logo.svg";

function DisplayLogo() {
  return (
    <img
      src={logo}
      className="Login-logo"
      alt="logo"
      class="rounded mx-auto d-block"
      style={{
        paddingTop: 70,
        alignContent: "center",
        maxWidth: "100%",
        height: "auto",
      }}
    />
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
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div>
          <Helmet>
            <title>housemeet</title>
          </Helmet>
          <header className="Login-header">
            <DisplayLogo />
          </header>
          <Switch>
            <Route path="/home"></Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>

            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route
              path="/signup"
              render={(props) => <SignUpPage {...props} />}
            />
            <Route path="/login" render={(props) => <LoginPage {...props} />} />

            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
