import { signOut, getAuth } from "firebase/auth";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './userContext';


// import { signOut, getAuth } from "firebase/auth";

const PasswordSignOut = () => {
  // Instantiate the auth service SDK
  const auth = getAuth();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful, navigate to home page
      setUser(null);
      navigate('/');
    
      
    }).catch((error) => {
      // An error happened
      console.error('Sign out error', error);
    });
  };

  return (
    <section className='home'>
      <div className='home__container'>
        <button onClick={handleSignOut}>Sign Out</button>   
      </div>
    </section>
  );
};

export default PasswordSignOut;
