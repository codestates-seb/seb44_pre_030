import React from 'react';
import { CommentWrite } from './AnsComment';
import axios from 'axios';

const CommentUpdate = ({
  updateId,
  updateCommentContent,
  setUpdateCommentOn,
  setUpdataCommentContent,
}) => {
  const handleUpdateContent = e => {
    setUpdataCommentContent(e.target.value);
  };
  const handleUpdateContentClick = updateId => {
    axios
      .patch(`${import.meta.env.VITE_API_ENDPOINT}/comments/${updateId}`, {
        content: updateCommentContent,
      })
      .then(res => {
        console.log(res);
        setUpdateCommentOn(false);
        window.location.reload();
      })
      .catch(error => console.log(error));
  };
  return (
    <CommentWrite>
      <input
        type="text"
        placeholder={updateCommentContent}
        value={updateCommentContent}
        onChange={handleUpdateContent}
      />
      <button onClick={() => handleUpdateContentClick(updateId)}>Edit</button>
    </CommentWrite>
  );
};

export default CommentUpdate;
