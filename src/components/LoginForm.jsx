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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  render() {
    return (
      <div
        style={{
          fontFamily: "montserrat",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-10">
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

          <div className="form-group col-sm-10">
            <input
              type="text"
              name="password"
              className="form-control form-control-lg text-center"
              id="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div style={{ paddingTop: 10 }}>
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));

export default LoginForm;
