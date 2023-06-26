import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';
import MypageEditContent from '../components/mypageditcontent/MypageEditContent';
import styled from 'styled-components';


const EditMyPage = ({userInfo, profile, setUserInfo, title, location, setIsLogin, isLogin}) => {
  return (    
    <div>
    <MypageHeader profile={profile} title={title} location={location}></MypageHeader>
    <FlexBox>
    <MypageSidebar></MypageSidebar>
    <MypageEditContent isLogin={isLogin} userInfo={userInfo} setUserInfo={setUserInfo} title={title} location={location} setIsLogin={setIsLogin}></MypageEditContent>
    </FlexBox>
    </div>
  );
};

const FlexBox = styled.div`
  display: flex;
`

export default EditMyPage;
