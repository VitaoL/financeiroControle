const ListSaldo = (props) => {
  const { array } = props;
  const { name } = JSON.parse(localStorage.getItem('userFinancias'));
  return (
    <div className="card-div">
      <div className="header-account">
        <p>{name}</p>
        <p>saldo: </p>
      </div>
      {array && array.length > 0 && (
        <div>
          {array
            .map(({ value, description, control }, index) => {
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
                      <p className={control}>
                        R${' '}
                        {value.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </p>
                      <div className="trans">
                        <span>24/04/21</span>
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
