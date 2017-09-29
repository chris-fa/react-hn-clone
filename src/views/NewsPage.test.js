import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as Api from '../server/Api';

import NewsPage from './NewsPage';
import Entry from './components/Entry';
import CommentPanel from './components/CommentPanel';

describe('NewsPage', () => {
  const onCommentLinkClick = sinon.spy();

  const news = [
    {
      id: 1,
      title: 'Nacker Hews becomes the number one portal on the internet',
      url: 'http://bar.com',
      upvotes: 69,
      comments: [],
      onCommentLinkClick,
    },
    {
      id: 1,
      title: 'Nacker Hews is now live',
      url: 'http://bar.com',
      upvotes: 42,
      comments: [],
      onCommentLinkClick,
    },
  ];

  sinon.stub(NewsPage.prototype, 'loadNews').callsFake(function fakeFunction() {
    this.setState({ news })
  });

  const wrapper = shallow(<NewsPage />);

  it('should have 2 <Entry /> components', () => {
    expect(NewsPage.prototype.loadNews.calledOnce).to.equal(true);
    expect(wrapper.state('news')).to.equal(news);
    expect(wrapper.find(Entry)).to.have.length(2);
  });

  it('should not show the comment panel', () => {
      expect(wrapper.find(CommentPanel)).to.have.length(0);
  });

  describe('when displaying the comments', () => {
    it('should display the comment box when clicking on a comment link', () => {
      wrapper.instance().onCommentLinkClick(1);

      wrapper.update();

      expect(wrapper.state().selectedEntry).to.equal(news.find(n => n.id === 1));
      expect(wrapper.find(CommentPanel)).to.have.length(1);
    });
  });
});
