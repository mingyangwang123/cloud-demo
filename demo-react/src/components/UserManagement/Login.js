import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Header from '../Layout/Header'
import userActions from "../../actions/userActions";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      accountType: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.history.push("/login");
  }

  componentWillReceiveProps(nextProps) {

    if (this.state.accountType === "customer") {
      this.props.history.push({
        pathname: `/customer/${this.state.username}`,
      }

      );
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      "operation": "read",
      "tableName": "Users",
      "payload": {
        "Key": {
          "userName": this.state.username
        }
      }
    };
    userActions.login(LoginRequest, this.state.username, this.props.history);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Header />
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.username
                      })}
                      placeholder="Username"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  // security: state.security,
  errors: state.errors
});

export default connect(
  mapStateToProps,
)(Login);
