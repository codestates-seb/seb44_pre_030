import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageEditContent from '../components/mypageditcontent/MypageEditContent';
import styled from 'styled-components';


const EditMyPage = () => {
  return (    
    <div>
    <MypageHeader></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageEditContent></MypageEditContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default EditMyPage;
