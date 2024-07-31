import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PlaceCard from "../components/PlaceCard";

//component 1
function Home() {

  const [places, setPlaces] = useState([]);

  //get data from db.json and set the state
  useEffect(() => {
    fetch('http://localhost:4000/places')
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        throw Error('Failed to fetch data')
      }
    })
    .then(data => {
      setPlaces(data)
    })
    .catch(error => console.error(error))
  }, [])

  //render all of the places fetched in a grid using the PlaceCard component
  return (
    <>
      <header>
      <img src="https://www.creativefabrica.com/wp-content/uploads/2020/08/19/Map-icon-isometric-with-location-Graphics-5026868-1-1-580x386.jpg" alt="logo" className="logo-image"/>
      <h1>FlatMap</h1>
        {<NavBar />}
      </header>
      <main>
        <h1 className="home">Home</h1>
        <section className="cards">
        {places.map(place => (
          <PlaceCard key={place.id} id={place.id} image={place.image} title={place.name} favorite={place.favorite} places={places} />
        ))}
        </section>
      </main>
    </>
  );
};

export default Home;