import React from "react";
import BlogView from "./BlogView";
import BlogImage from "../../../assets/images/Blog-app.webp";
import CreateBlogDay from "../../../assets/images/Create-blog-day.webp";
import CreateBlogNight from "../../../assets/images/Create-blog-night.webp";
import "./BlogContent.css";

function BlogContent({ blogDetails, deleteArticle, darkMode }) {
    return (
        <div
            className="blog-page"
            style={{
                backgroundImage: `url(${darkMode ? CreateBlogDay : CreateBlogNight
                    })`,
            }}
        >
            <article className="blog-article" key={blogDetails.id}>
                <div className="blog-hero">
                    <img
                        className="blog-cover"
                        src={blogDetails.coverImage || BlogImage}
                        alt={blogDetails.title}
                    />
                </div>

                <div className="blog-body">
                    <h1 className="blog-title">{blogDetails.title}</h1>
                    <p className="blog-meta">
                        ✍️ {blogDetails.author} •{" "}
                        {new Date(blogDetails.publishedDate?.seconds * 1000).toDateString()}
                    </p>
                    <BlogView content={blogDetails.content} />
                    <button
                        className="delete-btn"
                        onClick={() => deleteArticle(blogDetails.id)}
                    >
                        Delete Article
                    </button>
                </div>
            </article>
        </div>
    );
}

export default BlogContent;
