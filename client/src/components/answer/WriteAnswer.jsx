import React from 'react';
import { styled } from 'styled-components';

const WriteAnswer = () => {
  return (
    <div>
      <AnswerContainerTitle>
        <h2>Your Answer</h2>
      </AnswerContainerTitle>
      <AnswerContainerInput>
        <textarea placeholder="" />
      </AnswerContainerInput>
    </div>
  );
};

const AnswerContainerTitle = styled.div``;
const AnswerContainerInput = styled.div``;

export default WriteAnswer;
