import React from 'react';
import { CommentWrite } from './AnsComment';
import axios from 'axios';

const CommentUpdate = ({
  updateId,
  updateCommentContent,
  setUpdateCommentOn,
  setUpdataCommentContent,
  answerId,
  qsId,
}) => {
  const handleUpdateContent = e => {
    setUpdataCommentContent(e.target.value);
  };
  const handleUpdateContentClick = updateId => {
    axios
      .patch(`/comments/${updateId}`, {
        content: updateCommentContent,
      })
      .then(res => {
        console.log(res);
        setUpdateCommentOn(false);
      })
      .catch(error => console.log(error));
    window.location.reload();
  };
  return (
    <CommentWrite>
      <input
        type="text"
        placeholder={updateCommentContent}
        value={updateCommentContent}
        onChange={handleUpdateContent}
      />
      <button onClick={() => handleUpdateContentClick}></button>
    </CommentWrite>
  );
};

export default CommentUpdate;
