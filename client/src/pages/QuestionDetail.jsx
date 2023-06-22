import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import ViewQuestionDetail from '../components/question/ViewQuestionDetail';
import WriteAnswer from '../components/answer/WriteAnswer';
import Answer from '../components/answer/Answer';

const QuestionDetail = () => {
  const [questionDetail,setQuestionDetail] = useState([]);
  useEffect(()=>{
    axios.get(`/question/`)
    .then(res => {
        console.log('detail',res.data.data);
        setQuestionDetail(res.data.data);
      })
      .catch(error => console.log(error));
  },[])
  return (
    <QuestionDetailPageContainer>
      {/* <ViewQuestionDetail />
      <Answer />
      <WriteAnswer /> */}
    </QuestionDetailPageContainer>
  );
};
const QuestionDetailPageContainer = styled.div`
  padding: 15px;
  padding-right: 0;
  width: 1091px;
`;
export default QuestionDetail;
