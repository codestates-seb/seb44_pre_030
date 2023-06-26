import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageProfile from '../components/mypageprofile/MypageProfile';

const MyPage = ({isLogin, profile}) => {
  return (
    <>{isLogin ? 
  <div>
   <MypageHeader profile={profile}></MypageHeader>
   <MypageProfile ></MypageProfile>
   </div>
:(console.log("로그인이후 사용가능"))}
</>
  );
};



export default MyPage;
