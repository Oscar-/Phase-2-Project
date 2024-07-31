import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

//component 3
function Place() {

  const [place, setPlace] = useState(null);
  const { id } = useParams();

  //using params for dynamic ability to grab specific place id
  useEffect(() => {
    fetch(`http://localhost:4000/places/${id}`)
    .then(res => res.json())
    .then(data => setPlace(data))
    .catch(error => console.error(error))
  }, [id]);

  if (!place) return <h1>Loading...</h1>;

  //render the place info with the fetched data
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
