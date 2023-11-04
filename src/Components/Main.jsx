import React, { useState } from 'react';
import Navabar from './Navabar';
import Register from './Register';
import About from './About';
import Home from './Home';
import Blog from './Blog';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Weather from './Weather';
import First from './First';

export default function Main() {
  const [blogPosts, setBlogPosts] = useState([]);

  // Define a function to update blog posts and pass it to the Home component
  const updateBlogPosts = (newPosts) => {
    setBlogPosts(newPosts);
  };

  return (
    <div>
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/home" element={<Home updateBlogPosts={updateBlogPosts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/first" element={<First />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/blog" element={<Blog blogPosts={blogPosts} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
