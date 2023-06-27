import React from 'react';
import { styled } from 'styled-components';
import {useNavigate } from 'react-router-dom';
import colorpalette from '../../styles/colorpalette';


const AskQuestionBtn = ({isLogin}) => {
  const navigate = useNavigate();

  const handleQuestionAsk = () => {

    if(isLogin){
      navigate('/question/ask');
    }
    else{
      alert('로그인 후 질문을 등록할 수 있습니다.');
      navigate('/login');
    }
  }

  return <AskQuestionBtnContainer onClick={handleQuestionAsk}>Ask Question</AskQuestionBtnContainer>;
};

const AskQuestionBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: ${colorpalette.headerFontSize};
  border-radius: ${colorpalette.headerBorderRadius};
  cursor: pointer;
  background-color: ${colorpalette.questionRegistrationBtnColor};
  color: ${colorpalette.signatureWhite};
  width: 5.9rem;
  height: 2.5rem;
 

  &:hover {
    background-color: ${colorpalette.questionRegistrationBtnHoverColor};
  }

  &:active {
    background-color: ${colorpalette.questionRegistrationBtnActiveColor};
  }
`;

export default AskQuestionBtn;
