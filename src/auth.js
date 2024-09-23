import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const initializeAuth = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);  // Set the current user in the context when signed in
      console.log('Current user:', user);
    } else {
      setUser(null);  // Set to null when no user is signed in
      console.log('No user is signed in');
    }
  });
};

export { auth, initializeAuth };

