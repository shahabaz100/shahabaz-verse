import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import Header from './screens/Header';
import Footer from './screens/Footer';
import ScrollToTop from './utility/ScrollToTop';

// Lazy load screens
const Home = lazy(() => import('./screens/Home'));
const About = lazy(() => import('./screens/About'));
const Projects = lazy(() => import('./projects/Projects'));
const Todo = lazy(() => import('./projects/TodoList/screens/Todo'));
const Blogs = lazy(() => import('./projects/Articles/screens/Blogs'));
const BlogArticle = lazy(() => import('./projects/Articles/screens/BlogArticle'));
const CreateBlog = lazy(() => import('./projects/Articles/screens/CreateBlog'));
const Contact = lazy(() => import('./screens/Contact'));

function App() {
  const [blogsList, setBlogsList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme class to <body>
  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(darkMode ? 'light-theme' : 'dark-theme');
  }, [darkMode]);

  return (
    <div id="main-app">
      <Router>
        <ScrollToTop />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="Articles" 
              element={<Blogs blogsList={blogsList} setBlogsList={setBlogsList} darkMode={darkMode} />} 
            />
            <Route path="Articles/AddBlog" element={<CreateBlog darkMode={darkMode} />} />
            <Route path="Articles/:id" element={<BlogArticle darkMode={darkMode} />} />
            <Route path="projects" element={<Projects darkMode={darkMode} />} />
            <Route path="todo" element={<Todo darkMode={darkMode} />} />
            <Route path="contact" element={<Contact darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
