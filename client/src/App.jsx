import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import QuestionList from './pages/QuestionList';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateQuestion from './pages/CreateQuestion';
import QuestionDetail from './pages/QuestionDetail';
import EditQuestion from './pages/EditQuestion';
import EditAnswer from './pages/EditAnswer';
import MyPage from './pages/MyPage';
import MyPageSummary from './pages/MyPageSummary';
import MyPageAnswers from './pages/MyPageAnswers';
import MyPageQuestions from './pages/MyPageQuestions';
import MyPageTags from './pages/MyPageTags';
import EditMyPage from './pages/EditMyPage';
import TagsList from './pages/TagsList';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const MainDiv = styled.div`
  display: flex;
  margin-left: 124px;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isId, setIsId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [profile, setProfile] = useState(null);

  const [inputText,setInputText] = useState('');

  useEffect(() => {
    if(userInfo){
    setProfile(userInfo.data.attributes.displayname);
    setIsId(userInfo.data.id)
    console.log('isId',isId)
    console.log(profile)
    }
    console.log(inputText);
})


  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} setInputText={setInputText}/>
      <MainDiv>
      <Sidebar />
      <Routes>
        <Route path="/" element={<QuestionList inputText={inputText}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} setUserInfo={setUserInfo}/>} />
        <Route path="/question/ask" element={<CreateQuestion isId={isId}/>} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/question/edit/:id" element={<EditQuestion />} />
        <Route path="/answer/edit/:id" element={<EditAnswer />} />
        <Route path="/mypage/:id" element={<MyPage  isLogin={isLogin} profile={profile}/>} />
        <Route path="/mypage/summary/:id" element={<MyPageSummary profile={profile}/>} />
        <Route path="/mypage/answers/:id" element={<MyPageAnswers profile={profile}/>} />
        <Route path="/mypage/questions/:id" element={<MyPageQuestions profile={profile}/>} />
        <Route path="/mypage/tags/:id" element={<MyPageTags profile={profile}/>} />
        <Route path="/mypage/edit/:id" element={<EditMyPage userInfo={userInfo} profile={profile} />} />
        <Route path="/tagslist" element={<TagsList />} />
      </Routes>
      </MainDiv>
      <Footer />
    </>
  );
}

export default App;
