import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlogView from './BlogView';
import BlogImage from "../../../assets/images/blog6.jpg";
import AuthorImage from "../../../assets/images/anonymous-blog.jpg";

function BlogList({ blogsList }) {
    const navigate = useNavigate();

    return (
        <div className="blogs-grid">
            {blogsList && blogsList.map((blog) => (
                <article onClick={() => navigate(`/Articles/${blog.id}`)} className="blog-card" key={blog.id}>
                    {/* Blog Image */}
                    <div className="blog-image">
                        <img src={blog.coverImage ||BlogImage} alt={blog.title} />
                    </div>

                    {/* Blog Details */}
                    <div className="blog-info">
                        <h2>{blog.title}</h2>
                        <div style={{ maxHeight: '150px', minHeight: '100px', overflow: "hidden" }}>
                            <BlogView content={blog.content.length <= 150 ? blog.content : `${blog.content.slice(0, 150)}...`} />
                        </div>
                        <div className="blog-meta">
                            <img className="blog-author" src={blog.authorImage || AuthorImage} alt={blog.author} />
                            <span>{`${blog.author} • ${new Date(blog.publishedDate?.seconds * 1000).toDateString()}`}</span>
                        </div>
                        <Link to={`/Articles/${blog.id}`} className="blog-btn">Read More</Link>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default BlogList;
