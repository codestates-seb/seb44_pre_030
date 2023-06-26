import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageEditContent from '../components/mypageditcontent/MypageEditContent';
import styled from 'styled-components';


const EditMyPage = ({userInfo, profile}) => {
  return (    
    <div>
    <MypageHeader profile={profile}></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageEditContent userInfo={userInfo}></MypageEditContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default EditMyPage;
