// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';  // Importar el archivo CSS para estilos personalizados

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3">
      <Navbar.Brand as={Link} to="/" className="font-weight-bold">Accesorios JBD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="mx-3">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-3">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/location" className="mx-3">Ubicación</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown" className="mx-3">
            <NavDropdown.Item as={Link} to="/category/autos">Autos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/motos">Motos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/bicicletas">Bicicletas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
