import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route ,useParams} from 'react-router-dom';
import ProductsData from "./components/ProductsData";
import Products from './components/Products';
import ProductDetails from './components/ProductsDetail';
import React from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { useState } from 'react';
import CartDetails from './components/CartDetails';
import { useEffect } from 'react';
import Search from './components/Search';
import LoginandRegister from './components/Regsitration';
import PasswordSignIn from './components/sign';
import PasswordSignUp from './components/Regsitration';
import { UserProvider } from './components/userContext';
import PasswordSignOut from './components/signOut';




function App() {

// to auntenticate the current user 


  const [cartItems, setCartItems] = useState(()=>{
    //  then we have a saved cart Items that we use in a step to parse the data
    const savedCartItems = localStorage.getItem('cartItems')
    return savedCartItems ? JSON.parse(savedCartItems) : []
  });



  const [cartCount, setCartCount] = useState(()=>{
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + item.quantity, 0) : 0;
  });



  const [total, setTotal] = useState(()=>{
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const CartHandler = (product) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems];
      let itemFound = false;

      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].id === product.id) {
          updatedCart[i].quantity += 1;
          itemFound = true;
          break;
        }
      }

      if (!itemFound) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });
    IncreaseItem();
  };

  const IncreaseItem = () => {
    setCartCount(cartCount + 1);
  };

  const EvaluateTotal = () => {
    const newTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    // this is where we set the localStorage
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
    EvaluateTotal();
  }, [cartItems]);

  const handleIncreaseQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCartCount(cartCount + 1);
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  };

  const DeleteFromCart = (id) => {
    // we need access to the item we want to delete 
    const itemToDelete = cartItems.find(item => item.id === id);
  
    if (itemToDelete) {
      const quantityToDelete = itemToDelete.quantity;

      // Update the cart items by removing the item
      setCartItems(prevCartItems => 
        prevCartItems.filter(item => item.id !== id)
      );

      // Update the cart count by subtracting the quantity of the removed item
      setCartCount(prevCartCount => prevCartCount - quantityToDelete);

      // Recalculate the total price
      // setTotal(prevTotal => prevTotal - (itemToDelete.price * quantityToDelete));
    }
  };
  return (
    <div className="App">
       <UserProvider>
      <Header cartCount={cartCount} cartItems={cartItems} />
      <Search setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        <Route path="/" element={<ProductsList cartItems={cartItems} setCartItems={setCartItems} CartHandler={CartHandler} IncreaseItem={IncreaseItem} searchQuery={searchQuery} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartDetails cartItems={cartItems} total={total} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} DeleteFromCart={DeleteFromCart} />} />
        <Route path="/login" element={<LoginandRegister />} />
        <Route path="/signin" element={<PasswordSignIn />} />
        <Route path="/signup" element={<PasswordSignUp />} />
        <Route path="/signout" element={<PasswordSignOut Header={Header}/>} />
      </Routes>
      <Footer />
      </UserProvider>
    </div>
  );
}

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  return id ? <ProductDetails id={id} /> : null;
};
const ProductsList = ({ cartItems, setCartItems, CartHandler, IncreaseItem, searchQuery }) => {
  // we set the ProductsData so  that it can be filtered
  const filteredProducts = ProductsData.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productsdataelements = filteredProducts.map(product => (
    <Products
      key={product.id}
      {...product}
      cartItems={cartItems}
      setCartItems={setCartItems}
      CartHandler={CartHandler}
      IncreaseItem={IncreaseItem}
    />
  ));

  return <>{productsdataelements}</>;
};

export default App;