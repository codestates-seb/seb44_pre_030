import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import styled from 'styled-components';
import MypageAnswersContent from '../components/mypageanswerscontent/MypageAnswersContent';




const MyPageAnswers = () => {
  return(
    <div>
    <MypageHeader></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageAnswersContent></MypageAnswersContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default MyPageAnswers;
