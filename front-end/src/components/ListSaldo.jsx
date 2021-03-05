import React, { useState, useEffect } from 'react';
import { getTransitions } from '../services/FinanciasApi.js';
import dateFormat from 'dateformat';
// import  {moment} from 'moment';

const ListSaldo = (props) => {
  function dataFormatada(data) {
    return dateFormat(data, "dd/mm/yyyy");
  }
  const [array, setArray] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const { name, id } = JSON.parse(localStorage.getItem('userFinancias'));
  useEffect(() => {
    getTransitions(id).then(({ data }) => {
      setArray(data.allTransfer);
      setSaldo(data.totalSaldo);
    });
  }, [props, id]);
  return (
    <div className="card-div">
      <div className="header-account">
        <p>{name}</p>
        <p>
          {saldo &&
            saldo.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}{' '}
        </p>
      </div>
      {array && array.length > 0 && (
        <div>
          {array
            .map(({ value, description, createdAt }, index) => {
              return (
                <div key={`${description} ${index}`}>
                  {value < 0 && (
                    <div className="card-payment">
                      <p>
                        {value.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <div className="trans">
                        <span>{dataFormatada(createdAt)}</span>
                        <span>{description}</span>
                      </div>
                    </div>
                  )}
                  {value > 0 && (
                    <div className="card-deposit">
                      <p>
                        {value.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <div className="trans">
                        <span>{dataFormatada(createdAt)}</span>
                        <span>{description}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default ListSaldo;
