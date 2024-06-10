import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import LoginPage from './components/LoginPage';
import PostPage from './components/Post/PostPage';
import WritePage from './components/Write/WritePage';
import MyPage from './components/MyPage';
import ItemPage from './components/Item/ItemPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PostPage/:postTitle" element={<PostPage />} />
        <Route path="/WritePage" element={<WritePage />} />
        <Route path="/WritePage/:id" element={<WritePage />} />
        <Route path="/MyPage/:userNickName" element={<MyPage />} />
        <Route path="/ItemPage/:category/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;