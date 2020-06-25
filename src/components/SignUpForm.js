import React from "react";
import ReactDOM from 'react-dom';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
        <h2>Sign Up</h2>

        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email:
            <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Create a password:
            <input type="text" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} required />
          </label>
        </div>

        <div className="form-group">
          <label>
            Confirm your password:
            <input type="text" name = "passwordRepeated" className="form-control" value={this.state.passwordRepeated} onChange={this.handleChange} required />
          </label>
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
