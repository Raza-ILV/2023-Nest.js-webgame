// REACT
import React from 'react';

// ROUTING
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/pages/Home';
import { VikingsRealm } from './components/pages/VikingsRealm';

// COMPONENTS


function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vikings-realm" element={<VikingsRealm />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
