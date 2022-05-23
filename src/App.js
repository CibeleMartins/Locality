import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Rotas from './routes/index';
import Header from '../src/components/Header/Header'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
