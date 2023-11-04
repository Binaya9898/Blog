import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ updateBlogPosts }) {
  const [formData, setFormData] = useState({
    id: '1',
    title: '',
    author: '',
    image: '',
    description: '',
  });

  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();

    const Ntitle = document.getElementById('title').value;
    const Nauthor = document.getElementById('author').value;
    const Nimage = document.getElementById('image').value;
    const Ndescription = document.getElementById('description').value;

    // Create a new blog post object
    const newPost = {
      id: formData.id,
      title: Ntitle,
      author: Nauthor,
      image: Nimage,
      description: Ndescription,
    };

    // Update the blogPosts state with the new post
    setBlogPosts([...blogPosts, newPost]);

    // Clear the form
    setFormData({
      id: '2', // Generate a unique ID here
      title: '',
      author: '',
      image: '',
      description: '',
    });

    // Redirect to the /blog page after adding the new post
    navigate('/blog');

    // Call the parent component's updateBlogPosts function to pass the data up
    updateBlogPosts([...blogPosts, newPost]);
  }

  return (
    <div className='container-fluid' style={{ width: '100rem', backgroundColor: '#000', paddingTop: '3rem', alignContent: 'center' }}>
      <div className="row col-md-12" style={{
        backgroundColor: '#ffff',
        fontFamily: 'sans-serif',
        paddingTop: '3rem'
      }}>
        {/* Your form */}
        <form style={{ paddingLeft: '10rem', paddingTop: "2rem" }} onSubmit={handleClick}>
          {/* Title input */}
          <div className="form-group col-md-10">
            <label>Title:</label>
            <input
              type="text"
              className="form-control col-md-4"
              id='title'
              placeholder="Enter title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          {/* Description textarea */}
          <div className="form-group col-md-10">
            <label>Description:</label>
            <textarea
              className="form-control col-md-4"
              id='description'
              rows="8"
              placeholder="Enter description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Image URL input */}
          <div className="form-group col-md-10">
            <label>Image:</label>
            <input
              type="text"
              className="form-control col-md-4"
              id='image'
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>

          {/* Author Name input */}
          <div className="form-group col-md-10">
            <label>Author Name:</label>
            <input
              type="text"
              className="form-control col-md-4"
              id='author'
              placeholder="Enter author name"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            />
          </div>

          {/* Publish Button */}
          <button type="submit" className="btn btn-primary">Publish</button>
        </form>
      </div>
    </div>
  );
}
