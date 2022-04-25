import React, { Component } from "react";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import classnames from "classnames";
import Header from '../Layout/Header'
import userActions from "../../actions/userActions";


class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        usernameError: "",
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate = () => {
    let usernameError = "";
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (this.state.username === "") {
      usernameError = "Please enter username"
    }
    if (this.state.firstName === "") {
      firstNameError = "Please enter first name"
    }
    if (this.state.lastName === "") {
      lastNameError = "Please enter last name"
    }
    if (this.state.email === "" || !this.state.email.includes("@")) {
      emailError = "email is not valid"
    }

    if (this.state.password === "" || this.state.password.length < 6) {
      passwordError = "Password must be at least 6 characters"
    }
    if (this.state.confirmPassword === "" || this.state.confirmPassword !== this.state.password) {
      confirmPasswordError = "Password must macth"
    }


    if (usernameError || firstNameError || lastNameError || emailError
      || passwordError || confirmPasswordError) {
      this.setState({
        usernameError, firstNameError, lastNameError,
        emailError, passwordError, confirmPasswordError
      });

      return false;
    }
    return true;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      const newUser = {
        "operation": "create",
        "tableName": "Users",
        "payload": {
          "Item": {
            "userName": this.state.username,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "confirmPassword": this.state.confirmPassword,
            "password": this.state.password,
            "email": this.state.email,
          }
        }
      };
      userActions.register(newUser, this.props.history);
    }


  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-5 m-auto">
                <h1 className="display-10 text-center">Sign Up</h1>
                <p className="lead text-center">Create your Account</p>
                <form onSubmit={this.onSubmit}>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="User name"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.usernameError}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.firstNameError}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.lastNameError}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.emailError}</div>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.passwordError}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onChange}
                    />
                    <div style={{ color: "red" }}>{this.state.confirmPasswordError}</div>
                  </div>
                  <input type="submit" className="btn btn-info bg-dark btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
)(Register);
