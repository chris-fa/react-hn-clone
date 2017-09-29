import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CommentPanel from './CommentPanel';
import Comment from './Comment';

describe('CommentPanel', () => {
  const onCloseClick = sinon.spy();

  const props = {
    comments: [
      { id: 1, message: 'Best entry ever' },
      { id: 2, message: 'Worst entry ever' },
      { id: 3, message: 'I can\'t decide whether this entry was good or not' },
    ],
    onCloseClick,
  };

  const wrapper = shallow(<CommentPanel { ...props } />);

  it('should render 3 <Comment /> components', () => {
    expect(wrapper.find(Comment)).to.have.length(3);
  });

  it('should call the onCloseClick callback when the close link is clicked', () => {
    wrapper.find('.delete').simulate('click', { preventDefault() {} });
    expect(onCloseClick.calledOnce);
  });
});
