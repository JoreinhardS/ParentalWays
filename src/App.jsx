import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CoursePage from './pages/CoursePage';
import ArticlePage from './pages/ArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/:username/:slug" element={<ArticleDetailPage />} />
    </Routes>
  );
}

export default App;
