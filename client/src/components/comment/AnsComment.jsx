import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { displayAt } from '../../utils/daycalcFormatter';
import { styled } from 'styled-components';

const AnsComment = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [editCommentOn, setEditCommentOn] = useState(false);
  const [newComment, setNewComment] = useState('');
  const commentUser_id = localStorage.getItem('commentUser_id');

  const handleCommentContent = e => {
    setNewComment(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/comment`)
      .then(res => {
        const comments = res.data;
        if (comments) {
          setCommentsList(comments);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CommentView>
        {commentsList.map((comment, idx) => {
          return (
            <div className="comment-list" key={idx}>
              <span>{comment.comment_content}</span>
              <span className="comment-user">-{comment.commentUserName}</span>
              <span>{displayAt(new Date(comment.commented_At))}</span>
              {Number(commentUser_id) !== comment.user_id ? (
                <>
                  <button>Edit</button>
                  <button>Delete</button>
                </>
              ) : null}
            </div>
          );
        })}
      </CommentView>
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
          <button>submit</button>
        </CommentWrite>
      ) : null}
    </>
  );
};

const CommentView = styled.div``;
const CommentOpenBtn = styled.div``;

export default AnsComment;
