import React from "react";

function BlogView({ content }) {
    return (
        <div className="prose max-w-3xl mx-auto p-4" >
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export default BlogView;