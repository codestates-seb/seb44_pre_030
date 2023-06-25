import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VoteGroup from '../vote/VoteGroup';
import AnsComment from '../comment/AnsComment';
import { displayAt } from '../../utils/daycalcFormatter';

const Answer = ({ qsId }) => {
  const User_id = localStorage.getItem('User_id');
  const [answerList, setAnswerList] = useState([]);
  const [answerFilter, setAnswerFilter] = useState('score');
  useEffect(() => {
    axios
      .get(`/api/questions/${qsId}`)
      .then(res => {
        const answers = res.data.answers;
        if (answers) {
          setAnswerList(answers);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [qsId]);

  const deleteAnswer = asId => {
    console.log(asId);
    axios
      .delete(`/api/answers/${asId}`)
      .then(res => {
        console.log(res);
        alert('답변 삭제 완료');
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const answerFilters = [
    {
      id: 1,
      name: 'Highest score (default)',
      value: 'score',
    },
    {
      id: 2,
      name: 'Trending (recent votes count more)',
      value: 'votes',
    },
    {
      id: 3,
      name: 'Date modified (newest first)',
      value: 'newest',
    },
    {
      id: 4,
      name: 'Date created (oldest first)',
      value: 'oldest',
    },
  ];

  const answerFilterHandler = e => {
    setAnswerFilter(e.target.value);
  };

  return (
    <Container>
      <AnswerTitle>
        <h2>{answerList.length} Answer</h2>
        <select onChange={answerFilterHandler}>
          {answerFilters.map(item => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </AnswerTitle>
      {answerList.map(answer => (
        <DetailContents key={answer.id}>
          <div>
            <VoteGroup answerId={answer.id} answerVoteCount={answer.vote} />
            <TextContents>
              <span>{answer.content}</span>
              <SideContents>
                {Number(answer.member.id) !== Number(User_id) ? (
                  <div className="sideMenu">
                    <button>
                      <Link to={`/answer/edit/${answer.id}`}>Edit</Link>
                    </button>
                    <button
                      onClick={() => {
                        deleteAnswer(answer.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                ) : (
                  <div className="sideMenu">
                    <button>Edit</button>
                    <button>delete</button>
                  </div>
                )}
                <div>
                  <div className="user-info">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg"
                      alt="profileAvatar"
                    />
                    <span>
                      <p>{answer.member.displayName}</p>
                      <p>asked {displayAt(new Date(answer.createdAt))}</p>
                    </span>
                  </div>
                </div>
              </SideContents>
              <AnsComment
                answerComment={answer.comments}
                asId={answer.id}
                qsId={qsId}
              />
            </TextContents>
          </div>
        </DetailContents>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 730px;
`;
const AnswerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 30px;
  max-width: 700px;
  div:nth-child(1) {
    display: flex;
  }
`;
export const AnswerVoteGroup = styled.div``;
const TextContents = styled.div`
  width: 100vw;
  padding: 0 20px;
  line-height: 150%;
`;
export const SideContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0px;
  button {
    background: none;
    border: none;
    color: #999;
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
  }
  .sideMenu button:hover {
    color: #666;
  }
  .user-info {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 10px 20px;
    max-width: 150px;
    background-color: #f7f7f7;
    color: #5c666e;
    border-radius: 3px;
    border: 1px solid #9da1a3;
  }
  .user-info > img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export default Answer;
