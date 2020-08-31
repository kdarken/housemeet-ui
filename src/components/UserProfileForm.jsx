import React, { Component } from "react";

import ReactDOM from "react-dom";

import axios from "axios";
import DatePicker from "react-datepicker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faImage } from "@fortawesome/free-solid-svg-icons";

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
      roommateOrHousemate: "",
      bio: "",
      currentCity: "",
      newCity: "",
      budget: "",
      profilePhoto: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  onFileChange = (event) => {
    // Update the state
    this.setState({ profilePhoto: event.target.files[0] });
  };

  handleChange(event) {
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

  handleChangeSelect = (event) => {
    console.log(event.target.value);
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
        email: localStorage.getItem('email'),
        profilePhoto: this.state.profilePhoto,
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
          <label
            for="roommateOrHousemate"
            className="col-sm-5.5 col-form-label"
          >
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

  renderInput(
    name,
    stateName,
    groupClassInput,
    colSize1,
    colSize2,
    value,
    inputType = "text"
  ) {
    var size1 = colSize1 + " col-form-label";
    var groupClass = "form-group " + groupClassInput;
    return (
      <div className={groupClass}>
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
                <h5 class="card-title">
                  <FontAwesomeIcon
                    icon={faImage}
                    style={{ width: "20%", height: "auto" }}
                  />
                  <br />
                  <br />
                  Drag and Drop Photo <br />
                  or
                </h5>
                <input
                  type="file"
                  name="image"
                  onChange={this.onFileChange}
                  value={this.state.profilePhoto}
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                {this.renderInput(
                  "First Name",
                  "firstName",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.firstName
                )}
                {this.renderInput(
                  "Last Name",
                  "lastName",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.lastName
                )}
                <this.renderDate />
              </div>
              <div className="form-row">
                {this.renderInput(
                  "Lifestyle",
                  "lifeStyle",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-8",
                  this.state.lifeStyle
                )}
                <this.renderDropDown />
              </div>

              <this.renderBio />
              <div className="form-row">
                {this.renderInput(
                  "Current City",
                  "currentCity",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.currentCity
                )}
                {this.renderInput(
                  "New City",
                  "newCity",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7",
                  this.state.newCity
                )}
                {this.renderInput(
                  "budget",
                  "budget",
                  "col-md-4",
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
