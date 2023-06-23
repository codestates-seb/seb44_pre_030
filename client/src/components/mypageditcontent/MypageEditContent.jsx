import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState } from 'draft-js';
import { BiLink } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import ProfileSvg from '../../assets/mypage/profileimg.svg'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const MypageEditContent = ({userInfo}) => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [displayName, setDisplayName] = useState(userInfo.data.attributes.displayname)
  const [userId, setUserId] = useState(userInfo.data.id)
  const replace = useNavigate();
  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };

  const updateProfile = (userId) => {
    // 프로필 정보 업데이트 요청을 보내는 함수
      axios
      .put(`http://localhost:1337/api/users/${userId}`,{
        displayname: "nanana",
          email: displayName,
      })
          .then(response => {
            // Handle success.
            console.log('put ok');
            console.log(response.data)
          })
          .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
          });
  };
    return (
        <AllContainer>
            
            <TitleBox1>Edit your profile</TitleBox1>
            <TitleBox2>Public information</TitleBox2>
        <Container>
            <ContentContainer>
            <AllInputBox>
            <TitleText>Profile image</TitleText>
            <ProfileImg src={ProfileSvg}></ProfileImg>
            </AllInputBox>
            <AllInputBox>
            <TitleText For="username">Display name</TitleText>
            <InputBox id="username" value={displayName} onChange={e => setDisplayName(e.target.value)}></InputBox>
            <TitleText For="location">Location</TitleText>
            <InputBox id="location"></InputBox>
            <TitleText For="title">Title</TitleText>
            <InputBox id="title" placeholder='No title has been set'></InputBox>
            </AllInputBox>
            <WriteBox>
            <TitleText>About me</TitleText>
            </WriteBox>
            <MyBlock>
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }} 
        placeholder=""
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
    </MyBlock>
            </ContentContainer>
        </Container>
        <div>
        <TitleBox2>Links</TitleBox2>
            <EtcContainer>
                <LinkBox>
                <TitleText>Website link</TitleText>
                <AllLinkBox>
                    <IconBox>
                    <BiLink size={17} color='gray'></BiLink>
                    </IconBox>
                <InputLinkBox></InputLinkBox>
                </AllLinkBox>
                </LinkBox>
                <LinkBox>
                <TitleText>Twitter link or username</TitleText>
                <AllLinkBox>
                    <IconBox>
                    <FaTwitter size={17} color='gray'></FaTwitter>
                    </IconBox>
                <InputLinkBox></InputLinkBox>
                </AllLinkBox>
                </LinkBox>
                <LinkBox>
                <TitleText>GitHub link or username</TitleText>
                <AllLinkBox>
                    <IconBox>
                    <BsGithub size={17} color='gray'></BsGithub>
                    </IconBox>
                <InputLinkBox></InputLinkBox>
                </AllLinkBox>
                </LinkBox>
            </EtcContainer>
            <TitleBox2>Private information</TitleBox2>
            <PrivateContainer>
               <LinkBox>
            <TitleText For="username">Full name</TitleText>
            <InputBox id="username" value={`${userInfo.data.attributes.displayname}`}></InputBox>
            </LinkBox>
            </PrivateContainer>
            </div>
            <SaveProfileBtn onClick={updateProfile(userId)}>Save profile</SaveProfileBtn>
            <Link to="/mypage/:id">
            <CanceleBtn>Cancel</CanceleBtn>
            </Link>
        </AllContainer>
    );
};

const MyBlock = styled.div`
    .wrapper-class{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
  .editor {
    height: 200px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
const IconBox = styled.div`
  top: 19px;
  left: 3px;
  position: absolute;
  transform: translateY(-50%);
`
const AllContainer = styled.div`
    width: 700px;
    height: 1425px;
`
const Container = styled.div`
    width: 60vw;
    height: 800px;
    border: solid 1px rgb(226, 226, 226);
    border-radius: 5px;
    margin-bottom: 50px;
`
const WriteBox =styled.div`
    margin-top: 15px;
`

const ContentContainer = styled.div`
    width: 58vw;
    height: 600px;
    border-radius: 5px;
    margin-top: 30px;
    margin-left: 20px;
    padding-right: 20px;
`
const EtcContainer = styled.div`
    display: flex;
    align-items: center;
    width: 60vw;
    height: 100px;
    border: solid 1px rgb(232, 232, 232);
    border-radius: 5px;
`

const PrivateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    height: 100px;
    border: solid 1px rgb(232, 232, 232);
    border-radius: 5px;
`
const AllLinkBox = styled.div`
    display: flex;
  align-items: center;
  position: relative;
`

const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 60px;
    margin-left: 20px;
    padding-right: 10px;
    
`
const InputLinkBox = styled.input`
    width: 17vw;
    height: 30px;
    text-align: right;
  font-size: 15px;
  padding-right: 30px;
    &:active{
        box-shadow: 0px 0px 1px 4px rgb(97, 234, 255, 0.5);
    }
`

const TitleBox1 = styled.div`
    width: 60vw;
    height: 55px;
    font-size: 30px;
    border-bottom: solid 1px rgb(192, 192, 192);
`

const TitleBox2 = styled.div`
    width: 60vw;
    height: 40px;
    font-size: 21px;
    margin-top: 23px;
`

const TitleText = styled.label`
    width:  13vw;
    height: 22px;
    font-size: 16px;
    font-weight: 650;
    margin-top: 14px;
`

const ProfileImg = styled.img`
    width: 160px;
    height: 160px;
`
const AllInputBox=styled.div`
    display: flex;
    flex-direction: column;
`

const InputBox = styled.input`
    width: 40vw;
    height: 35px;
    &:active{
        box-shadow: 0px 0px 1px 4px rgb(97, 234, 255, 0.5);
    }
`


const SaveProfileBtn = styled.button`
  width: 100px;
  height: 35px;
  margin-top: 55px;
  color : #ffffff;
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
const CanceleBtn = styled.button`
  width: 60px;
  height: 35px;
  margin-top: 55px;
  margin-left: 17px;
  color : rgba(49, 114, 198, 1);
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
	background-color:rgba(49, 114, 220, 0.05);
  &:active {
	box-shadow: 0px 0px 1px 3px #aedcff;
}

}
`


export default MypageEditContent;