import React from 'react';
import '../Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-logo">
          <img src="../image/sport.png" alt="Nike Logo" className="logo-img" />
          <p className="logo-text">Just Do It.</p>
        </div>
        

        <div className='foooter--cleats'>
            <p>Shop</p>
            <p>House</p>
            <p>Collection</p>
        </div>

       
        <div className="footer-social">
          <ul className="social-links">
            <p>Social Links</p>
        <img className='facebook' src='../image/facebook.png' alt='facebook'/>
        <img className='twitter' src="../image/twitter.png" alt="twitter" />
        <img className='youtube' src="../image/youtube.png" alt="youtube" />
        <img className='instagram' src="../image/instagram.png" alt="instagram" />
          </ul>
        </div>

        
      </div>


      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} \Nike Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
