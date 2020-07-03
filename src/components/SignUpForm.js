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
      passwordRepeated: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();
  }

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
              type="text" 
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
              type="text" 
              name="passwordRepeated" 
              className="form-control" 
              placeholder="Confirm password" 
              value={this.state.passwordRepeated} 
              onChange={this.handleChange} 
              required 
            />
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
