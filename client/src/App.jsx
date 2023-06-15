import './App.css';
import WriteAnswer from './components/answer/WriteAnswer';
import Footer from './components/footer/Footer';
import Sidebar from "./components/sidebar/sidebar"
import LoginBox from "./components/loginbox/Loginbox"

function App() {
  return (
    <>
      <Sidebar/>
      <WriteAnswer />
      <Footer />
    </>
  );
}

export default App;
