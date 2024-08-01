import NavBar from "../components/NavBar";
import React, { useState } from 'react';

const AddPlaceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    category: '',
    link: '',
    rating: '',
    goodFor: '',
    image: '',
    favorite: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/places/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Place added:', data);
      setFormData({
        name: '',
        city: '',
        category: '',
        link: '',
        rating: '',
        goodFor: '',
        image: '',
        favorite: false,
      });
    })
    .catch(error => console.error('Error adding place:', error));
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="form-container"> 
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input type="url" name="link" value={formData.link} onChange={handleChange} placeholder="Link" required />
      <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" required />
      <input type="text" name="goodFor" value={formData.goodFor} onChange={handleChange} placeholder="Good For" required />
      <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <label>
        Favorite
        <input type="checkbox" name="favorite" checked={formData.favorite} onChange={handleChange} />
      </label>
      <button type="submit">Add Place</button>
    </form>
    </div>
    </>
    
  );
};

export default AddPlaceForm;