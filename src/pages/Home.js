import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PlaceCard from "../components/PlaceCard";

//should we add a drop-down/filter here for city or not worry about that?

function Home() {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => res.json())
    .then(data => setPlaces(data))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <header>
      <img src="https://www.creativefabrica.com/wp-content/uploads/2020/08/19/Map-icon-isometric-with-location-Graphics-5026868-1-1-580x386.jpg" alt="logo" />
      <h1 classname="logo-name"> FlatMap </h1>
        {<NavBar />}
      </header>
      <main>
        <h1 classname="home">Home</h1>
        {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))
      }
      </main>
    </>
  );
};

export default Home;