import React,{useEffect, useRef,useState} from 'react';
import styled from 'styled-components';
import { BiWorld } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [homeFocus,setHomeFocus] = useState(false);
  const [questionFocus,setQuestionFocus] = useState(false);
  const [userFocus,setUserFocus] = useState(false);
  const [companiesFocus,setCompaniesFocus] = useState(false);
  const sidebarRef = useRef(null);

  const handleHomeFocus = () => {
    setHomeFocus(true);
    setQuestionFocus(false);
    setUserFocus(false);
    setCompaniesFocus(false);
  }
  const handleQuestionFocus = () => {
    setHomeFocus(false);
    setQuestionFocus(true);
    setUserFocus(false);
    setCompaniesFocus(false);
  }
  const handleUserFocus = () => {
    setHomeFocus(false);
    setQuestionFocus(false);
    setUserFocus(true);
    setCompaniesFocus(false);
  }
  const handleCompaniesFocus = () => {
    setHomeFocus(false);
    setQuestionFocus(false);
    setUserFocus(false);
    setCompaniesFocus(true);
  }
  useEffect(()=>{
    const handleClickOutside = (e) => {
      if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setHomeFocus(false);
        setQuestionFocus(false);
        setUserFocus(false);
        setCompaniesFocus(false);
      }
    };
    document.addEventListener('click',handleClickOutside);
    return document.removeEventListener('click',handleClickOutside)
  },[sidebarRef,homeFocus,questionFocus,userFocus,companiesFocus]);


  return (
    <SidebarContainer>
          <SidebarBlock ref={sidebarRef}>
            <Link to="/">
          <HomeButton onClick={handleHomeFocus} className={homeFocus?'focusHomeBtn':''}>Home</HomeButton>
          </Link>
          <div className='public'>PUBLIC</div>
         <QuesetionsButton onClick={handleQuestionFocus} className={questionFocus?'focusQuestionBtn':''}><BiWorld className="icon" size={21} />Questions</QuesetionsButton>
        <Link to="/mypage/:id">
        <SidebarButton onClick={handleUserFocus} className={userFocus?'focusUserBtn':''}><Block/>Users</SidebarButton>
        </Link>
        <SidebarButton onClick={handleCompaniesFocus} className={companiesFocus?'focusCompaniesBtn':''}><Block/><CompaniesLink href='https://stackoverflow.com/jobs/companies'>Companies</CompaniesLink></SidebarButton> 
      </SidebarBlock>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  margin-right: 1px;
  width: 288px;
  height: 100vh;
  padding-top: 10px;
  padding-left: 127px;
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
  & .focusHomeBtn,
  & .focusQuestionBtn,
  & .focusUserBtn,
  & .focusCompaniesBtn{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
    color:black;
    font-weight: 700;
  }
`
const QuesetionsButton = styled.button`
  background-color: white;
  width: 160px;
  height: 40px;
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
  
`
const SidebarButton = styled.button`
  display: flex;
  background-color: white;
  width: 160px;;
  height: 40px;
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

`

const HomeButton = styled.button`
  background-color: white;
  width: 160px;
  height: 50px;
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
