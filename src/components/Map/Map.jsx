import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const markerIcon = new L.Icon({
  iconUrl: require('../../assets/images/marker.png'),
  iconSize: [35, 45],
});

const position = [-24.89, -51.55];


export default function Map() {


  const [data, setData] = useState([])

  useEffect(()=> {

    axios.get("https://localityapi.herokuapp.com/").then((result)=> {

      setData(result.data)
    })

    
  },[])


  return (

    <div>

  

    <MapContainer
      center={position}
      zoom={5}
      style={{ width: '100%', height: '80vh', marginTop:'40px'}}
    >

      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


      
      {data.map((data)=> (
        <Marker 
        key={data._id}
        position={[data.latitude, data.longitude]}
        icon={markerIcon}
        >
      </Marker>
      ))}

      {console.log(data)}
      
    </MapContainer>



    </div>

  );
}