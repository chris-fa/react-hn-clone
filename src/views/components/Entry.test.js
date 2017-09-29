import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Entry from './Entry';

Enzyme.configure({ adapter: new Adapter() });

describe('Entry', () => {
  it('renders the entry', () => {
    const props = {
      title: 'Nacker Hews becomes the number one portal on the internet',
      url: 'http://bar.com',
      upvotes: 69,
      comments: [],
    };

    const wrapper = shallow(<Entry { ...props } />);

    expect(wrapper.find('.content').find('p').find('a').text()).to.have.string(props.title);
    expect(wrapper.find('.content').find('p').text()).to.have.string(props.url);
    expect(wrapper.find('.content').find('p').text()).to.have.string(`${props.upvotes} upvotes`);
    expect(wrapper.find('.content').find('p').text()).to.have.string(`${props.comments.length} comments`);
  });
});
