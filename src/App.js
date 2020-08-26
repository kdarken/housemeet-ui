import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./containers/LoginPage";
import SignUpPage from "./containers/SignUpPage";
import RestrictedRoute from "./components/RestrictedRoute";
import EditProfilePage from "./containers/EditProfilePage";
import Home from "./containers/Home";
import ProfilePage from "./containers/ProfilePage";
//import Menu from "./components/Menu";
import menu from "./images/menu.svg";


import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



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

function Logout() {
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

function Menu() {
  const location = useLocation();
  if (location.pathname == "/" || location.pathname == "/signup" || location.pathname == "/login") {
    return null;
  }
  return (
        <div style={{ position: "absolute", left: "87%", top: "0%", display: "flex" }}>
            <div class="btn-group dropleft">
                <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginTop: "16%", backgroundColor: "transparent", color: "black", border: "none", outline: "none"}}>
                Hi, <span style={{ fontWeight: "bold", flexDirection: "row" }}>{localStorage.getItem('name')}</span>
                <img
                    src={menu}
                    className="menu"
                    alt="menu"
                    class="rounded mx-auto d-block"
                    style={{
                    width: 25,
                    flexDirection: "row",
                    float: "right",
                    marginTop: "4%",
                    paddingLeft: "8%"
                    }}
                />
                </button>

                <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/home">Home</a>
                <a class="dropdown-item" href="/">
                    <button class="dropdown-item text-left" type="button" onClick={() => {localStorage.clear()}} style={{outline: "none", textAlign: "left !important", padding: "0"}}>
                    <span class="pull-left">Logout</span>
                    </button>
                </a>
                <a class="dropdown-item" href="/profile">Profile</a>
                <a class="dropdown-item" href="/profile/edit">Edit Profile</a>
                </div>
            </div>
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
        <Menu />
          <Helmet>
            <title>housemeet</title>
          </Helmet>
          <header className="Login-header">
            <DisplayLogo />
          </header>
          
          <Switch>
            <RestrictedRoute exact path="/home" component={Home} requiresLogin={true} redirectPath="/" />
            <RestrictedRoute exact path="/profile/edit" component={EditProfilePage} requiresLogin={true} redirectPath="/" />
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
