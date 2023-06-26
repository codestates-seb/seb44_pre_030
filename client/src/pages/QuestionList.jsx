import React from 'react';
import ViewQuestionList from '../components/question/ViewQuestionList'


const QuestionList = ({inputText}) => {
  return (
      <>
        <ViewQuestionList inputText={inputText}/>
      </>
    )
};

export default QuestionList;
