import React, { useEffect } from 'react';
import './Blogs.css';
import BlogList from '../components/BlogList';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';

function Blogs({ blogsList, setBlogsList, darkMode }) {
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnap = await getDocs(collection(db, 'blogs'));
      setBlogsList(querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBlogs();
  }, [setBlogsList]);

  return (
    <div className={`blogs-page ${darkMode ? "light" : "dark"}`}>
      <header className="blogs-header">
        <h1>My Blogs</h1>
        <p>Read, learn, and explore my thoughts.</p>
      </header>

      <nav className="blogs-nav">
        <Link to={'AddBlog'} className="nav-link">Add Blog</Link>
      </nav>

      <BlogList blogsList={blogsList} />
    </div>
  );
}

export default Blogs;
