import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ id, title, url, upvotes, comments, onCommentLinkClick }) => {
  function commentLinkClicked(e) {
    e.preventDefault();

    onCommentLinkClick(id);
  }

  return (
    <div className="content">
      <p>
        <a href={ url }><strong>{ title }</strong></a> <small>({ url })</small>
        <br />
        { upvotes } upvotes - &nbsp;
        { comments.length !== 0 ? (
          <a href="#" onClick={ commentLinkClicked }><strong>{ comments.length } comments</strong></a>
        ) : (
          <span>No comments</span>
        )}
      </p>
    </div>
  );
};

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  onCommentLinkClick: PropTypes.func.isRequired,
}

export default Entry;
