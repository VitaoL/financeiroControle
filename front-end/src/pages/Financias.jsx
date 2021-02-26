import React, { useState } from 'react';
import '../css/Financias.css';
import ListSaldo from '../components/ListSaldo';
import { postTransitions } from '../services/FinanciasApi.js';

const Financias = () => {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [control, setControl] = useState('');
  const [investment, setInvestment] = useState('bill');
  const { id } = JSON.parse(localStorage.getItem('userFinancias'));
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (control === 'payment') {
      setValue(value * -1)
    }
    try {
      await postTransitions({description, value, investment, userId: id})
      setValue('');
      setDescription('');
      setInvestment('bill');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="container-financias">
      <form className="form-financias" onSubmit={handleSubmit}>
        <div className="div-checkmark">
          <p>Choose what you want to do: </p>
          <div>
            <input
              className="checkmark"
              onChange={(e) => setControl(e.target.value)}
              id="deposit"
              value="deposit"
              type="radio"
              name="control"
              required
            />
            <label htmlFor="deposit">deposit</label>
          </div>
          <div>
            <input
              className="checkmark"
              onChange={(e) => setControl(e.target.value)}
              id="payment"
              value="payment"
              type="radio"
              name="control"
              required
            />
            <label htmlFor="payment">payment</label>
          </div>
        </div>
        <label htmlFor="value">
          Value:
          <input
            className="input-login"
            type="number"
            name="value"
            onChange={(e) => setValue(e.target.value)}
            value={value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            required
          />
        </label>
        <label htmlFor="description">
          description:
          <input
            maxLength="50"
            className="input-login"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <div>
          <input
            type="checkbox"
            name="investment"
            value="investment"
            checked={investment == "investment"}
            onChange={(e) => setInvestment(e.target.value)}
          />
          <label htmlFor="investment">investment</label>
        </div>
        <input className="submit-login" type="submit" value="Submit" />
      </form>
      <ListSaldo array={array} />
    </div>
  );
};
export default Financias;
