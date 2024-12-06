import React, { useState } from 'react';
import './Signup.css';
import logo2 from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // pour gérer les erreurs
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter une validation de formulaire ici avant de rediriger
    if (email && name && password) {
      // Rediriger vers la page des paramètres avec les données
      navigate('/parametres', { state: { email, name } });
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo-container">
          <img src={logo2} alt="LISTIT Logo" className="logo" />
          <h1 className="animated-title">
            <span>L</span><span>I</span><span>S</span><span>T</span><span>I</span><span>T</span>
          </h1>
        </div>
      </div>
      <div className="right">
        <div className="form-container">
          <h2>Welcome Back!</h2>
          <p className="tagline">Sign up to create an account</p>

          {error && <p className="error-message">{error}</p>} {/* Message d'erreur */}

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="login-btn">Sign up</button>
          </form>

          <p className="signup-text">
            Have an account? <a href="/login">Log in here</a> {/* Lien vers la page de connexion */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
