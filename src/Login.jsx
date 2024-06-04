import React, { useState, useEffect } from 'react';
import './login.css';
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from './firebase/firebase';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); 
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      loginUser(username, user.email, null);
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      loginUser(user.displayName, user.email, user.photoURL);
      localStorage.setItem('user', JSON.stringify({ username: user.displayName, email: user.email, profileImage: user.photoURL }));
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = (username, email, profileImage) => {
    setUser({ username, email, profileImage });
    localStorage.setItem('user', JSON.stringify({ username, email, profileImage }));
  };

  const handleLogout = async () => {
    setLoading(true); 
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('user'); 
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (user) {
    return (
      <div className="home-page">
        <h2>Welcome</h2>
        {user.profileImage && <img src={user.profileImage} alt="Profile" />}
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" name="username" placeholder={user.username} />
        <label htmlFor="usermail">Email</label>
        <input type="text" id="usermail" name="usermail" placeholder={user.email} />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
        <div className='or'><hr />Or <hr /></div>
        <div className="google-login">
          <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
