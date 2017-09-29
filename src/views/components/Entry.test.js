import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Entry from './Entry';

describe('Entry', () => {

  const onCommentLinkClick = sinon.spy();

  const props = {
    id: 1,
    title: 'Nacker Hews becomes the number one portal on the internet',
    url: 'http://bar.com',
    upvotes: 69,
    comments: [
      { id: 1, message: "Yessss!" },
    ],
    onCommentLinkClick,
  };

  const wrapper = shallow(<Entry { ...props } />);

  it('renders the entry', () => {
    expect(wrapper.find('.content').find('p').find('a').first().text()).to.have.string(props.title);
    expect(wrapper.find('.content').find('p').text()).to.have.string(props.url);
    expect(wrapper.find('.content').find('p').text()).to.have.string(`${props.upvotes} upvotes`);
    expect(wrapper.find('.content').find('p').text()).to.have.string(`${props.comments.length} comments`);
  });

  describe('when clicking on the comments link', () => {
    it('should execute a callback', () => {
      wrapper.find('a').last().simulate('click', { preventDefault() {} });
      expect(onCommentLinkClick.calledWith(props.id)).to.be.true;
    });
  });

  describe('when having no comments whatsoever', () => {
    it('should not have an <a> on the comments', () => {
      const props = {
        id: 1,
        title: 'Nacker Hews becomes the number one portal on the internet',
        url: 'http://bar.com',
        upvotes: 69,
        comments: [],
        onCommentLinkClick,
      };

      const wrapperWithNoComments = shallow(<Entry { ...props } />);

      expect(wrapperWithNoComments.find('a')).to.have.length(1);
    });
  });
});
