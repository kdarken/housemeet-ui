import React, { Component } from "react";
import "./ProfilePage.css";
import UserProfileForm from "../components/UserProfileForm";
<<<<<<< HEAD
import LivingHabitsForm from "../components/LivingHabitsForm";
=======
>>>>>>> create_profile

class ProfilePage extends Component {
  state = {
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    LifeStyle: "",
    RoomateOrHousemate: "",
    Bio: "",
    CurrentCity: "",
    NewCity: "",
    Budget: "",
  };
  render() {
    return (
      <div className="ProfilePage">
        <div style={{ position: "absolute", left: 1500, top: 55 }}>
          <p>
            Hi <span style={{ fontWeight: "bold" }}>Karen</span>
          </p>
        </div>
        <h2 className="headerProp">User Profile</h2>
        <div className="profileContainer">
          <div className="profileInnner">
<<<<<<< HEAD
            <LivingHabitsForm />
=======
            <UserProfileForm />
>>>>>>> create_profile
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default ProfilePage;
=======
export default ProfilePage;
>>>>>>> create_profile
