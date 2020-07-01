import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "../images/housemeet-logo.svg";
import SignUpForm from "../components/SignUpForm";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class SignUpPage extends Component {
  styles = {
    fontSize: 30,
    fontWeight: "regular",
    fontFamily: "montserrat",
    textAlign: "center",
    paddingTop: 80
  };

    render() {
        return (
            <div>
                <div class="text-center text-secondary" style={this.styles}>
                    Create an account
                </div>
                <div className="signUpContainer">
                    <div className="signUpInner">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpPage;
