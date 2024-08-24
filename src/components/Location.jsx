import React from 'react';
import { Container } from 'react-bootstrap';

const Location = () => {
  return (
    <Container>
      <h1>Ubicación</h1>
      <p>Nos encontramos en la Av. Principal 123, Ciudad</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="mapa"
      ></iframe>
    </Container>
  );
};

export default Location;
