import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import styled from 'styled-components';
import MypageAnswersContent from '../components/mypageanswerscontent/MypageAnswersContent';




const MyPageAnswers = ({profile, location, title}) => {
  return(
    <div>
    <MypageHeader profile={profile} location={location} title={title}></MypageHeader>
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
