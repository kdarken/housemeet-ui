import React, { Component, useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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

  renderDate = () => {
    return (
      <div class="form-group col-md-4">
        <div class="form-group row">
          <label for="dateOfBirth" className="col-sm-5.5 col-form-label">
            Date of Birth
          </label>
          <div class="col">
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
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
      <div class="form-group col-md-8">
        <div class="form-group row">
          <label
            for="roommateOrHousemate"
            className="col-sm-5.5 col-form-label"
          >
            Looking for a Roommate of Housemate
          </label>
          <div class="col">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret outline color="primary">
                Click to select your preference
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Roommate</DropdownItem>
                <DropdownItem>Housemate</DropdownItem>
                <DropdownItem>Either Roommate or Housemate</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  };

  renderInput(name, stateName, groupClassInput, colSize1, colSize2, value) {
    var size1 = colSize1 + " col-form-label";
    var groupClass = "form-group " + groupClassInput;
    return (
      <div class={groupClass}>
        <div class="form-group row">
          <label for={stateName} class={size1}>
            {name}
          </label>
          <div class={colSize2}>
            <input
              type="text"
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
        <div class="row">
          <div class="col-sm-3">One of three columns</div>
          <div class="col-sm-9">
            <form onSubmit={this.handleSubmit}>
              <div class="form-row">
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
              <div class="form-row">
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
              <div class="form-row">
                {this.renderInput(
                  "Tell us About yourself",
                  "bio",
                  "col-md-12",
                  "col-sm-5.5",
                  "col",
                  this.state.bio
                )}
              </div>
              <div class="form-row">
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
                  this.state.budget
                )}
              </div>
              <button type="submit" class="btn btn-primary">
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
