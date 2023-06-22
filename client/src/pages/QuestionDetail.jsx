import React from 'react';
import { styled } from 'styled-components';
import ViewQuestionDetail from '../components/question/ViewQuestionDetail';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const QuestionDetail = () => {
  const qsId = useParams();
  axios
    .get(`/question/${qsId.id}`)
    .then(res => {
      const answers = res.data.answers;
      console.log(answers);
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <QuestionDetailPageContainer>
      {/* <ViewQuestionDetail /> */}
      <Answer qsId={qsId} />
      {/* <WriteAnswer qsId={qsId} /> */}
    </QuestionDetailPageContainer>
  );
};
const QuestionDetailPageContainer = styled.div`
  padding: 15px;
  padding-right: 0;
  width: 1091px;
`;
export default QuestionDetail;
