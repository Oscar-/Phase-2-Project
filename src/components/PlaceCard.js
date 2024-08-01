import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//component 4
function PlaceCard({ id, title, image, favorite, onDelete }) {

  //using state for a stretch deliverable to toggle a want to go button
  const [gone, setGone] = useState(favorite);
  
    const handleClick = () => {
      const newFavoriteStatus = !gone;
  
      setGone(newFavoriteStatus);

      fetch(`http://localhost:4000/places/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ favorite: newFavoriteStatus })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('PATCH request failed');
          }
        })
    };
    // const handleDelete
    // DELETE request 

    const handleDelete = (id) => {
      fetch(`http://localhost:4000/places/${id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if (res.ok) {
          onDelete(prevPlaces => prevPlaces.filter(place => place.id !== id));
        } else {
          throw new Error('DELETE request failed');
        }
      })
      .catch(error => console.error('Error deleting place:', error));
    };
  
  //rendering the place cards with their photos, link to more details, and the want to go button
  return (
    <article className="card">
        <h2>{title}</h2>
        <img src={image} className="card-image"/>
        <br />
        <Link to={`/place/${id}`}>View Info</Link>
        { gone ? <button onClick={handleClick} className="checkBut"><>&#x2713;</></button>
        : <button onClick={handleClick} className="faveBut">Want To Go?</button> }
        <div> 
        <button onClick={() => handleDelete(id)} className="deleteBut">Delete</button>
        </div>
    </article>
  );
};

export default PlaceCard