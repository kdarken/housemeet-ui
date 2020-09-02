import React, { Component } from "react";

import ReactDOM from "react-dom";

import axios from "axios";
import DatePicker from "react-datepicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons";

import twitterLogo from "../images/twitter.svg";
import facebookLogo from "../images/facebook.svg";
import instagramLogo from "../images/instagram2.svg";
import spotifyLogo from "../images/spotify.svg";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class UserProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      lifeStyle: "",
      roommateOrHousemate: "Roommate",
      bio: "",
      currentCity: "",
      newCity: "",
      budget: "",
      email: "",
      gender: "",
      houseMateGender: "",
      moveInDay: "",
      numberInHome: "",
      preferredNeighborhood: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeDate_ = this.handleChangeDate_.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleChangeDate = (date) => {
    this.setState({
      dateOfBirth: date,
    });
  };

  handleChangeDate_ = (date) => {
    this.setState({
      moveInDay: date,
    });
  };

  handleChangeSelect = (event) => {
    this.setState({ roommateOrHousemate: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/profiles/update/basic", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        lifeStyle: this.state.lifeStyle,
        roommateOrHousemate: this.state.roommateOrHousemate,
        bio: this.state.bio,
        currentCity: this.state.currentCity,
        newCity: this.state.newCity,
        budget: this.state.budget,
<<<<<<< HEAD
        email: localStorage.getItem('email'),
        profilePhoto: this.state.profilePhoto,
=======
        gender: this.state.gender,
        houseMateGender: this.state.houseMateGender,
        moveInDay: this.state.moveInDay,
        numberInHome: this.state.numberInHome,
        preferredNeighborhood: this.state.preferredNeighborhood,
        email: "divineechidume@berkeley.edu",
>>>>>>> origin/socials
      })
      .then(
        (response) => {
          console.log(response);
          alert("Creating your profile...");
        },
        (error) => {
          console.log(error);
          alert("Invalid credentials.");
        }
      );
  }

  renderBio = () => {
    return (
      <div className="form-row">
        <div className="form-group col-md-12">
          <div className="form-group row">
            <label for="bio" className="col-sm-5.5 col-form-label">
              <b>Tell us About yourself</b>
            </label>
            <div class="col">
              <textarea
                className="form-control"
                id="bio"
                name="bio"
                type="text"
                rows="3"
                value={this.state.bio}
                placeholder="Tell your future Housemate/Roommate about yourself! (500 character limit)"
                onChange={this.handleChange}
                maxlength="500"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderDate = () => {
    return (
      <div className="form-group col-md-4">
        <div className="form-group row">
          <label for="dateOfBirth" className="col-sm-5.5 col-form-label">
            <b>Date of Birth</b>
          </label>
          <div className="col">
            <DatePicker
              selected={this.state.dateOfBirth}
              onChange={this.handleChangeDate}
              placeholderText="Click to select a date"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>
      </div>
    );
  };

  renderDropDown = () => {
    return (
      <div className="form-group col-md-8">
        <div className="form-group row">
          <label for="roommateOrHousemate" className="col-sm-5.5">
            <b>Looking for a Roommate of Housemate</b>
          </label>
          <div className="col-sm-5">
            <select
              class="form-control"
              id="roommateOrHousemate"
              onChange={this.handleChangeSelect}
            >
              <option value="Roommate">Roommate</option>
              <option value="Housemate">Housemate</option>
              <option value="Either">Either</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  SVGComponent = () => {
    return <svg {...this.props}>{this.props.children}</svg>;
  };

  renderInput(name, stateName, colSize1, colSize2, value, inputType = "text") {
    var size1 = colSize1 + " col-form-label";
    return (
      <div className="form-group row">
        <label for={stateName} className={size1}>
          <b>{name}</b>
        </label>
        <div className={colSize2}>
          <input
            type={inputType}
            name={stateName}
            id={stateName}
            className="form-control"
            placeholder={name}
            value={value}
            onChange={this.handleChange}
            required
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="container-fluid" style={{ flexShrink: 1 }}>
        <div className="row">
          <div className="col-md-3 ">
            <div
              class="card border-secondary mb-3"
              style={{ maxWidth: "18rem", textAlign: "center" }}
            >
              <div class="card-header">Upload Profile Photo</div>
              <div class="card-body">
                <h5>Link social media Profiles</h5>
                <div className="row">
                  <div link={this.state.twitterLink} logo={twitterLogo} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                {this.renderInput(
                  "First Name",
                  "firstName",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.firstName
                )}
                {this.renderInput(
                  "Last Name",
                  "lastName",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.lastName
                )}
                <this.renderDate />
              </div>
              <div className="form-row">
                {this.renderInput(
                  "Email",
                  "email",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.email
                )}
                {this.renderInput(
                  "Gender",
                  "gender",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.gender
                )}
                {this.renderInput(
                  "Preferred Roommate/Housemate's Gender",
                  "houseMateGender",
                  "col-sm-5.5",
                  "col-sm",
                  this.state.houseMateGender
                )}
              </div>
              <div className="form-row">
                {this.renderInput(
                  "Lifestyle",
                  "lifeStyle",
                  "col-sm-5.5",
                  "col-8",
                  this.state.lifeStyle
                )}
                <this.renderDropDown />
              </div>

              <this.renderBio />
              <div className="form-row">
                <div className="form-group row">
                  <label for="moveInDay" className="col-sm-5.5 col-form-label">
                    <b>Move In Date</b>
                  </label>
                  <div className="col-sm-6">
                    <DatePicker
                      selected={this.state.moveInDay}
                      onChange={this.handleChangeDate_}
                      placeholderText="Click to select a date"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                    />
                  </div>
                </div>

                {this.renderInput(
                  "Number of Roommates/Housemates",
                  "numberInHome",
                  "col-sm-5.5",
                  "col-sm-4",
                  this.state.numberInHome
                )}

                {this.renderInput(
                  "preferred Neighborhood",
                  "preferredNeighborhood",
                  "col-sm-5.5",
                  "col-sm",
                  this.state.preferredNeighborhood,
                  Number
                )}
              </div>

              <div className="form-row">
                {this.renderInput(
                  "Current City",
                  "currentCity",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.currentCity
                )}
                {this.renderInput(
                  "New City",
                  "newCity",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.newCity
                )}
                {this.renderInput(
                  "budget",
                  "budget",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.budget,
                  Number
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<UserProfileForm />, document.getElementById("root"));

export default UserProfileForm;
