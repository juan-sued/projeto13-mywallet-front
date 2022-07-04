import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
//import react

import Loading from '../../shared/Loading';
//import components

export default function InputsRegister() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const [objNewRegister, setObjNewRegister] = useState({
    email: '',
    name: '',
    password: ''
  });

  const URL = 'https://p13-mywallet.herokuapp.com/sign-up';

  const [stateButton, setStateButton] = useState('habilitado');

  function newRegister(event) {
    event.preventDefault();

    if (inputConfirmPassword !== inputPassword) {
      setInputConfirmPassword('');
      setStateButton('passwordNoEquals');
      return;
    }
    setStateButton('loading');
    // ===
    objNewRegister.email = inputEmail;
    objNewRegister.name = inputName;
    objNewRegister.password = inputPassword;
    // ===

    setObjNewRegister({ ...objNewRegister });

    const promise = axios.post(URL, objNewRegister);

    promise.then(() => {
      navigate('../', { replace: true });
    });
    promise.catch(err => {
      console.log('esse é o erro:', err);
      setStateButton('err');
    });
    setInputEmail('');
    setInputName('');
    setInputPassword('');
    setInputConfirmPassword('');
  }

  if (
    (stateButton === 'err' && inputEmail.length > 0) ||
    (stateButton === 'passwordNoEquals' && inputConfirmPassword.length > 0)
  ) {
    setStateButton('habilitado');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newRegister}>
        <InputClass
          placeholder="nome"
          type="text"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
          required
        />
        <InputClass
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          required
        />
        <InputClass
          placeholder="Senha"
          type="password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          required
        />
        <InputClass
          placeholder="Confirme a senha"
          type="password"
          value={inputConfirmPassword}
          onChange={e => setInputConfirmPassword(e.target.value)}
          required
        />

        <RegisterButton
          backgroundcolor={
            stateButton === 'err'
              ? '#d4d4d4'
              : stateButton === 'loading'
              ? '#ba69db'
              : stateButton === 'passwordNoEquals'
              ? '#ba69db'
              : '#A328D6'
          }
          type="submit"
        >
          {stateButton === 'err' ? (
            'Usuário já cadastrado!'
          ) : stateButton === 'loading' ? (
            <Loading height={20} width={20} />
          ) : stateButton === 'passwordNoEquals' ? (
            'Senhas diferentes'
          ) : (
            'Cadastrar'
          )}
        </RegisterButton>
      </form>
    </ContainerFormClass>
  );
}

const RegisterButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: 20.976px;
  color: white;
  font-family: 'Raleway', sans-serif;
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
    height: 325px;
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Raleway', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #000000;
  ::placeholder {
    color: #dbdb;
  }
`;
