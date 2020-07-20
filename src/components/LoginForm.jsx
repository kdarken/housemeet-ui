/**This file was created by Divinee Chidume and is used to render login form on the
 * the Login Page for the House Meet Application.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "typeface-montserrat";
import axios from 'axios';

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
    event.preventDefault();
    axios.post('/users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      alert("Logging you in...");
      localStorage.setItem('email', response.data.user.email)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('token', response.data.token)
      this.props.history.push('/home');
    }, (error) => {
      console.log(error);
      alert("Invalid credentials.");
    });
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
            placeholder="Email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group col-sm-20">
          <input
            type={this.state.passwordtype}
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
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
            <button
              type="submit"
              className="btn btn-primary mb-2"
            >
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
