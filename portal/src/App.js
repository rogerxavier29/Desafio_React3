import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './Rotas/Rotas';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
