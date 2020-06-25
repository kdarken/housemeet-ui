import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from './components/SignUpForm';

export default function App() {
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
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

function SignUp() {
  return <div className="signUpContainer"><div className="signUpInner"><SignUpForm /></div></div>;
}

function LogIn() {
  return <h2>Log In</h2>;
}

function Welcome() {
  return <h2>Welcome to Housemeet!</h2>;
}
