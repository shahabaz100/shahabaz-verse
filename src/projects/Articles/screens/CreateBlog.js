import React, { useState } from 'react'
import './switch.css';
import { useNavigate } from 'react-router-dom';
import BlogEditor from '../components/BlogEditor';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebase';
import CreateBlogDay from '../../../assets/images/Create-blog-day.webp'
import CreateBlogNight from '../../../assets/images/Create-blog-night.webp'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CreateBlog({ darkMode }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [context, setContext] = useState('')
  const [isAuthorSelected, setIsAuthorSelected] = useState(false);
  const [coverImage, setCoverImage] = useState('')
  const navigate = useNavigate();

  const handleNewArticle = async (e) => {
    e.preventDefault();
    try {
      let coverImageUrl = "";

      if (coverImage) {
        const storage = getStorage();
        const storageRef = ref(storage, `blogs/${Date.now()}_${coverImage.name}`);
        await uploadBytes(storageRef, coverImage);
        coverImageUrl = await getDownloadURL(storageRef);
      }
      await addDoc(collection(db, "blogs"), {
        title: title,
        content: context,
        author: isAuthorSelected ? author : 'Anonymous',
        context: context,
        subTitle: context.slice(0, 50),
        coverImage: coverImageUrl,
        publishedDate: new Date()
      });
      navigate('/Articles')
    } catch (error) {
      console.error("Error adding blog: ", error);
    }
  };

  return (
    <div className='create-blog' style={{
      backgroundImage: `url(${darkMode ? CreateBlogDay : CreateBlogNight})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "2rem"
    }}>
      <BlogEditor
        handleNewArticle={handleNewArticle}
        isAuthorSelected={isAuthorSelected}
        setIsAuthorSelected={setIsAuthorSelected}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        setContext={setContext}
        darkMode={darkMode}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
      />
    </div>
  )
}

export default CreateBlog