import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col, Offcanvas, Toast, Modal } from 'react-bootstrap';
import './Home.css';

const productos = [
  { id: 1, nombre: 'casco', descripcion: 'varios colores', imagen: '/images/accesorio1.jpg', precio: 4000 },
  { id: 2, nombre: 'volantera', descripcion: 'seleccione', imagen: '/images/accesorio2.jpg', precio: 7000 },
  { id: 2, nombre: 'Mochila', descripcion: 'Descripción del accesorio ', imagen: '/images/accesorio2.jpg', precio: 3000 },
  { id: 2, nombre: 'Termo', descripcion: 'Descripción del accesorio ', imagen: '/images/accesorio2.jpg', precio: 28000 },

  // Añade más productos según sea necesario
];

const Home = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [cantidad, setCantidad] = useState({}); // Estado para la cantidad específica de cada producto
  const [modalShow, setModalShow] = useState(false); // Estado para el modal de confirmación
  const [itemToRemove, setItemToRemove] = useState(null); // Producto a eliminar

  const addToCart = (producto) => {
    const cantidadSeleccionada = cantidad[producto.id] || 1; // Cantidad por defecto 1 si no está definida

    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === producto.id);

      let newCart;
      if (itemInCart) {
        newCart = prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + cantidadSeleccionada }
            : item
        );
      } else {
        newCart = [...prevCart, { ...producto, quantity: cantidadSeleccionada }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });

    setShowCart(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleCheckout = () => {
    setShowCart(false);
    // Lógica para proceder con la compra (e.g., integración con Mercado Pago)
  };

  const handleRemoveItem = (id) => {
    setItemToRemove(id);
    setModalShow(true);
  };

  const confirmRemoveItem = () => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== itemToRemove);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
    setModalShow(false);
    setItemToRemove(null);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  const handleQuantityChange = (id, value) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: value,
    }));
  };

  return (
    <div>
      <div className="home-container">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/portada.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <Container className="content-container">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Bienvenido a nuestra tienda de Accesorios</Card.Title>
              <Card.Text>
                Encuentra los mejores accesorios para autos, motos y bicicletas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <div className="productos-section">
        <Container>
          <h2 className="text-center mb-4">Nuestros Productos</h2>
          <Row>
            {productos.map((producto) => (
              <Col xs={12} sm={6} md={4} lg={3} key={producto.id} className="mb-4">
                <Card className="product-card">
                  <Card.Img variant="top" src={producto.imagen} className="product-image" />
                  <Card.Body>
                    <Card.Title className="product-title">{producto.nombre}</Card.Title>
                    <Card.Text className="product-description">{producto.descripcion}</Card.Text>
                    <Card.Text className="product-price">${producto.precio}</Card.Text>
                    <input
                      type="number"
                      value={cantidad[producto.id] || 1}
                      min="1"
                      onChange={(e) => handleQuantityChange(producto.id, parseInt(e.target.value, 10))}
                      className="form-control mb-2"
                    />
                    <Button variant="primary" className="w-100" onClick={() => addToCart(producto)}>
                      Añadir al Carrito
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end" className="offcanvas-cart">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 ? (
            <>
              {cart.map((item) => (
                <Row key={item.id} className="mb-3 align-items-center">
                  <Col xs={6} className="text-truncate">{item.nombre}</Col>
                  <Col xs={3}>${item.quantity * item.precio}</Col>
                  <Col xs={2} className="text-end">
                    <Button variant="link" className="text-danger p-0" onClick={() => handleRemoveItem(item.id)}>
                      <i className="fas fa-times"></i>
                    </Button>
                  </Col>
                </Row>
              ))}
              <h5 className="text-right mt-3">Total: ${totalPrice}</h5>
              <Button variant="primary" className="w-100 mt-3" onClick={handleCheckout}>
                Pagar
              </Button>
              <Button variant="danger" className="w-100 mt-2" onClick={clearCart}>
                Vaciar Carrito
              </Button>
            </>
          ) : (
            <p>Tu carrito está vacío.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      <Toast show={showToast} style={{ position: 'fixed', top: 20, right: 20, zIndex: 1060 }}>
        <Toast.Header>
          <strong className="me-auto">Añadido al carrito</strong>
        </Toast.Header>
        <Toast.Body>El producto ha sido añadido a tu carrito.</Toast.Body>
      </Toast>

      {/* Modal de Confirmación */}
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este producto del carrito?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmRemoveItem}>
            Sí, eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
