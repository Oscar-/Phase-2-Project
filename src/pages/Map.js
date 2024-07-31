import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NavBar from "../components/NavBar";

//component 5
function Map ({ places }) {
    
    //display map, have not had time yet to figure out how to pull lat/long and display specific places
    return (
      <>
        <header>
            <NavBar />
        </header>
        <MapContainer center={[40.7484405, -73.9856644]} zoom={13} style={{ height: "85vh", width: "85%" }}>
            { <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            }
        </MapContainer>
      </>
    );
  };

export default Map;