import React from 'react';
import MypageHeader from '../components/mypageheader/MypageHeader';
import MypageSidebar from '../components/mypagesidebar/MypageSidebar';

const MyPageSummary = ({profile, location, title}) => {
  return (
    <div>
   <MypageHeader profile={profile} location={location} title={title}></MypageHeader>
   <MypageSidebar></MypageSidebar>
   </div>
  );
};


export default MyPageSummary;
