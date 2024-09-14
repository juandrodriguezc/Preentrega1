import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsList = ({ productsData }) => {
  return (
    <div className="products-container">
      {productsData && productsData.length > 0 ? (
        productsData.map((product) => (
          <Card key={product.id} className="product-card">
            <Link to={`/item/${product.id}`} className="product-link">
              <Card.Img className="card-img" variant="top" src={product.thumbnail} alt={product.title} />
            </Link>
            <Card.Body>
              <Card.Title className="product-title">{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className="product-price">{product.price}</div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No products found for this category</p>
      )}
    </div>

  );
};

export default ProductsList;