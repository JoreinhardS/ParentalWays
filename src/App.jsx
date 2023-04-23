import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CoursePage from './pages/CoursePage';
import ArticlePage from './pages/ArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import OurExpertPage from './pages/OurExpertPage';
import Page404 from './pages/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/our-expert" element={<OurExpertPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/article/:username/:slug" element={<ArticleDetailPage />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/course/:slug" element={<CourseDetailPage />} />
      <Route path="/course/checkout-details" element={<CheckoutPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
