import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/question/ViewQuestionDetail';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';

const QuestionDetail = ({ isLogin, isId }) => {
  let params = useParams();
  return (
    <QuestionDetailPageContainer>
      <ViewQuestionDetail isLogin={isLogin} qsId={params.id} />
      <Answer qsId={params.id} isId={isId} />
      <WriteAnswer qsId={params.id} isId={isId} />
    </QuestionDetailPageContainer>
  );
};
const QuestionDetailPageContainer = styled.div`
  padding: 15px;
  padding-right: 0;
  width: 1091px;
`;
export default QuestionDetail;
