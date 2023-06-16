import styled from 'styled-components';
import logo from '../../assets/footer/logo3.svg';
import googlelogo from '../../assets/oauth/googlelogo.svg';


const LoginBox = () => {
    return (
      <AllContainer>
        <LogImgbox>
        <LogoImg src={logo}/>
        </LogImgbox>
        <OauthBtn><img src={googlelogo}></img>Log in with Google</OauthBtn>
        <InputContainer>
          <SmallContainer>
          <TextBox>Email</TextBox>
          <InputBox></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox>Password</TextBox>
          <InputBox></InputBox>
          </SmallContainer>
          <LoginBtn>Log in</LoginBtn>
        </InputContainer>
        </AllContainer>
    );
  };
const AllContainer = styled.div`
  height: 500px;
  width: 250px;
`
const LogImgbox = styled.div`
  width: 250px;
  text-align: center;
  margin-bottom: 20px;
`
const LogoImg = styled.img`
  width: 35px;
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
const TextBox = styled.div`
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
  &:hover {
	background-color:rgba(49, 114, 198, 1);
  &:active {
	box-shadow: 0px 0px 1px 3px #aedcff;
}

}
`
export default LoginBox;
  