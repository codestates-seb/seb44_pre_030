import styled from 'styled-components';
import { BiWorld } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <SidebarContainer>
          <SidebarBlock>
          <HomeButton>Home</HomeButton>
          <PublicDviv>PUBLIC</PublicDviv>
         <QuesetionsButton><BiWorld className="icon" size={21} />Questions</QuesetionsButton>
        <SidebarButton><Block/>Tags</SidebarButton>
        <SidebarButton><Block/><CompaniesLink href='https://stackoverflow.com/jobs/companies'>Companies</CompaniesLink></SidebarButton> 
      </SidebarBlock>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 180px;
  height: 700px;
  padding-top: 10px;
  padding-left: 75px;
  border-right: 1px solid #d6d9dc;
  font-size: 12px;
`;

const SidebarBlock = styled.div`
  width: 159px;
  color: rgb(93, 92, 92);
  margin-top: 41px;
  display: flex;
  flex-direction: column;
`
const QuesetionsButton = styled.button`
  background-color: white;
  width: 180px;
  height: 40px;
  text-align: left;
  color: rgb(77, 77, 77);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  display: flex;
  align-items:center;
  cursor: pointer;
  &:hover{
    color : black;
  &:active{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
  }
  }
`
const SidebarButton = styled.button`
  display: flex;
  background-color: white;
  width: 180px;
  height: 40px;
  text-align: left;
  color: rgb(74, 74, 74);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  margin-right: 20px;
  cursor: pointer;
  align-items:center;
  &:hover{
    color : black;
  &:active{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
  }
  }
`

const HomeButton = styled.button`
  background-color: white;
  width: 180px;
  height: 50px;
  text-align: left;
  color: rgb(88, 88, 88);
  border :0;
  outline: 0;
  box-shadow: none;
  font-size: 13px;
  display: flex;
  align-items:center;
  cursor: pointer;
  &:hover{
    color : black;
  &:active{
    background-color: #f3f3f3;
    border-right: 3px solid orange;
  }
  }
`
const Block =styled.div`
  width: 20px;
  height: 10px;
  background-color: none;
`

const PublicDviv =styled.div`
  margin-left: 6px;
`

const CompaniesLink = styled.a`
    &:link { color: #5e5e5e; text-decoration: none;}
    &:visited { color: #555555; text-decoration: none;}
    &:hover { color: #000000; text-decoration: none;}
`

export default Sidebar;
