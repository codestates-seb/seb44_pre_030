import React, { useState } from 'react';
import {
  BsFillBookmarkCheckFill,
  BsBookmarkCheck,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { styled } from 'styled-components';
import axios from 'axios';

const QuestionVoteGroup = ({ voteCount, setVoteCount, QuestionId }) => {
  const [selection, setSelection] = useState(false);

  console.log(voteCount);
  const countUpHandler = async () => {
    await setVoteCount(prevCount => prevCount + 1);
    await axios
      .patch(`/api/questions/like/${QuestionId}/1`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const countDownHandler = async () => {
    await setVoteCount(prevCount => prevCount - 1);
    await axios
      .patch(`/api/questions/unlike/${QuestionId}/1`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <VoteIcon>
      <button className="vote-icon" onClick={countUpHandler}>
        <BsFillHandThumbsUpFill />
      </button>
      <span>{voteCount}</span>
      <button className="vote-icon" onClick={countDownHandler}>
        <BsFillHandThumbsDownFill />
      </button>
      <button
        className="selectIcon icon-size"
        onClick={() => {
          setSelection(!selection);
        }}
      >
        {selection ? <BsFillBookmarkCheckFill /> : <BsBookmarkCheck />}
      </button>
      <button className="icon-size">
        <AiOutlineClockCircle />
      </button>
    </VoteIcon>
  );
};

const VoteIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  min-width: 50px;
  > * {
    margin-bottom: 5px;
  }
  .icon-size {
    font-size: 20px;
  }
  > button {
    background: none;
    border: none;
    cursor: pointer;
    color: #6c6c6c;
  }
  .vote-icon {
    font-size: 30px;
  }
  .vote-icon:hover {
    color: #413e47;
  }
`;
export default QuestionVoteGroup;
