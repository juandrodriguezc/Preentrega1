<<<<<<< HEAD
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
=======
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainer = ({ productsData }) => {

  return (
      <div style={{display: 'flex', justifyContent: 'space-around', width: '100vw', flexWrap: 'wrap'}}>
       {productsData && productsData.map((products) => {
          return (
            <Card key={products.id} style={{ width: "18rem", }}>
              <Link to={`/item/${products.id}`}> 
              <Card.Img variant="top" src={products.thumbnail} />
              </Link>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                {products.description}
                </Card.Text>
                <div>{products.price}</div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
  );
};


export default ItemListContainer;
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
