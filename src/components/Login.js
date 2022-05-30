import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {

  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      )
      console.log(user);
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
    console.log(loginEmail.current.value, loginPassword.current.value);
  }

  return (
    <div className="login-container">
      <div className="login">
        <h3>Se connecter</h3>
        <form className='form-login' onSubmit={(e => handleLogin(e))}>
          <input type="email" placeholder="Email" required ref={loginEmail} />
          <input type="password" placeholder="Mot de passe" required ref={loginPassword} />
          <input type="submit" value="Connexion" />
          <span>{error && "Le mail ou le mot de passe ne correspondent pas"}</span>
        </form>
      </div>
    </div>
  );
};

export default Login;