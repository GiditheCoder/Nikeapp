

// ProductDetails.js
import React from "react";
import { useParams } from 'react-router-dom';
import ProductsData from "./ProductsData";
import '../Products.css';




const ProductDetails = () => {
 
  const { id } = useParams();

  // Find the product with the matching ID
  const product = ProductsData.find(product => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const imagePath = `/${product.src}`;

  return (
    // rearrange the code
    // makesure i only dislays the particular one
    <div>

<h1 className="product--details">Product Details</h1>
<div className="products">
     <section className="products--section">
      {/* <img src={product.id.src} alt="Product" /> */}
      <img src={imagePath} alt="image" className="products--image" />
      {/* lets call it products sizes  */}
     
      <h2 className="title">{product.title}</h2>
      <p className="description">Description: {product.content}</p>
      <p  className="price">Price: {product.price}</p>
      <p className="colors">Colors: {product.colors}</p>
      <p  className="count">Count: {product.count}</p>
      <button   className="products--buttton"> Add to Cart</button>
      </section>
      </div>
  
    </div>


  );
}

export default ProductDetails;




