import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../../assets/footer/logo3.svg';
import googlelogo from '../../assets/oauth/googlelogo.svg';
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';


const LoginBox = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {replace} = useNavigate();
  
  const checkUser = () => { 
    if (email === "" || password === ""){
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: 'user@strapi.io',
      password: 'strapiPassword',
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      replace("/");
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  }

    return (
      <AllContainer>
        <LogImgbox>
          <Link to="/">
        <LogoImg src={logo}/>
        </Link>
        </LogImgbox>
        <OauthBtn><img src={googlelogo}></img>Log in with Google</OauthBtn>
        <InputContainer>
          <SmallContainer>
          <TextBox For="Email">Email</TextBox>
          <InputBox id="Email" value={email} onChange={(event) => setEmail(event.target.value)}></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox For="Password">Password</TextBox>
          <InputBox id="Password" type="password"  value={password} onChange={(event) => setPassword(event.target.value)}></InputBox>
          </SmallContainer>
          <LoginBtn onClick={() =>{checkUser();}}>Log in</LoginBtn>
        </InputContainer>
        </AllContainer>
    );
  };

const AllContainer = styled.div`
  height: 723px;
  width: 100%;
  background-color: rgba(242, 243, 243, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const LogImgbox = styled.div`
  width: 250px;
  text-align: center;
  margin-bottom: 20px;
`
const LogoImg = styled.img`
  width: 35px;
  cursor: pointer;
`

const OauthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: black;
  width: 250px;
  height: 40px;
  border: solid 1px #a5a5a5;
  background-color: white;
  margin-bottom: 30px;  
  cursor: pointer;
  
  &:hover{
    background-color: #f3f3f3;
  }
  &:active{
    box-shadow: 0px 0px 1px 5px #dcdcdc;
  }
  img{
    height: 17px;
    width: 17px;
    padding-right: 3px;
  }
`

const InputContainer = styled.div`
    width: 250px;
    height: 210px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 1px 1px 2px 2px rgb(229, 229, 229);

`

const SmallContainer = styled.div`
  padding-top: 17px;
  margin-left: 25px;
`
const TextBox = styled.label`
    font-weight: 400;
`
const InputBox = styled.input`
  width: 190px;
  height: 25px;
`
const LoginBtn = styled.button`
  width: 200px;
  height: 35px;
  margin-top: 17px;
  margin-left: 23px;
  color : white;
  background-color: rgba(29, 154, 249, 1);
  border: none;
  border-radius: 3px;
  box-shadow: inset 0px 2px 0px 0px rgba(119, 194, 251, 1);
  cursor: pointer;
  &:hover {
	background-color:rgba(49, 114, 198, 1);
  &:active {
	box-shadow: 0px 0px 1px 3px #aedcff;
}

}
`
export default LoginBox;
