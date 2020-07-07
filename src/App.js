import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { withRouter } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
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


const DisplaySignUpButton = () => {
  const location = useLocation();
  //if (location.pathname.match(/signup/)){
  if (location.pathname !== "/"){
    return null;
  }

  return (
    <Link to="/signup">
      <button type="button" class="btn btn-primary">
        Sign Up
      </button>
    </Link>
  )
}

const DisplayLogInButton = () => {
  const location = useLocation();
  //if (location.pathname.match(/signup/)){
  if (location.pathname !== "/"){
    return null;
  }

  return (
    <Link to="/login">
      <button type="button" class="btn btn-primary">
        Log In
      </button>
    </Link>
  )
}

const LogInButton = withRouter(DisplayLogInButton);
const SignUpButton = withRouter(DisplaySignUpButton);


function Welcome() {
  return <h2 className="pageTitle">Welcome to Housemeet!</h2>;
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
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
          <nav>
            <SignUpButton />&nbsp;
            <LogInButton />
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;