import React, { useState } from 'react';
import '../css/Financias.css';

const Financias = () => {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [control, setControl] = useState('');
  const { name } = JSON.parse(localStorage.getItem('userFinancias'));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setArray([...array, { control, description, value }]);
    setValue('');
    setDescription('');
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
            value={value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
        <input className="submit-login" type="submit" value="Submit"></input>
      </form>
      <div className="card-div">
        <div className="header-account">
          <p>{name}</p>
          <p>saldo: </p>
        </div>
        {array && array.length > 0 && (
          <div>
            {array.map(({ value, description, control }, index) => {
              return (
                <div key={`${description} ${index}`}>
                  {control === 'payment' && (
                    <div className="card-payment">
                      <p className={control}>R$ {value * -1}</p>
                      <div className="trans">
                        <span>24/04/21</span>
                        <span>{description}</span>
                      </div>
                    </div>
                  )}
                  {control === 'deposit' && (
                    <div className="card-deposit">
                      <p className={control}>R$ {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                      <div className="trans">
                        <span>24/04/21</span>
                        <span>{description}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            }).reverse()}
          </div>
        )}
      </div>
    </div>
  );
};
export default Financias;
