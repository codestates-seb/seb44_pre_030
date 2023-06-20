import React from 'react';
import styled from 'styled-components';
import { BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarContainer>
          <SidebarBlock>
            <Link to="/">
          <HomeButton>Home</HomeButton>
          </Link>
          <div className='public'>PUBLIC</div>
         <QuesetionsButton><BiWorld className="icon" size={21} />Questions</QuesetionsButton>
        <SidebarButton><Block/>Tags</SidebarButton>
        <Link to="/mypage/:id">
        <SidebarButton><Block/>Users</SidebarButton>
        </Link>
        <SidebarButton><Block/><CompaniesLink href='https://stackoverflow.com/jobs/companies'>Companies</CompaniesLink></SidebarButton> 
      </SidebarBlock>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  margin-right: 1px;
  width: 168px;
  height: 100vh;
  padding-top: 24px;
  padding-left: 5px;
  border-right: 1px solid #d6d9dc;
  font-size: 14px;
`;

const SidebarBlock = styled.div`
  width: 165px;
  color: rgb(93, 92, 92);
  display: flex;
  flex-direction: column;
  & .public{
    padding-left: 5px;
  }
  & button{
    width:162px;
    height: 40px;
    cursor: pointer;
    padding-left: 5px;
  }
`
const QuesetionsButton = styled.button`
  background-color: white;
  text-align: left;
  color: rgb(77, 77, 77);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  display: flex;
  align-items:center;
  margin-top: 5px;
  & .icon{
    margin-right: 5px;
  }
  &:hover{
    color : black;
  }
  &:focus{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
    color:black;
    font-weight: 700;
  }
  
`
const SidebarButton = styled.button`
  display: flex;
  background-color: white;
  text-align: left;
  color: rgb(74, 74, 74);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  margin-right: 20px;
  align-items:center;
  &:hover{
    color : black;
  }
  &:focus{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
    color:black;
    font-weight: 700;
  }
  
`

const HomeButton = styled.button`
  background-color: white;
  text-align: left;
  color: rgb(88, 88, 88);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  display: flex;
  align-items:center;
  margin-bottom: 10px;
  &:hover{
    color : black;
  }
  &:focus{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
    color:black;
    font-weight: 700;
  }
  
`
const Block =styled.div`
  width: 20px;
  height: 10px;
  background-color: none;
`

const CompaniesLink = styled.a`
    &:link { color: #5e5e5e; text-decoration: none;}
    &:visited { color: #555555; text-decoration: none;}
    &:hover { color: #000000; text-decoration: none;}
`

export default Sidebar;
