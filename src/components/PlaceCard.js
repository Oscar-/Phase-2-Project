import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//component 4
function PlaceCard({ id, title, image, favorite }) {

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
  
  //rendering the place cards with their photos, link to more details, and the want to go button
  return (
    <article className="card">
        <h2>{title}</h2>
        <img src={image} className="card-image"/>
        <br />
        <Link to={`/place/${id}`}>View Info</Link>
        { gone ? <button onClick={handleClick} className="checkBut"><>&#x2713;</></button>
        : <button onClick={handleClick} className="faveBut">Want To Go?</button> }
    </article>
  );
};

export default PlaceCard;