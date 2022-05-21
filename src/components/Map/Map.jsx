import { useState } from 'react';
import L from 'leaflet';
import React from 'react';
import {MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const position = [-24.89, -51.55];

export default function Map() {


  return (

    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >

      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
      <Popup> 
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
     
      
    </MapContainer>
  );
}