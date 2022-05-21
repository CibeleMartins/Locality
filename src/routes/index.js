import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import AllMap from '../pages/AllMap'
import Teste from "../pages/Teste";


const Rotas = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register/>} />
      </Routes>
      <Routes>
        <Route exact path="/allMap" element={<AllMap/>} />
      </Routes>
      <Routes>
        <Route exact path="/teste" element={<Teste/>} />
      </Routes>
    </>
  );
};

export default Rotas;