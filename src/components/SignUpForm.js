import React from "react";
import ReactDOM from 'react-dom';
import "typeface-montserrat";
import "bootstrap/dist/css/bootstrap.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordRepeated: '',
      passwordType: 'password'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const value =  event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
    alert('An account is being created for ' + this.state.name);
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
    })
    event.preventDefault();
  }

  handleClick = () =>
  this.setState(({ passwordType }) => ({
    passwordType: passwordType === "text" ? "password" : "text",
  }));

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Name" 
              value={this.state.name} 
              onChange={this.handleChange} 
              required 
            />
        </div>
        <div className="form-group">
            <input 
              type="text" 
              name="email" 
              className="form-control" 
              placeholder="Email" 
              value={this.state.email} 
              onChange={this.handleChange} 
              required 
            />
        </div>
        <div className="form-group">
            <input 
              type={this.state.passwordType} 
              name="password" 
              className="form-control" 
              placeholder="Enter password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              required 
            />
        </div>
        <div className="form-group">
            <input 
              type={this.state.passwordType}
              name="passwordRepeated" 
              className="form-control" 
              placeholder="Confirm password" 
              value={this.state.passwordRepeated} 
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
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('root')
);

export default SignUpForm;
