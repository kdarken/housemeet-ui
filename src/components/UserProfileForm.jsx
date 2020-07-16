import React, { Component, useState } from "react";

import ReactDOM from "react-dom";

import axios from "axios";
import DatePicker from "react-datepicker";

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

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
        email: "divineechidume@berkeley.edu",
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
              Tell us About yourself
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
            Date of Birth
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
            Looking for a Roommate of Housemate
          </label>
          <div className="col-sm-5">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Roommate</option>
              <option>Housemate</option>
              <option>Either</option>
            </select>
          </div>
        </div>
      </div>
    );
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
            {name}
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
      <div>
        <div className="row">
          <div className="col-sm-3">One of three columns</div>
          <div className="col-sm-9">
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
