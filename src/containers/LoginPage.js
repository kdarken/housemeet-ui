import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class LoginPage extends Component {

  pageTitleStyle = {
    fontSize: 30,
    fontWeight: "regular",
    fontFamily: "montserrat",
    paddingTop: 40
  };

  signUpTextStyle = {
    fontFamily: "montserrat"
  };

  render() {
    return (
      <div className="Login">

        <div class="text-center text-secondary" style={this.pageTitleStyle}>
          Log into your account
        </div>
        <Login />
        <div class="text-center" style={this.signUpTextStyle}>
          Don't have an account?&nbsp;
          <Link to="/signup">
              Sign up!
          </Link>
        </div>
        <div class="text-center text-secondary" style={{ paddingTop: 30 }}>
          <span
            style={{
              fontFamily: "montserrat",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Forgot your password? &nbsp;
            <Link to="/password_recovery">Click here!</Link>
          </span>
        </div>
      </div>
    );
  }
}

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginInner">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
