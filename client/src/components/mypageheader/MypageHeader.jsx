import styled from 'styled-components';
import ProfileSvg from '../../assets/mypage/profileimg.svg'
import { FaPen } from 'react-icons/fa';
import { FaForumbee } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MypageHeader = () => {
    return (
        <AllContainer>
           <Container>
            <ProfileNameBox>
            <ProfileImg src={ProfileSvg}/>
                <ProfileName>username</ProfileName>
            </ProfileNameBox>
            <BtnBox>
            <Link to="/mypage/edit/:id">
            <EditProfileBtn><FaPen size={15} color='gray'/>Edit profile</EditProfileBtn>
            </Link>
            <NetworkBtn><FaForumbee size={15} color='skyblue'/>Network profile</NetworkBtn>
            </BtnBox>
           </Container>
           <NavBox>
           <Link to="/mypage/:id">
            <NavBtn>Profile</NavBtn>
            </Link>
            <Link to="/mypage/answers/:id">
            <NavBtn>Activity</NavBtn>
            </Link>
            <NavBtn>Saves</NavBtn>
            <Link to="/mypage/edit/:id">
            <NavBtn>Settings</NavBtn>
            </Link>
           </NavBox>
           </AllContainer>
    );
};

const AllContainer = styled.div`
    width: 100%vw;
    height: 215px;
`
const NavBox = styled.div`
    display: flex;
    width: 1600px;
    height: 40px;
    margin-left: 20px;
`

const NavBtn = styled.button`
    width: 70px;
    height: 30px;
    border-radius: 15px;
    margin-right: 5px;
    border :0;
    outline: 0;
    font-size: 14px;
    color: #7a7a7a;
    background-color: white;
    cursor: pointer;
    &:hover{
        background-color: #d3d1d1;
    }
    &:active{
        background-color: #e7841b;
        color: white;
    }
`

const Container = styled.div`
    display: flex;
    height: 170px;
    background-color: #ffffff;
`

const ProfileImg = styled.img`
    width: 130px;
    height: 130px;
 `
const ProfileNameBox = styled.div`
    display: flex;
    align-items: center;
     height: 170px;
     width: 55vw;
     background-color: #ffffff;
     margin-left: 20px;
 `
const ProfileName = styled.div`
    margin-left: 15px;
    font-size: 40px;
`

const BtnBox = styled.div`
    display: flex;
    width: 280px;
    height: 100px;
    margin-top: 20px;
    margin-right: 20px;
`
 const EditProfileBtn = styled.button`
     width: 105px;
     height: 35px;
     background-color: white;
     border: solid 1px #a5a5a5;
     color: #818181;
     cursor: pointer;
     &:hover{
        background-color: #eeeeee;
     }
     &:active{
    box-shadow: 0px 0px 1px 3px #dcdcdc;
    } 
 `
 const NetworkBtn = styled.button`
    width: 150px;
    height: 35px;
    margin-left: 10px;
    background-color: white;
    border: solid 1px #a5a5a5;
    color: #818181;
    cursor: pointer;
    &:hover{
        background-color: #e8e8e8;
     }
    &:active{
    box-shadow: 0px 0px 1px 3px #dcdcdc;
    } 
`


export default MypageHeader;