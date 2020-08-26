import React from "react";
import ReactDOM from 'react-dom';
import "typeface-montserrat";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

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
    event.preventDefault();
    if (this.state.passwordRepeated !== this.state.password) {
      alert("Your passwords do not match.");
      return;
    }
    axios.post('/users/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response);
      alert("Your account has been created! Logging you in...");
      console.log(response.data.user.email)
      localStorage.setItem('email', response.data.user.email)
      localStorage.setItem('name', response.data.user.name)
      localStorage.setItem('token', response.data.token)
      this.props.history.push('/home');

    }, (error) => {
      console.log(error);
      alert("Unable to create account. Make sure your email is valid, your password is at least 7 characters, and you entered your password in correctly twice.");
    });
    
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
        <div style={{textAlign: "center"}}>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('root')
);

export default SignUpForm;
