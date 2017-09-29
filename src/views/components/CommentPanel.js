import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentPanel = ({ comments, onCloseClick }) => {
  function closeClicked(e) {
    e.preventDefault();

    onCloseClick();
  }

  return (
    <div>
      <div className="level">
        <div className="level-left">
          Comments
        </div>

        <div className="level-right">
          <a className="delete" href="#" onClick={ closeClicked }></a>
        </div>
      </div>
      { comments.map(comment =>
        <div className="box" key={ comment.id } >
          <Comment { ...comment } />
        </div>
      )}
    </div>
  );
};

CommentPanel.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default CommentPanel;
