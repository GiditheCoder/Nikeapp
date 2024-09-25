
import React from 'react';
import '../Products.css';
import { useNavigate } from 'react-router-dom';
import SizesCategory from './sizes';
import { useState, useEffect } from 'react';

const Products = ({ id, title, content, price, colors, count, src, CartHandler, IncreaseItem }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const product = { id, title, content, price, colors, count, src };
    CartHandler(product);
    
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products">
      <section className="products--section">
        <img src={src} alt="image" className="products--image" />
        <SizesCategory/>
        <h1 onClick={handleClick} className="title">
          {title}
        </h1>
        <h1>Description</h1>
        <p className="description">{content}</p>
        <h1>Price</h1>
        <p className="price">{price}</p>
        <h1>Colors</h1>
        <p className="colors">{colors}</p>
        {/* <h1>Count</h1> */}
        {/* <p className="count">{count}</p> */}
        <button className="" onClick={handleAddToCart} >Add to cart</button>
      </section>
    </div>
  );
};

export default Products;
