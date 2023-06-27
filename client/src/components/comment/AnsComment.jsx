import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { displayAt } from '../../utils/daycalcFormatter';
import { styled } from 'styled-components';
import CommentUpdate from './CommentUpdate';

const AnsComment = ({ answerComment, asId, qsId, isId }) => {
  const [editCommentOn, setEditCommentOn] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [updateCommentOn, setUpdateCommentOn] = useState(false);
  const [updateCommentContent, setUpdateCommentContent] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const commentUser_id = localStorage.getItem('commentUser_id');

  const commentPosting = () => {
    axios
      .post(`/api/comments`, {
        answerId: asId,
        content: newComment,
        memberId: isId,
      })
      .then(res => {
        console.log(res);
        alert('댓글 등록');
        window.location.reload();
      })
      .catch(error => console.log(error));
  };
  const handleCommentContent = e => {
    setNewComment(e.target.value);
  };

  const commentDelete = commentId => {
    axios
      .delete(`/api/comments/${commentId}`)
      .then(res => {
        console.log(res);
        alert('댓글 삭제 완료');
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log('answercom', answerComment);
  return (
    <>
      <CommentView>
        {answerComment.map((comment, idx) => {
          return (
            <div className="comment-list" key={idx}>
              <span>{comment.content}</span>
              <span className="comment-user">
                -{comment.memberDto.displayName}
              </span>
              <span>{displayAt(new Date(comment.createdAt))}</span>
              {Number(commentUser_id) !== comment.memberDto.id ? (
                <>
                  <button
                    onClick={() => {
                      setUpdateCommentOn(!updateCommentOn);
                      setUpdateCommentContent(comment.content);
                      setUpdateId(comment.id);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => commentDelete(comment.id)}>
                    Delete
                  </button>
                </>
              ) : null}
            </div>
          );
        })}
      </CommentView>
      {updateCommentOn ? (
        <CommentUpdate
          updateId={updateId}
          updateCommentContent={updateCommentContent}
          setUpdateCommentOn={setUpdateCommentOn}
          setUpdataCommentContent={setUpdateCommentContent}
          answerId={asId}
          qsId={qsId}
        />
      ) : null}
      <CommentOpenBtn>
        <button
          className="addComment"
          onClick={() => {
            setEditCommentOn(!editCommentOn);
          }}
        >
          Add a comment
        </button>
      </CommentOpenBtn>
      {editCommentOn ? (
        <CommentWrite>
          <input
            type="text"
            placeholder="댓글 내용을 입력하세요."
            value={newComment}
            onChange={handleCommentContent}
          />
          <button onClick={commentPosting}>submit</button>
        </CommentWrite>
      ) : null}
    </>
  );
};

const CommentView = styled.div`
  margin-top: 20px;
  .comment-list {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    font-size: 14px;
    flex-wrap: wrap;
  }
  .comment-list:nth-child(1) {
    border-top: 1px solid #ddd;
  }
  .comment-user {
    color: hsl(205, 47%, 42%);
    margin: 0px 10px;
  }
  button {
    border: none;
    background-color: white;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const CommentOpenBtn = styled.div`
  margin: 20px 0;
  color: #666;
  .addComment {
    border: none;
    background-color: white;
    cursor: pointer;
  }
  .addComment:hover {
    color: #507ca6;
  }
`;

export const CommentWrite = styled.div`
  display: flex;
  margin: 10px 0;
  background-color: #f7f7f7;
  border-radius: 3px;
  border: 1px solid #ddd;
  padding: 20px;

  input {
    width: 100%;
    border: 1px solid #dfdfdf;
    padding: 20px;
  }
  button {
    border: 1px solid #bfbfbf;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background-color: #f7f7f7;
  }
  button:active {
    background-color: #e2e2e2;
    color: #507ca6;
  }
`;

export default AnsComment;
