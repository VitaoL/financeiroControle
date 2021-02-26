import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import '../css/Redirect.css';

const Redirect = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      if(localStorage.getItem('userFinancias')) return history.push('/controle')
      history.push('/login');
    }, 5000);
  });
  return (
    
    <div className="container">
      <h1>Seja Bem-vinda(o),</h1>
      <h4>Aqui você encontrara o controle financeiro perfeito.</h4>
      <h3>Aguarde alguns instantes.</h3>
    </div>
  );
};

export default Redirect;
