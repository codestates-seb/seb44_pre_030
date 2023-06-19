import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/sidebar';
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

function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
     
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question/ask" element={<CreateQuestion />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
        <Route path="/question/edit/:id" element={<EditQuestion />} />
        <Route path="/answer/edit/:id" element={<EditAnswer />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/mypage/summary/:id" element={<MyPageSummary />} />
        <Route path="/mypage/answers/:id" element={<MyPageAnswers />} />
        <Route path="/mypage/questions/:id" element={<MyPageQuestions />} />
        <Route path="/mypage/tags/:id" element={<MyPageTags />} />
        <Route path="/mypage/edit/:id" element={<EditMyPage />} />
        <Route path="/tagslist" element={<TagsList />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
