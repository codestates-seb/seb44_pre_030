import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ViewQuestionDetail from '../components/question/ViewQuestionDetail';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const QuestionDetail = () => {

  const [questionDetail, setQuestionDetail] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`/api/question/${params.id}`)
      .then(res => {
        if (res.data) {
          setQuestionDetail(res.data);
          console.log('questionDetail', questionDetail);
        }
      })
      .catch(error => console.log(error));
  }, [params.id]);
  return (
    <QuestionDetailPageContainer>
      <ViewQuestionDetail question={questionDetail} />
      <Answer qsId={params.id} />
      <WriteAnswer qsId={params.id} />

    </QuestionDetailPageContainer>
  );
};
const QuestionDetailPageContainer = styled.div`
  padding: 15px;
  padding-right: 0;
  width: 1091px;
`;
export default QuestionDetail;
