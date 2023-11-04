import React from 'react';

export default function Blog({ blogPosts }) {
  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <img src={post.image} alt="Blog Post" />
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
