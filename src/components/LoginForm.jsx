/**This file was created by Divinee Chidume and is used to render login form on the
 * the Login Page for the House Meet Application.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordtype: "password",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    alert("Successfully logged into " + this.state.name + "'s account");
    event.preventDefault();
  }

  handleClick = () =>
    this.setState(({ passwordtype }) => ({
      passwordtype: passwordtype === "text" ? "password" : "text",
    }));

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group col-sm-20">
          <input
            type="text"
            name="email"
            placeholder="email"
            className="form-control form-control-lg text-center"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group col-sm-20">
          <input
            type={this.state.passwordtype}
            name="password"
            className="form-control form-control-lg text-center"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              type="checkbox"
              id="checkbox"
              className="form-check-input"
              onClick={this.handleClick}
            />
            <label
              className="form-check-label"
              for="checkbox"
              style={{ fontFamily: "montserrat" }}
            >
              Show password
            </label>
          </div>
          <div style={{ paddingTop: 10, textAlign: "center" }}>
            <button type="submit" className="btn btn-primary btn-lg mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));

export default LoginForm;
