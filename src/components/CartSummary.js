import React, { useState } from "react";
import ProductsData from "./ProductsData";
import '../Products.css';
import { useParams } from 'react-router-dom';


const Summary = () => {

    const [price, setPrice] = useState(0)

    const handleIncrease = () =>{
        //   be able to uniquely takek the value of the previous and add it to the current
    }

    const { id } = useParams();

    const product = ProductsData.find(product => product.id === id);

    if (!product) {
      return <div>Product not found</div>;

    }

    const imagePath = `/${product.src}`;
    return ( <div>
     

<h1 className="product--details">Product Details</h1>
<div className="products">
     <section className="products--section">
      {/* <img src={product.id.src} alt="Product" /> */}
      <img src={imagePath} alt="image" className="products--image" />
      <h2 className="title">{product.title}</h2>
      <p className="description">Description: {product.content}</p>
      <p  className="price">Price: {product.price}</p>
      <p className="colors">Colors: {product.colors}</p>
      <p  className="count">Count: {product.count}</p>
      <button   className="products--buttton">  + </button>


      <p className="total">  Total</p>

     
      </section>

    
      </div>
  
    </div> );
}
 
export default Summary;