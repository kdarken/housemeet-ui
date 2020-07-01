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
import SignUpForm from './components/SignUpForm';
import LoginPage from './containers/LoginPage';

const DisplayLogInLink = () => {
  const location = useLocation();
  //if (location.pathname.match(/signup/)){
  if (location.pathname !== "/signup"){
    return null;
  }

  return (
    <span>
    Already have an account?&nbsp;
    <Link to="/login">
    Log in!
    </Link>
    </span>
  )
}

const DisplaySignUpLink = () => {
  const location = useLocation();
  //if (location.pathname.match(/signup/)){
  if (location.pathname !== "/login"){
    return null;
  }

  return (
    <span>
    Don't have an account?&nbsp;
    <Link to="/signup">
    Sign up!
    </Link>
    </span>
  )
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

const LogInLink = withRouter(DisplayLogInLink);
const SignUpLink = withRouter(DisplaySignUpLink);
const LogInButton = withRouter(DisplayLogInButton);
const SignUpButton = withRouter(DisplaySignUpButton);


function SignUp() {
  return <div className="signUpContainer"><div className="signUpInner"><SignUpForm /></div></div>;
}

function LogIn() {
  return <LoginPage />;
}

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
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
          <nav>
            <LogInLink />
            <SignUpLink />
            <SignUpButton />&nbsp;
            <LogInButton />
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;