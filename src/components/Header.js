import React from "react";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import '../Header.css'
import { useUser } from "./userContext";

// destructuring is very important in code development
const Header = ({ id, title, content, price, colors, count, src, CartHandler, IncreaseItem , cartCount,cartItems }) => {

    const { user } = useUser();
    const navigate = useNavigate()
    const handleCartClick = () => {
        navigate('/cart');
      };

//    we need to make it a state so that it can be added 
 const [toggle, setToggle] = useState(false)
//  we have to write a function that when we click would chnage the state of the toggle
     function changeToggle(){
        setToggle(prevToggle => !prevToggle)
        console.log("hii")
        const product = { id, title, content, price, colors, count, src };
     }
    
   
    

    
   
 return ( 
       <header>
        <div className="menu" onClick={changeToggle}>
       <img src='../image/menu.png' alt='menu' width={20}/>
        </div>
        <div className="logo">
            <h1><Link to="/"> Nike</Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about"> About</Link></li>
                {/* make it clickable */}
                {/* so that it redirects to the signout */}
                {user ? (
                        <li className="products--username" onClick={()=>navigate("/signout")}><span> {user.username}</span></li>
                    ) : (
                        <li><Link to="/login">Login / Register</Link></li>
                    )}
                <li className="close" onClick={changeToggle}>
            <img src= "../image/close.png" alt="close" width={20} />
                </li>
            </ul>
            <div className="nav-cart">
          <span>{cartCount}</span>
  
          <img onClick={handleCartClick} 
           style={{ cursor: 'pointer' }} src="../image/shopping-cart.png" alt="cart"  width={20}  />
        
            </div>
        </nav>
       </header>
      );
}
 
export default Header;