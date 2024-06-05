import './CartDetails.css';
import React from 'react';




const Cart = ({ cartItems , total , onIncreaseQuantity, onDecreaseQuantity,  DeleteFromCart }) => {
  return (
    <div>
      <h2 className='cart--header'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='cart--resolver'>Your cart is empty</p>
      ) : (
        <ul className='cart--sorter'>
          {cartItems.map(item => (
            <li key={item.id}>
             <div className='cart'>
             <img className='cart--img'   src={item.src} alt={item.title} width={50} />
              <p className='cart--title'>{item.title}</p>
              <p className='cart--quantity'>Quantity : {item.quantity}</p>
              <p className='cart--price'>Price : {item.price}</p>
              <button className='cart--button' onClick={() => onIncreaseQuantity(item.id)}> + </button>
              <button className='cart--button'   onClick={() => onDecreaseQuantity(item.id)}> - </button>
                 <p onClick={() => DeleteFromCart(item.id)} className='cart--delete'>Delete</p>
             </div>
            </li>
          ))}
        </ul>

       
      )}
      {/* we have to be able to get the value from the array dynamically and store it */}
      <p className='cart--total'>Total : ${total.toFixed(2)}</p>
      <button className='cart--checkout'> Proceed to Checkout</button>
    </div>
  );
};

export default Cart;


// const Cart = () => {
//     const { id } = useParams();
//     // get tthe prodcut based on the id
//     const product = ProductsData.find(product => product.id === id);

//     if (!product) {
//         return <div>Product not found</div>;
//       }
   
//       const imagePath = `/${product.src}`;
    

//     return ( <div>
       
// <h1 className="product--details">Cart Details</h1>
// <div className="products">
//      <section className="products--section">
//       {/* <img src={product.id.src} alt="Product" /> */}
//       <img src={imagePath} alt="image" className="products--image" />
//       <h2 className="title">{product.title}</h2>
//       <p className="description">Description: {product.content}</p>
//       <p  className="price">Price: {product.price}</p>
//       <p className="colors">Colors: {product.colors}</p>
//       <p  className="count">Count: {product.count}</p>
//       <button   className="products--buttton"> +</button>
     
//       </section>
//       </div>
  
//     </div> );
// }
 
// export default Cart;
