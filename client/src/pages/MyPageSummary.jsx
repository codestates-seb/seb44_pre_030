import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';

const MyPageSummary = ({profile}) => {
  return (
    <div>
   <MypageHeader profile={profile}></MypageHeader>
   <MypageSidebar></MypageSidebar>
   </div>
  );
};


export default MyPageSummary;
