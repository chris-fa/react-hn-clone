import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ title, url, upvotes, comments }) => (
  <div className="content">
    <p>
      <a href={ url }><strong>{ title }</strong></a> <small>({ url })</small>
      <br />
      { upvotes } upvotes - <strong>{ comments.length } comments</strong>
    </p>
  </div>
);

Entry.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
}

export default Entry;
