import React, { useState } from 'react';
import '../css/Financias.css';
import ListSaldo from '../components/ListSaldo';
import { postTransitions } from '../services/FinanciasApi.js';

const Financias = () => {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [control, setControl] = useState('');
  const [investment, setInvestment] = useState('bill');
  const { id } = JSON.parse(localStorage.getItem('userFinancias'));
  let alvo = 0;
  const handleSubmit = async (event) => {
    alvo++;
    event.preventDefault();
    let num = value;
    if (control === 'payment') {
      num = value * -1;
    }
    try {
      await postTransitions(description, num, investment, id);
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
            onChange={(e) => setValue(parseFloat(e.target.value))}
            value={parseFloat(value)}
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
            onClick={(e) => {
              if (investment === 'investment') return setInvestment('bill');
              return setInvestment(e.target.value);
            }}
          />
          <label htmlFor="investment">investment</label>
        </div>
        <input className="submit-login" type="submit" value="Submit" />
      </form>
      <ListSaldo alvo={alvo} />
    </div>
  );
};
export default Financias;
