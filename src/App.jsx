import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cafe, Coment, FooterExplorer, Menu, Sales, Singles, Tops } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="w-[390px] m-auto">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/single" element={<Singles />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/coment" element={<Coment />} />
        <Route path="/single">
        </Route>
      </Routes>
      <FooterExplorer />
    </Router>
    </div>
  );
}

export default App;
