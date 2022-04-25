import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16.3';
import * as AiIcons from "react-icons/ai";
import Sidebar from "../components/Pages/Sidebar";

configure({ adapter: new Adapter() });



describe('<Sidebar/>', function () {
    it('renders button of Home', function () {
        const wrapper = shallow(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Home </a>
            </li>
        );
        expect(wrapper.contains(<li className='nav-list'>
            <AiIcons.AiFillHome />
            <a className="nav-text"> Home </a>
        </li>)).to.equal(true);
    })
    it('renders button Profile', function(){
        const wrapper = shallow(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Profile </a>
            </li>
        );
        expect(wrapper.contains(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Profile </a>
            </li>
        )).to.equal(true);
    })
    it('renders button Book', function(){
        const wrapper = shallow(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Book </a>
            </li>
        );
        expect(wrapper.contains(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Book </a>
            </li>
        )).to.equal(true);
    })
    it('render button customer', function(){
        const wrapper = shallow(
            <li className='nav-list'>
                <AiIcons.AiFillHome />
                <a className="nav-text"> Book </a>
            </li>
        );
    })
});