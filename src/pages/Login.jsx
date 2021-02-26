import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postLogin } from '../services/FinanciasApi.js';
import '../css/Login.css';

function Login() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem(
      'userFinancias',
      JSON.stringify({ name: name, email: email })
    );
    try {
      await postLogin(email, name, password);
      localStorage.setItem(
        'userFinancias',
        JSON.stringify({ name: name, email: email })
      );
      history.push('/controle')
    }
    catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container-login">
      <form className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            className="input-login"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            className="input-login"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            className="input-login"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        <input className="submit-login" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Login;
