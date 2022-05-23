import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../Header/Header'


const markerIcon = new L.Icon({
  iconUrl: require('../../assets/images/marker.png'),
  iconSize: [35, 45],
})




const position = [-24.89, -51.55];

export default function Map() {

  return (

    <>

    <Header></Header>

    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100%', height: '80vh', marginTop:'40px'}}
    >

      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker 
      position={position}
      icon={markerIcon}
      >
      <Popup> 
        Olá!<br/> Você clicou no Paraná!
      </Popup>
    </Marker>
     
    </MapContainer>

    </>
  );
}