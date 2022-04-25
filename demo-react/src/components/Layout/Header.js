import React, { Component } from 'react'
class Header extends Component {


    loggedin = () => {

        return localStorage.getItem("jwtToken");
    }

    render() {
        if (this.loggedin()) {
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                        <div className="container">
                            <a className="navbar-brand" href="">
                                BookSales
                                {this.props.username}
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div className="collapse navbar-collapse" id="mobile-nav">

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        } else {

            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                BookSales
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div className="collapse navbar-collapse" id="mobile-nav">

                                <ul className="navbar-nav ml-auto">

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }


}
export default Header;
