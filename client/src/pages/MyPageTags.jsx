import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageTagsContent from '../components/mypagetagscontent/MypageTagsContent';
import styled from 'styled-components';


const MyPageTags = () => {
  return(
    <div>
    <MypageHeader></MypageHeader>
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
