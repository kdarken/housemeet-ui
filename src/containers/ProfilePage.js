import React, { Component } from "react";
import Profile from "../components/Profile";
import "bootstrap/dist/css/bootstrap.css";
import "./ProfilePage.css";

import "typeface-montserrat";

class ProfilePage extends Component {
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
            <div className="profileContainer">
                <div className="profileInner">
                    <Profile userId={localStorage.getItem('userId')} />
                </div>
            </div>
        );
    }
}

export default ProfilePage;
