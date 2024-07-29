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
        <h1>{}</h1>
        <p>{}</p>
        <div>{}</div>
      </main>
    </>
  );
};

export default Place;
