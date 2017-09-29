import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Comment from './Comment';

describe('Comment', () => {
  it('should render the message', () => {
    const props = {
      message: 'This is the best new ever',
    };

    const wrapper = shallow(<Comment { ...props } />);

    expect(wrapper.find('div').text()).to.have.string(props.message);
  });
});
