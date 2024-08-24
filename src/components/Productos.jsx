// src/components/Productos.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Productos.css'; // Archivo CSS para estilos específicos de productos

const productos = [
  { id: 1, nombre: 'Accesorio 1', descripcion: 'Descripción detallada del accesorio 1', imagen: '/images/accesorio1.jpg', precio: '$50' },
  { id: 2, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 2', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 3, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 3', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 4, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 4', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 5, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 5', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 6, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 6', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 7, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 7', imagen: '/images/accesorio2.jpg', precio: '$70' },
  { id: 8, nombre: 'Accesorio 2', descripcion: 'Descripción detallada del accesorio 8', imagen: '/images/accesorio2.jpg', precio: '$70' },

  // Agrega más productos según sea necesario
];

const Productos = () => {
  return (
    <Container className="productos-container">
      <h1 className="text-center mb-4">Nuestros Productos</h1>
      <Row>
        {productos.map(producto => (
          <Col md={4} key={producto.id} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={producto.imagen} className="product-image" />
              <Card.Body>
                <Card.Title className="product-title">{producto.nombre}</Card.Title>
                <Card.Text className="product-description">{producto.descripcion}</Card.Text>
                <Card.Text className="product-price">{producto.precio}</Card.Text>
                <Button variant="primary" className="w-100">Comprar Ahora</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
