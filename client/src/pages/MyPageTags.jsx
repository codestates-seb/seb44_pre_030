import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageTagsContent from '../components/mypagetagscontent/MypageTagsContent';
import styled from 'styled-components';


const MyPageTags = ({profile, location, title}) => {
  return(
    <div>
    <MypageHeader profile={profile} location={location} title={title}></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageTagsContent></MypageTagsContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default MyPageTags;
