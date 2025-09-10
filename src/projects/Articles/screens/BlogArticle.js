import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

function BlogArticle({ darkMode }) {
  const { id } = useParams();

  const [blog, SetBlog] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        SetBlog({ id: docSnap.id, ...docSnap.data() });
      }
    }
    fetchArticle()
  }, [id]);

  const deleteArticle = async (id) => {
    try {
      const deleteRef = doc(db, 'blogs', id);
      await deleteDoc(deleteRef);
      navigate('/Articles');
    }
    catch (err) {
      console.log('error while delete', err);
    }
  }

  return (
    <>
      {blog ? <BlogContent darkMode={darkMode} blogDetails={blog} deleteArticle={deleteArticle} /> : <div>blog not available</div>}
    </>
  )
}

export default BlogArticle