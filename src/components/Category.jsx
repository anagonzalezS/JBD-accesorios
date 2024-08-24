// src/components/Category.jsx
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Producto 1', price: '$10', image: 'logo192.png' },
  { id: 2, name: 'Producto 2', price: '$20', image: 'logo512.png' },
  // Agrega más productos según sea necesario
];

const Category = () => {
  return (
    <div>
      <h1>Productos en la Categoría</h1>
      <div className="d-flex flex-wrap">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
