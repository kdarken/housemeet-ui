import React, { Component } from "react";
import "./EditProfilePage.css";
import UserProfileForm from "../components/UserProfileForm";
import LivingHabitsForm from "../components/LivingHabitsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.handleLivingHabitsClick = this.handleLivingHabitsClick.bind(this);
    this.state = {
      viewFirstComponent: true,
    };
  }

  handleLivingHabitsClick = () =>
    this.setState(({ viewFirstComponent }) => ({
      viewFirstComponent: viewFirstComponent === true ? false : true,
    }));

  render() {
    return (
      <div className="editProfilePage">
        <h2 className="headerProp">User Profile</h2>
        <div className="editProfileContainer">
          <div className="editProfileInner">
            {renderComponent(this.state.viewFirstComponent)}
            <button
              type="button"
              className="btn btn-small btn-circle btn-outline-primary"
              onClick={this.handleLivingHabitsClick}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function renderComponent(canViewUserProfileComponentInput) {
  const canViewUserProfileComponent = canViewUserProfileComponentInput;
  if (canViewUserProfileComponent) {
    return <UserProfileForm />;
  }
  return <LivingHabitsForm />;
}

export default EditProfilePage;
