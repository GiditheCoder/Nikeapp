 // const CartHandler = (product) => {
  //   setCartItems(prevCartItems => {
  //     const updatedCart = [...prevCartItems];
  //     let itemFound = false;

  //     for (let i = 0; i < updatedCart.length; i++) {
  //       if (updatedCart[i].id === product.id) {
  //         updatedCart[i].quantity += 1;
  //         itemFound = true;
  //         break;
  //       }
  //     }

  //     if (!itemFound) {
  //       updatedCart.push({ ...product, quantity: 1 });
  //     }

  //     setCartCount(prevCount => prevCount + 1);

  //     return updatedCart;
  //   });
  //   IncreaseItem();
  // };


    // const IncreaseItem = () => {
  //   setCartCount(prevCount => prevCount + 1);
  // };

  // const EvaluateTotal = () => {
  //   const newTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  //   setTotal(newTotal);
  // };

    // const handleIncreaseQuantity = (id) => {
  //   setCartItems(prevCartItems =>
  //     prevCartItems.map(item =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  //   setCartCount(cartCount + 1);
  // };

  // const handleDecreaseQuantity = (id) => {
  //   setCartItems(prevCartItems =>
  //     prevCartItems.map(item =>
  //       item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  //     ).filter(item => item.quantity > 0)
  //   );
  //   setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  // };

  // const DeleteFromCart = (id) => {
  //   const itemToDelete = cartItems.find(item => item.id === id);

  //   if (itemToDelete) {
  //     const quantityToDelete = itemToDelete.quantity;

  //     setCartItems(prevCartItems =>
  //       prevCartItems.filter(item => item.id !== id)
  //     );

  //     setCartCount(prevCartCount => prevCartCount - quantityToDelete);
  //   }
  // };




// function App() {


//   const [cartItems, setCartItems] = useState(()=>{
//     //  then we have a saved cart Items that we use in a step to parse the data
//     const savedCartItems = localStorage.getItem('cartItems')
//     return savedCartItems ? JSON.parse(savedCartItems) : []
//   });



//   const [cartCount, setCartCount] = useState(()=>{
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + item.quantity, 0) : 0;
//   });



//   const [total, setTotal] = useState(()=>{
//     const savedCartItems = localStorage.getItem('cartItems');
//     return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;
//   });
//   const [searchQuery, setSearchQuery] = useState("");

//   const CartHandler = (product) => {
//     setCartItems(prevCartItems => {
//       const updatedCart = [...prevCartItems];
//       let itemFound = false;

//       for (let i = 0; i < updatedCart.length; i++) {
//         if (updatedCart[i].id === product.id) {
//           updatedCart[i].quantity += 1;
//           itemFound = true;
//           break;
//         }
//       }

//       if (!itemFound) {
//         updatedCart.push({ ...product, quantity: 1 });
//       }

//       return updatedCart;
//     });
//     IncreaseItem();
//   };

//   const IncreaseItem = () => {
//     setCartCount(cartCount + 1);
//   };

//   const EvaluateTotal = () => {
//     const newTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//     setTotal(newTotal);
//   };

//   useEffect(() => {
//     // this is where we set the localStorage
//     localStorage.setItem('cartItems' , JSON.stringify(cartItems))
//     setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
//     setTotal(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
//     EvaluateTotal();
//   }, [cartItems]);

//   const handleIncreaseQuantity = (id) => {
//     setCartItems(prevCartItems =>
//       prevCartItems.map(item =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//     setCartCount(cartCount + 1);
//   };

//   const handleDecreaseQuantity = (id) => {
//     setCartItems(prevCartItems =>
//       prevCartItems.map(item =>
//         item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
//       ).filter(item => item.quantity > 0)
//     );
//     setCartCount(cartCount > 0 ? cartCount - 1 : 0);
//   };

//   const DeleteFromCart = (id) => {
//     // we need access to the item we want to delete 
//     const itemToDelete = cartItems.find(item => item.id === id);
  
//     if (itemToDelete) {
//       const quantityToDelete = itemToDelete.quantity;

//       // Update the cart items by removing the item
//       setCartItems(prevCartItems => 
//         prevCartItems.filter(item => item.id !== id)
//       );

//       // Update the cart count by subtracting the quantity of the removed item
//       setCartCount(prevCartCount => prevCartCount - quantityToDelete);

//       // Recalculate the total price
//       // setTotal(prevTotal => prevTotal - (itemToDelete.price * quantityToDelete));
//     }
//   };
//   return (
//     <div className="App">
//        <UserProvider>
//       <Header cartCount={cartCount} cartItems={cartItems} />
//       <Search setSearchQuery={setSearchQuery} />
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetailsWrapper />} />
//         <Route path="/" element={<ProductsList cartItems={cartItems} setCartItems={setCartItems} CartHandler={CartHandler} IncreaseItem={IncreaseItem} searchQuery={searchQuery} />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<CartDetails cartItems={cartItems} total={total} onIncreaseQuantity={handleIncreaseQuantity} onDecreaseQuantity={handleDecreaseQuantity} DeleteFromCart={DeleteFromCart} />} />
//         <Route path="/login" element={<LoginandRegister />} />
//         <Route path="/signin" element={<PasswordSignIn />} />
//         <Route path="/signup" element={<PasswordSignUp />} />
//         <Route path="/signout" element={<PasswordSignOut Header={Header}/>} />
//       </Routes>
//       <Footer />
//       </UserProvider>
//     </div>
//   );
// }

