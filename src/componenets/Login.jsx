import React,{useState} from 'react';
import './Login.css'; 
import logo2 from'../assets/logo2.png';
import { useNavigate } from 'react-router-dom';;







const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // pour gérer les erreurs
  const navigate = useNavigate();
  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter une validation de formulaire ici avant de rediriger
    if (email  && password) {
      // Rediriger vers la page des paramètres avec les données
      navigate('/parametres', { state: { email} });
    } else {
      setError("All fields are required.");
    }
  };


      
    return (
<div className="container">
    <div className="left">
      <div className="logo-container">
        <img src={logo2} alt="LISTIT Logo" className="logo"/>
        <h1 className="animated-title">
          <span>L</span><span>I</span><span>S</span><span>T</span><span>I</span><span>T</span>
        </h1>
      </div>
    </div>
    <div className="right">
      <div className="form-container">
        <h2>Welcome Back!</h2>
        <p className="tagline">Log in to manage your tasks with ease</p>
        {error && <p className="error-message">{error}</p>} 
        <form action="#" onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"  required   onChange={(e) => setEmail(e.target.value)}/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required   onChange={(e) => setPassword(e.target.value)}/>

          <a href="Signup.jsx" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <p className="signup-text">Don't have an account? <a href="Signup.jsx" className="sign-up">Sign up</a></p>
      </div>
    </div>
  </div>
  
     
    );
}

export default Login;
