import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import {
    Link
  } from "react-router-dom";

class SignUpPage extends Component {
  pageTitleStyle = {
    fontSize: 30,
    fontWeight: "regular",
    fontFamily: "montserrat",
    paddingTop: 40
  };

  loginTextStyle = {
    fontFamily: "montserrat"
  };

    render() {
        return (
            <div>
                <div class="text-center text-secondary" style={this.pageTitleStyle}>
                    Create an account
                </div>
                <div className="signUpContainer">
                    <div className="signUpInner">
                        <SignUpForm {...this.props} />
                    </div>
                </div>
                <div class="text-center" style={this.loginTextStyle}>
                    Already have an account?&nbsp;
                    <Link to="/login">
                        Log in!
                    </Link>
                </div>
            </div>
        );
    }
}

export default SignUpPage;
