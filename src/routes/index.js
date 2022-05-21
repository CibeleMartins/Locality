import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";


const Rotas = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Register/>} />
      </Routes>
    </>
  );
};

export default Rotas;