import React from 'react';
import ViewQuestionList from '../components/question/ViewQuestionList'


const QuestionList = ({inputText,enterState,setEnterState,isLogin}) => {
  return (
      <>
        <ViewQuestionList inputText={inputText} enterState={enterState} setEnterState={setEnterState} isLogin={isLogin}/>
      </>
    )
};

export default QuestionList;