// const ProductDetailsWrapper = () => {
//   const { id } = useParams();
//   return id ? <ProductDetails id={id} /> : null;
// };
// const ProductsList = ({ cartItems, setCartItems, CartHandler, IncreaseItem, searchQuery }) => {
//   // we set the ProductsData so  that it can be filtered
//   const filteredProducts = ProductsData.filter(product => 
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const productsdataelements = filteredProducts.map(product => (
//     <Products
//       key={product.id}
//       {...product}
//       cartItems={cartItems}
//       setCartItems={setCartItems}
//       CartHandler={CartHandler}
//       IncreaseItem={IncreaseItem}
//     />
//   ));

//   return <>{productsdataelements}</>;
// };

// export default App;

// const ProductsList = ({ cartItems, setCartItems, CartHandler, IncreaseItem, searchQuery, products }) => {
//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );










 
// function App() {

//   const [searchQuery, setSearchQuery] = useState("");
//   const [products, setProducts] = useState([]);

//  const [cartItems, setCartItems] = useState(() => {
//   const savedCartItems = localStorage.getItem('cartItems');
//   return savedCartItems ? JSON.parse(savedCartItems) : [];
// });

// const [cartCount, setCartCount] = useState(() => {
//   const savedCartItems = localStorage.getItem('cartItems');
//   return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + item.quantity, 0) : 0;
// });

// const [total, setTotal] = useState(() => {
//   const savedCartItems = localStorage.getItem('cartItems');
//   return savedCartItems ? JSON.parse(savedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;
// });




// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'products'));
//       const productsArray = querySnapshot.docs.map(doc => {
//         const data = doc.data();
//         return { id: doc.id, ...data };
//       });
//       setProducts(productsArray);
//     } catch (error) {
//       console.error("Error fetching products: ", error);
//     }
//   };

//   fetchProducts();
// }, []);




// const CartHandler = async (product) => {
// if (!currentUser) {
//   console.error('No user is signed in');
//   return;
// }

// const userCartRef = collection(db, 'users', currentUser.uid, 'cartItems');

// try {
//   const cartItemDoc = doc(userCartRef, product.id);
//   const docSnap = await getDoc(cartItemDoc);

//   if (docSnap.exists()) {
//     // If the item already exists in the user's cart, increment the quantity
//     await updateDoc(cartItemDoc, {
//       quantity: increment(1)
//     });
//   } else {
//     // If the item does not exist, add it to the user's cart
//     await setDoc(cartItemDoc, {
//       ...product,
//       quantity: 1
//     });
//   }

//   // Fetch the updated cart items and update state
//   const querySnapshot = await getDocs(userCartRef);
//   const updatedCartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   setCartItems(updatedCartItems);
//   setCartCount(updatedCartItems.reduce((acc, item) => acc + item.quantity, 0));
//   setTotal(updatedCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
// } catch (error) {
//   console.error('Error updating cart:', error);
// }
// };

// // Fetch user-specific cart items when the component mounts
// useEffect(() => {
// if (!currentUser) return;

// const fetchCartItems = async () => {
//   const userCartRef = collection(db, 'users', currentUser.uid, 'cartItems');
//   try {
//     const querySnapshot = await getDocs(userCartRef);
//     const cartItemsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setCartItems(cartItemsArray);
//     setCartCount(cartItemsArray.reduce((acc, item) => acc + item.quantity, 0));
//     setTotal(cartItemsArray.reduce((acc, item) => acc + (item.price * item.quantity), 0));
//   } catch (error) {
//     console.error('Error fetching cart items:', error);
//   }
// };

// fetchCartItems();
// }, [currentUser]);



// useEffect(() => {
//   localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
//   setTotal(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0));
 
// }, [cartItems]);



// return (
//   <div className="App">
//     <UserProvider>
//       <Header cartCount={cartCount} cartItems={cartItems} />
//       <Search setSearchQuery={setSearchQuery} />
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetailsWrapper />} />
//         <Route path="/" element={<ProductsList cartItems={cartItems} setCartItems={setCartItems} CartHandler={CartHandler} searchQuery={searchQuery} products={products} />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/cart" element={<CartDetails cartItems={cartItems} total={total} />} />
//         <Route path="/login" element={<LoginandRegister />} />
//         <Route path="/signin" element={<PasswordSignIn />} />
//         <Route path="/signup" element={<PasswordSignUp />} />
//         <Route path="/signout" element={<PasswordSignOut Header={Header} />} />
//       </Routes>
//       <Footer />
//     </UserProvider>
//   </div>
// );
// }

// const ProductDetailsWrapper = () => {
// const { id } = useParams();
// return id ? <ProductDetails id={id} /> : null;
// };


// const ProductsList = ({ cartItems, setCartItems, CartHandler, IncreaseItem, searchQuery, products }) => {
// const filteredProducts = products.filter(product =>
//   product.title && searchQuery
//     ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     : true
// );

// const productsdataelements = filteredProducts.map(product => (
//   <Products
//     key={product.id}
//     {...product}
//     cartItems={cartItems}
//     setCartItems={setCartItems}
//     CartHandler={CartHandler}
//     IncreaseItem={IncreaseItem}
//   />
// ));

// return <>{productsdataelements}</>;
// };

// export default App;