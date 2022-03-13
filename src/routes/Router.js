import { Routes, Route } from "react-router-dom";

import { Formulario } from "../components/Formulario/Formulario";
import { Produto } from "../components/Produto/Produto";
import { Empresa } from "../components/Empresa/Empresa";
import { Fornecedor } from "../components/Fornecedor/Fornecedor";
import  Mapa  from "../components/Mapa/Mapa";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Formulario/>} />
    <Route path="E" element={<Empresa/>} />
    <Route path="E/P" element={<Produto/>} />
    <Route path="E/M" element={<Mapa/>} />
    <Route path="E/F" element={<Fornecedor/>} />
  </Routes>
);
