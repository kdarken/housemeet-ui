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
    paddingTop: 40,
  };

  signUpTextStyle = {
    fontFamily: "montserrat",
  };

  render() {
    return (
      <div className="Login">
        <div class="text-center text-secondary" style={this.pageTitleStyle}>
          Log into your account
        </div>
        <div className="loginContainer">
          <div className="loginInner">
            <LoginForm {...this.props} />
          </div>
        </div>

        <div class="text-center" style={this.signUpTextStyle}>
          Don't have an account?&nbsp;
          <Link to="/signup">Sign up!</Link>
        </div>
        <div class="text-center" style={this.signUpTextStyle}>
          Forgot your password? &nbsp;
          <Link to="/password_recovery">Click here!</Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
