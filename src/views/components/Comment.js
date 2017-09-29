import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ message }) => (
  <div>{ message }</div>
);

Comment.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Comment;
