import React from 'react';
import { styled } from 'styled-components';
import colorpalette from '../../styles/colorpalette';

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
  transform: translateX(6%);

  &:hover {
    background-color: ${colorpalette.questionRegistrationBtnHoverColor};
  }

  &:active {
    background-color: ${colorpalette.questionRegistrationBtnActiveColor};
  }
`;
const AskQuestionBtn = () => {
  return <AskQuestionBtnContainer>Ask Question</AskQuestionBtnContainer>;
};

export default AskQuestionBtn;
