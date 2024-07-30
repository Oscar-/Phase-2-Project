import React from 'react';
import { Link } from 'react-router-dom';

function PlaceCard({ id, images }) {
  return (
    <article>
      <div className="image-container">
      <img src={images} key={id} alt="images" className="place-image" />
      </div>
      <Link to={`/places/${id}`}>View Info</Link>
    </article>
  );
};

export default PlaceCard