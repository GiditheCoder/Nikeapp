import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useUser } from './components/userContext';  
import './App.css'; 
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductsDetail';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import CartDetails from './components/CartDetails';
import Search from './components/Search';
import LoginandRegister from './components/Regsitration';
import PasswordSignIn from './components/sign';
import PasswordSignUp from './components/Regsitration';
import PasswordSignOut from './components/signOut';
import { collection, getDocs, getDoc, doc, setDoc, updateDoc, increment, deleteDoc } from 'firebase/firestore';
import { db } from './components/firebase';
import { initializeAuth } from './auth'; 

function App() {
  const { user, setUser } = useUser();  

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    try {
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    } catch (error) {
      console.error("Error parsing cart items from the  localStorage:", error);
      return [];
    }
  });

  const [cartCount, setCartCount] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    try {
      return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + item.quantity, 0) : 0;
    } catch (error) {
      console.error("Error parsing cart count from localStorage:", error);
      return 0;
    }
  });

  const [total, setTotal] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    try {
      return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;
    } catch (error) {
      console.error("Error parsing total from localStorage:", error);
      return 0;
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsArray = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        console.log('Fetched products:', productsArray);
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const CartHandler = async (product) => {
    if (!user) {
      console.error('No user is signed in');
      return;
    }

    const userCartRef = collection(db, 'users', user.uid, 'cartItems');

    try {
      const cartItemDoc = doc(userCartRef, product.id);
      const docSnap = await getDoc(cartItemDoc);

      if (docSnap.exists()) {
        await updateDoc(cartItemDoc, {
          quantity: increment(1)
        });
      } else {
        await setDoc(cartItemDoc, {
          ...product,
          quantity: 1
        });
      }

      const querySnapshot = await getDocs(userCartRef);
      const updatedCartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.reduce((acc, item) => acc + item.quantity, 0));
      setTotal(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const onIncreaseQuantity = async (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      await CartHandler(item);
    }
  };

  const onDecreaseQuantity = async (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item && item.quantity > 1) {
      const userCartRef = collection(db, 'users', user.uid, 'cartItems');
      const cartItemDoc = doc(userCartRef, id);
      await updateDoc(cartItemDoc, {
        quantity: increment(-1)
      });
      const querySnapshot = await getDocs(userCartRef);
      const updatedCartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.reduce((acc, item) => acc + item.quantity, 0));
      setTotal(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
    }
  };

  const DeleteFromCart = async (id) => {
    const userCartRef = collection(db, 'users', user.uid, 'cartItems');
    await deleteDoc(doc(userCartRef, id));
    const querySnapshot = await getDocs(userCartRef);
    const updatedCartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  };

  useEffect(() => {
    if (!user) return;

    const fetchCartItems = async () => {
      const userCartRef = collection(db, 'users', user.uid, 'cartItems');
      try {
        const querySnapshot = await getDocs(userCartRef);
        const cartItemsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCartItems(cartItemsArray);
        setCartCount(cartItemsArray.reduce((acc, item) => acc + item.quantity, 0));
        setTotal(cartItemsArray.reduce((acc, item) => acc + (item.price * item.quantity), 0));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
    setTotal(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  }, [cartItems]);

  useEffect(() => {
    initializeAuth(setUser);
  }, [setUser]);

  return (
    <div className="App">
      <Header cartCount={cartCount} cartItems={cartItems} />
      <Search setSearchQuery={setSearchQuery} />
      <Routes>
      <Route path="/product" element={<ProductsList cartItems={cartItems} setCartItems={setCartItems} CartHandler={CartHandler} searchQuery={searchQuery} products={products} />} /> {/* New route */}
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />
        <Route path="/" element={<ProductsList cartItems={cartItems} setCartItems={setCartItems} CartHandler={CartHandler} searchQuery={searchQuery} products={products} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartDetails cartItems={cartItems} total={total} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} DeleteFromCart={DeleteFromCart} />} />
        <Route path="/login" element={<LoginandRegister />} />
        <Route path="/signin" element={<PasswordSignIn />} />
        <Route path="/signup" element={<PasswordSignUp />} />
        <Route path="/signout" element={<PasswordSignOut Header={Header} />} />
      </Routes>
      <Footer />
    </div>
  );
}

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  return id ? <ProductDetails id={id} /> : null;
};

const ProductsList = ({ cartItems, setCartItems, CartHandler, searchQuery, products }) => {
  const filteredProducts = products.filter(product =>
    product.title && searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  const productsdataelements = filteredProducts.map(product => (
    <Products
      key={product.id}
      {...product}
      cartItems={cartItems}
      setCartItems={setCartItems}
      CartHandler={CartHandler}
    />
  ));

  return <>{productsdataelements}</>;
};

export default App;



