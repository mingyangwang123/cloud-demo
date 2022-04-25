import React, { Component } from 'react'
import { FaFile } from 'react-icons/fa';
import Sidebar from './Pages/Sidebar';
import Header from './Layout/Header';
import userActions from '../actions/userActions';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            accountType: null
        };

    }
    componentDidMount() {
        this.setState({ username: this.props.match.params.username })

    }
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <Sidebar username={this.state.username}
                        accountType={this.state.accountType} />
                    <div className="container">
                        <h1 className="display-4 text-center">Welcome to BookSales</h1>

                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;