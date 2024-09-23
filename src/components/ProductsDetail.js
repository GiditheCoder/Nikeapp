import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // adjust the import path as necessary
import '../Products.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'products', id));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to fetch product');
        console.error("Error fetching product: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const imagePath = `/${product.src}`;

  return (
    <div>
      <h1 className="product--details">Product Details</h1>
      <div className="products">
        <section className="products--section">
          <img src={imagePath} alt="Product" className="products--image" />
          <h2 className="title">{product.title}</h2>
          <p className="description">Description: {product.content}</p>
          <p className="price">Price: {product.price}</p>
          <p className="colors">Colors: {product.colors}</p>
          <p className="count">Count: {product.count}</p>
          <button className="products--button">Add to Cart</button>
        </section>
      </div>
    </div>
  );
}

export default ProductDetails;





