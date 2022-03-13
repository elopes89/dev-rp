import React from "react";

import { useNavigate } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./MapaCss.css";

import "leaflet/dist/leaflet.css";


function Mapa() {
  const rio = [-22.9035, -43.2096];
  const floripa = [-27.5969, -48.5495]
  
  const miami = [25.761681, -80.191788]
  const navigate = useNavigate();

  return (
    <MapContainer center={floripa} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={floripa}>
        <Popup>
          Localização da empresa <br /> <br />
          <button onClick={() => navigate(-1)}>VOLTAR</button>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
export default Mapa;
