import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Location from './components/Location';
import Category from './components/Category';
import Navigation from './components/Navbar';
import Productos from './components/Productos'; // Importa el componente Productos

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Usa el componente Navigation aquí */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/location" element={<Location />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/productos" element={<Productos />} /> {/* Agrega la ruta para Productos */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
