import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Place() {

  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/places/${id}`)
    .then(res => res.json())
    .then(data => setPlace(data))
    .catch(error => console.error(error))
  }, [id]);

  if (!place) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{place.name}</h1>
        <p>
          <img src={place.image} className="place-image"/>
          <a href={place.link}>Visit {place.name}</a>
          <br />
          City: {place.city}
          <br />
          Rating: {place.rating}
          <br />
          Good For: {place.goodFor}
          <br />
        </p>
        <div>{}</div>
      </main>
    </>
  );
};

export default Place;
