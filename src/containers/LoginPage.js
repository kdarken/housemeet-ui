import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../images/housemeet-logo.svg";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class LoginPage extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "regular",
    fontFamily: "montserrat",
    textAlign: "center",
    paddingTop: 80,
  };

  render() {
    return (
      <div className="Login">
        <Helmet>
          <title>housemeet</title>
        </Helmet>
        <header className="Login-header">
          <DisplayLogo />
        </header>

        <div class="text-center text-secondary" style={this.styles}>
          Log into your account
        </div>
        <Login />
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
