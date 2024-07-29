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
        {<NavBar />}
      </header>
      <main>
        <h1>Home</h1>
        {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))
      }
      </main>
    </>
  );
};

export default Home;