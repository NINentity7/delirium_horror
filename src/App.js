import './App.css';
import React from 'react';
import RouteSetup from './views';
//import { MovieServices } from './api/MovieServices';

function App() {
  return (
    <>
      <div className="container-sm">
        <RouteSetup />
      </div>
    </>
  );
}

export default App;
