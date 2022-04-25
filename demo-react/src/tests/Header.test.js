import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16.3';
import * as AiIcons from "react-icons/ai";
import Header from "../components/Layout/Header.js";

configure({ adapter: new Adapter() });



describe('<Header/>', function () {
    it('should render logo', function () {
        const warpper = shallow(
            <a className="navbar-brand" href="/">
                Bookeroo
            </a>
        )
        expect(warpper.contains(<a className="navbar-brand" href="/">
            Bookeroo
        </a>)).to.equal(true);
    });

    it('should render register', function () {
        const warpper = shallow(
            <li className="nav-item">
                <a className="nav-link " href="/register">
                    Sign Up
                </a>
            </li>
        )
        expect(warpper.contains(<li className="nav-item">
            <a className="nav-link " href="/register">
                Sign Up
            </a>
        </li>)).to.equal(true);
    });

    it('should render login', function () {
        const warpper = shallow(
            <li className="nav-item">
                <a className="nav-link " href="/login">
                    Login
                </a>
            </li>
        )
        expect(warpper.contains(<li className="nav-item">
            <a className="nav-link " href="/login">
                Login
            </a>
        </li>)).to.equal(true);
    });

    // it('should ', function () {
    //     const loggedin = jest.fn(true)
    //     const warpper = shallow(<Header> </Header>)
    //
    // });
});