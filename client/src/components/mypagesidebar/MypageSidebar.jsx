import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MypageSidebar = () => {
    return (
        <Container>
            <Link to="/mypage/summary/:id">
            <SidebarBtn><TextBox>Summary</TextBox></SidebarBtn>
            </Link>
            <Link to="/mypage/answers/:id">
            <SidebarBtn><TextBox>Answers</TextBox></SidebarBtn>
            </Link>
            <Link to="/mypage/questions/:id">
            <SidebarBtn><TextBox>Questions</TextBox></SidebarBtn>
            </Link>
            <Link to="/mypage/tags/:id">
            <SidebarBtn><TextBox>Tags</TextBox></SidebarBtn>
            </Link>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 400px;
    margin-left: 20px;
`

const SidebarBtn = styled.button`
    width: 130px;
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
        background-color: #eeeeee;
    }
`
const TextBox = styled.div`
    margin-left: 15px;
    background-color: none;
    text-align: left;
`

export default MypageSidebar;