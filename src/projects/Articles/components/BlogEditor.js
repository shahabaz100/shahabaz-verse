// import { useRef, useState } from "react";
// import JoditEditor from "jodit-react";
// import './BlogEditor.css';

// function BlogEditor({ handleNewArticle, isAuthorSelected, setIsAuthorSelected, title, setTitle, author, setAuthor, setContext,darkMode }) {

//     const editor = useRef(null);
//     const [content, setContent] = useState("");

//     const config = {
//         readonly: false,
//         height: 500,
//         toolbarSticky: false,
//         uploader: { insertImageAsBase64URI: true },
//     };

//     const saveBlog = () => {
//         setContext(content)
//     };

//     return (
//         <form onSubmit={handleNewArticle} className={`blog-editor ${darkMode ? "light" : "dark"}`}>
//             <input required type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

//             <div className="author-option">
//                 <label className="switch">
//                     <input
//                         type="checkbox"
//                         checked={isAuthorSelected}
//                         onChange={() => setIsAuthorSelected(!isAuthorSelected)}
//                     />
//                     <span className="slider"></span>
//                 </label>
//                 <span>{isAuthorSelected ? "Show My Name" : "Stay Anonymous"}</span>
//             </div>

//             {isAuthorSelected && (
//                 <input
//                     type="text"
//                     required
//                     name="author"
//                     placeholder="Author"
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 />
//             )}

//             <JoditEditor
//                 ref={editor}
//                 value={content}
//                 config={config}
//                 tabIndex={1}
//                 onBlur={(newContent) => setContent(newContent)}
//             />

//             <button className="save-blog" onClick={saveBlog}>Save Blog</button>
//         </form>
//     );
// }
// export default BlogEditor

import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "./BlogEditor.css";

function BlogEditor({
  handleNewArticle,
  isAuthorSelected,
  setIsAuthorSelected,
  title,
  setTitle,
  author,
  setAuthor,
  setContext,
  darkMode,
  coverImage,
  setCoverImage, 
}) {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 500,
    toolbarSticky: false,
    uploader: { insertImageAsBase64URI: true },
  };

  const saveBlog = () => {
    setContext(content);
  };

  return (
    <form
      onSubmit={handleNewArticle}
      className={`blog-editor ${darkMode ? "light" : "dark"}`}
    >
      <input
        required
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="cover-upload">
        <label>Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files[0])}
        />
        {coverImage && (
          <img
            src={URL.createObjectURL(coverImage)}
            alt="cover preview"
            className="cover-preview"
          />
        )}
      </div>

      {/* Author Option */}
      <div className="author-option">
        <label className="switch">
          <input
            type="checkbox"
            checked={isAuthorSelected}
            onChange={() => setIsAuthorSelected(!isAuthorSelected)}
          />
          <span className="slider"></span>
        </label>
        <span>{isAuthorSelected ? "Show My Name" : "Stay Anonymous"}</span>
      </div>

      {/* Author Name */}
      {isAuthorSelected && (
        <input
          type="text"
          required
          name="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      )}

      {/* Blog Content */}
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />

      <button className="save-blog" onClick={saveBlog}>
        Save Blog
      </button>
    </form>
  );
}
export default BlogEditor;
