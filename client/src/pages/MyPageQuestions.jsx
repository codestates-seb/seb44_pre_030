import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageQuestionsContent from '../components/mypagequestionscontent/MypageQuestionsContent';
import styled from 'styled-components';





const MyPageQuestions = () => {
  return(
    <div>
    <MypageHeader></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageQuestionsContent></MypageQuestionsContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default MyPageQuestions;
