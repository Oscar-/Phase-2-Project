import React from 'react';
import {Link} from 'react-router-dom';

function PlaceCard({ id }) {
  
  return (
    <article>
        <h2>"Hello"</h2>
        <Link to={`/places/${id}`}>View Info</Link>
    </article>
  );
};

export default PlaceCard;