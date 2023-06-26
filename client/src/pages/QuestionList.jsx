import React from 'react';
import ViewQuestionList from '../components/question/ViewQuestionList'


const QuestionList = ({inputText,enterState,setEnterState}) => {
  return (
      <>
        <ViewQuestionList inputText={inputText} enterState={enterState} setEnterState={setEnterState}/>
      </>
    )
};

export default QuestionList;
