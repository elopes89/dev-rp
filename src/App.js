import { Formulario } from "./components/Formulario/Formulario";
import { Empresa } from "./components/Empresa/Empresa";
import { Produto } from "./components/Produto/Produto";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";


import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./App.css";

import "leaflet/dist/leaflet.css";
// import Leaf from "./components/Leaf/Leaf";

const position = [-22.9035, -43.2096];

const position1 = [-27.9035, -48.2096];

const cidade = "Rio";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
export default App;

// function App() {
//   return (
//       <MapContainer center={position} zoom={13}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             localização procurada <br /> {cidade}
//           </Popup>
//         </Marker>
//       </MapContainer>
//     );
//   }
//   export default App;
