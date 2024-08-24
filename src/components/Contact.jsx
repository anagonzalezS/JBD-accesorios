import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <h1>Contacto</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
