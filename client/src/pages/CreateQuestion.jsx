import React from 'react';
import { styled } from 'styled-components';
import WriteQestion from '../components/question/WriteQestion';
import colorpalette from '../styles/colorpalette';

const CreateQuestion = ({isId}) => {
  return (
    <CreateQuestionPage>
      <WriteQestion isId={isId}/>
    </CreateQuestionPage>
  );
};
const CreateQuestionPage = styled.div`
  background-color: ${colorpalette.questionPageBgColor};
  width:100%;
`
export default CreateQuestion;
