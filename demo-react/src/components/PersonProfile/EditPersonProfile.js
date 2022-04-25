import React, { Component } from 'react'
import Header from '../Layout/Header';
import Sidebar from '../Pages/Sidebar';
import userActions from '../../actions/userActions';
import axios from "axios";

class EditPersonProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      accountType: null,
      userName: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      alert: null,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {


    const user = {
      "operation": "read",
      "tableName": "Users",
      "payload": {
        "Key": {
          "userName": this.props.match.params.username
        }
      }
    };

    userActions.getUser(user).then((response) => {
      this.setState({
        userName: response.data.Item.userName,
        firstName: response.data.Item.firstName,
        lastName: response.data.Item.lastName,
        email: response.data.Item.email,
        password: response.data.Item.password,
        alert: false
      })
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateUserProfile = {
      accountType: this.state.accountType,
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      abn: this.state.abn,
      password: this.state.password,
    };
    userActions.updateUser(updateUserProfile, this.props.history, this.state.userName);
    this.setState({ alert: true });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <Sidebar username={this.state.userName}
            accountType={this.state.accountType} />
          <div className="container">
            {
              this.state.alert
              && (<div class="alert alert-success" role="alert">
                Successfully update the profile
              </div>)

            }
            <h2 className="display-4 text-center">Person Profile Page</h2>
            <form onSubmit={this.onSubmit}>
              <dl>
                <div className="row">
                  <div className="col">
                    <h4><span className="badge badge-info">User Name ：</span>{this.state.userName} </h4>
                  </div>
                  <div className="col">
                  </div>
                </div>

                <dt>Basic Information</dt>
                <div className="row">
                  <div className="col">
                    <dd>First Name</dd>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg "
                        name="firstName"
                        placeholder={this.state.firstName}
                        value={this.state.firstName}
                        onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="col">
                    <dd>Last Name</dd>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg "
                        name="lastName"
                        placeholder={this.state.lastName}
                        value={this.state.lastName}
                        onChange={this.onChange} />
                    </div>
                  </div>
                </div>

                <div className="row">


                  <div className="col">
                    <dd>Email address</dd>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg "
                        name="email"
                        placeholder={this.state.email}
                        value={this.state.email}
                        onChange={this.onChange} />
                    </div>
                  </div>
                </div>
                <dt>Change Password</dt>

                <div className="row">
                  <div className="col">
                    <dd>New Password</dd>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg "
                        name="password"
                        placeholder="New Password"
                        value={this.state.password}
                        onChange={this.onChange} />
                    </div>
                  </div>
                </div>
              </dl>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div >
    )
  }
} export default EditPersonProfile;
