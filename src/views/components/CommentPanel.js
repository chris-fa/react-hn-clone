import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentPanel = ({ comments }) => {
  return (
    <div>
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
};

export default CommentPanel;
