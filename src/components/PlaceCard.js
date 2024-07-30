import React from 'react';
import {Link} from 'react-router-dom';
import Place from '../pages/Place';

function PlaceCard({ id, title, image }) {
  
  return (
    <article className="card">
        <h2>{title}</h2>
        <img src={image} className="card-image"/>
        <br />
        <Link to={`/place/${id}`}>View Info</Link>
    </article>
  );
};

export default PlaceCard;