import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16.3';
import * as AiIcons from "react-icons/ai";
import Book from "../components/userInterface/Book.js";
import BookList from "../components/userInterface/BookList";

configure({ adapter: new Adapter() });

describe('<Book/>', function () {
    it('should render book', function () {
        const wrapper = shallow(<div className="container">
            <h1 className="display-4 text-center"></h1>
            < BookList />
        </div>)
        expect(wrapper.contains(<div className="container">
            <h1 className="display-4 text-center"></h1>
            < BookList />
        </div>)).to.equal(true);
    });
});