import React, { Component } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IconNames from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './Sidebar.css'
import userActions from '../../actions/userActions';


class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="nav_pane">

                <nav className={'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                        </li>

                        <li className='nav-list'>
                            <Link to={{
                                pathname: `/dashboard/${this.props.username}`
                            }} className='menu-list'>
                                <AiIcons.AiFillHome />
                                <a className="nav-text"> Home </a>
                            </Link>
                        </li>
                        <li className='nav-list'>
                            <Link to={{
                                pathname: `/editPersonProfile/${this.props.username}`,
                            }} className='menu-list'>
                                <IconNames.VscAccount />
                                <a className="nav-text"> Profile </a>
                            </Link>

                        </li>
                        <li className='nav-list'>
                            <Link to={{
                                pathname: `/imageUploader/${this.props.username}`,
                            }} className='menu-list'>
                                <FaIcons.FaAddressBook />
                                <a className="nav-text"> Add Book </a>
                            </Link>
                        </li>

                    </ul>
                </nav>

            </div>
        );

    }



} export default Sidebar
