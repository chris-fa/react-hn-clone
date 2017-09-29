import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import * as Api from '../server/Api';
import Entry from './components/Entry';
import NewsPage from './NewsPage';

Enzyme.configure({ adapter: new Adapter() });

describe('NewsPage', () => {
  it('should have 2 <Entry /> components', () => {
    const news = [
      {
        id: 1,
        title: 'Nacker Hews becomes the number one portal on the internet',
        url: 'http://bar.com',
        upvotes: 69,
        comments: [],
      },
      {
        id: 1,
        title: 'Nacker Hews is now live',
        url: 'http://bar.com',
        upvotes: 42,
        comments: [],
      },
    ];

    sinon.stub(NewsPage.prototype, 'loadNews').callsFake(function fakeFunction() {
      this.setState({ news })
    });

    const wrapper = shallow(<NewsPage />);

    expect(NewsPage.prototype.loadNews.calledOnce).to.equal(true);
    expect(wrapper.state('news')).to.equal(news);
    expect(wrapper.find(Entry)).to.have.length(2);
  });
});
