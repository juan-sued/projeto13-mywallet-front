import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import Loading from '../../shared/Loading';

function Transaction({ date, event, price, type }) {
  return (
    <Transaction_Style>
      <div className="container">
        <p className="date">{date}</p>
        <p className="event">{event}</p>
      </div>
      <p className={type === 'exit' ? 'price exit' : 'price'}>
        {price.toFixed(2).replace('.', ',')}
      </p>
    </Transaction_Style>
  );
}

export default function RegisterTransactions() {
  const { objLoginResponse, objHomeResponse, setObjHomeResponse } =
    useContext(UserContext);

  const URL = 'https://p13-mywallet.herokuapp.com/home';
  const config = {
    headers: objLoginResponse.headers
  };
  console.log(config);
  useEffect(() => {
    const promise = axios.get(URL, config);
    promise.then(response => {
      setObjHomeResponse(response.data);
    });
    promise.catch(err => {});
  }, []);

  return (
    <RegisterTransactions_Style>
      <div className="containerTransactions">
        {objHomeResponse === null ? (
          <Loading />
        ) : objHomeResponse !== null && objHomeResponse.transactions.length !== 0 ? (
          objHomeResponse.transactions.map((transaction, index) => (
            <Transaction
              key={index}
              date={transaction.time}
              event={transaction.event}
              price={transaction.price}
              type={transaction.type}
            />
          ))
        ) : (
          'Não há registro de entrada ou saída'
        )}
      </div>

      <span className="balanceView">
        <p className="balance">Saldo:</p>
        {objHomeResponse === null ? (
          <Loading height={20} width={20} marginLeft={'180px'} />
        ) : (
          <p
            className={
              objHomeResponse.balance[0] === '-' ? 'balanceNegative' : 'balancePositive'
            }
          >
            {Number(objHomeResponse.balance).toFixed(2).replace('.', ',')}
          </p>
        )}
      </span>
    </RegisterTransactions_Style>
  );
}

const Transaction_Style = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;

  div.container {
    display: flex;
    width: 220px;
    justify-content: start;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }

  p.date {
    color: #c6c6c6;
    margin-right: 10px;
    width: 60px;
  }

  p.event {
    color: #000000;
  }

  p.price {
    color: #03ac00;
  }
  p.exit {
    color: #c70000;
  }
`;

const RegisterTransactions_Style = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 88%;
  height: 440px;
  margin-bottom: 140px;
  padding: 0px 12px 20px 12px;

  div.containerTransactions {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 400px;
  }

  span.balanceView {
    width: 330px;
    background-color: #ffffff;

    height: 40px;
    position: relative;
    right: 12px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px -5px 15px #c5c5c5;

    padding: 12px;
    p.balance {
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #000000;
    }
    p.balancePositive {
      color: #03ac00;
    }
    p.balanceNegative {
      color: #c70000;
    }
  }
`;
