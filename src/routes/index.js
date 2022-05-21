import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import View from '../pages/View'


const Rotas = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register/>} />
      </Routes>
      <Routes>
        <Route exact path="/view" element={<View/>} />
      </Routes>
    </>
  );
};

export default Rotas;