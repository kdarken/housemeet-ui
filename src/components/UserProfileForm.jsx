import React, { Component } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class UserProfileForm extends Component {
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
      <div>
        <div class="row">
          <div class="col-sm-3">One of three columns</div>
          <div class="col-sm-9">
            <form>
              <div class="form-row">
                {RenderInput(
                  "First Name",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7"
                )}
                {RenderInput("Last Name", "col-md-4", "col-sm-5.5", "col-sm-7")}
                {RenderInput(
                  "Date of Birth",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7"
                )}
              </div>
              <div class="form-row">
                {RenderInput("Lifestyle", "col-md-4", "col-sm-5.5", "col-8")}
                {RenderInput(
                  "Looking for a Roommate of Housemate",
                  "col-md-8",
                  "col-sm-5.5",
                  "col"
                )}
              </div>
              <div class="form-row">
                {RenderInput(
                  "Tell us About yourself",
                  "col-md-12",
                  "col-sm-5.5",
                  "col"
                )}
              </div>
              <div class="form-row">
                {RenderInput(
                  "Current City",
                  "col-md-4",
                  "col-sm-5.5",
                  "col-sm-7"
                )}
                {RenderInput("New City", "col-md-4", "col-sm-5.5", "col-sm-7")}
                {RenderInput("Budget", "col-md-4", "col-sm-5.5", "col-sm-7")}
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

function RenderInput(name, groupClass, colSize1, colSize2) {
  var size1 = colSize1 + " col-form-label";
  var groupClass = "form-group " + groupClass;
  return (
    <div class={groupClass}>
      <div class="form-group row">
        <label for="inputEmail3" class={size1}>
          {name}
        </label>
        <div class={colSize2}>
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            placeholder={name}
          />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<UserProfileForm />, document.getElementById("root"));

export default UserProfileForm;
