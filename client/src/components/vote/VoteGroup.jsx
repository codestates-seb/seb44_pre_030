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

const VoteGroup = ({ answerVoteCount, answerId }) => {
  const [selection, setSelection] = useState(false);
  const [count, setCount] = useState(answerVoteCount);

  const countUpHandler = async () => {
    await setCount(prevCount => prevCount + 1);
    await axios
      .patch(`${import.meta.env.VITE_API_ENDPOINT}/answers/${answerId}`, {
        vote: count + 1,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const countDownHandler = async () => {
    await setCount(prevCount => prevCount - 1);
    await axios
      .patch(`${import.meta.env.VITE_API_ENDPOINT}/answers/${answerId}`, {
        vote: count - 1,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <VoteIcon>
      <button className="vote-icon" onClick={countUpHandler}>
        <BsFillHandThumbsUpFill />
      </button>
      <span>{count}</span>
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
export default VoteGroup;
