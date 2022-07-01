import { useState, useContext } from 'react';
import Header from '../../shared/Header';
import Main from '../../shared/Main';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
//import react

import UserContext from '../../contexts/UserContext';

export default function New_Exit_Page() {
  const { objLoginResponse } = useContext(UserContext);
  const URL = 'http://localhost:5000/transactions/exit';
  const navigate = useNavigate();
  const [stateButton, setStateButton] = useState('habilitado');

  const [inputDescription, setInputDescription] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [objNewEntry, setObjNewEntry] = useState({
    user: {
      name: objLoginResponse.user.name,
      event: '',
      price: ''
    }
  });

  const config = {
    headers: objLoginResponse.headers
  };

  function createNewExit(event) {
    event.preventDefault();
    setStateButton('loading');

    // ===
    objNewEntry.user.price = inputValue;
    objNewEntry.user.event = inputDescription;
    // ===

    setObjNewEntry({ ...objNewEntry });

    const promise = axios.post(URL, objNewEntry, config);

    promise.then(promise => {
      navigate('../home', { replace: true });
    });
    promise.catch(err => {
      console.log(err.response.data);
      setStateButton('err');
    });
    setInputValue('');
    setInputValue('');
  }

  if (stateButton === 'err' && inputValue.length > 0) {
    setStateButton('habilitado');
  }

  return (
    <>
      <Header title={'Nova saída'} />
      <Main>
        <ContainerFormClass>
          <form onSubmit={createNewExit}>
            <InputClass
              placeholder="Valor"
              type="number"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              required
              disabled={stateButton === 'loading' ? 'disabled' : ''}
            />
            <InputClass
              placeholder="Descrição"
              type="text"
              value={inputDescription}
              onChange={e => setInputDescription(e.target.value)}
              required
              disabled={stateButton === 'loading' ? 'disabled' : ''}
            />
            <LoginButton
              fontsize={stateButton === 'err' ? '12px' : '14px'}
              backgroundcolor={
                stateButton === 'err'
                  ? '#d4d4d4'
                  : stateButton === 'loading'
                  ? '#ba69db'
                  : '#A328D6'
              }
              type="submit"
              disabled={stateButton === 'loading' ? 'disabled' : ''}
            >
              {stateButton === 'err' ? (
                'Email ou/e senha inválido(s)!'
              ) : stateButton === 'loading' ? (
                <ContainerLoading>
                  <ThreeDots color="white" height={40} width={40} />
                </ContainerLoading>
              ) : (
                'ENTRAR'
              )}
            </LoginButton>
          </form>
        </ContainerFormClass>
      </Main>
    </>
  );
}

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

const LoginButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: ${props => props.fontsize};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 195px;
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
  color: #000000;
  ::placeholder {
    color: #000000;
  }
`;
