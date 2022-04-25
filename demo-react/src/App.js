import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import EditPersonProfile from "./components/PersonProfile/EditPersonProfile";
import Sidebar from "./components/Pages/Sidebar";

import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";

import ImageUploader from "./components/addBook/ImageUploader";


const jwtToken = localStorage.jwtToken;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            {
              //Public Routes
            }

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {
              //Private Routes
            }
            <Route exact path="/dashboard/:username" component={Dashboard} />
            <Route exact path="/imageUploader/:username" component={ImageUploader} />
            <Route exact path="/editPersonProfile/:username" component={EditPersonProfile} />
            <Route exact path="/sidebar" component={Sidebar} />



          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;