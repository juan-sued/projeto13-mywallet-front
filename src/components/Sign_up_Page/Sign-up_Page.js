import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

//import react
import H1 from '../../shared/H1';
import Main from '../../shared/Main';
import InputsRegister from './InputsRegister';
import ButtonOnlyWords from '../../shared/ButtonOnlyWords';
//import components

export default function Sign_up_Page() {
  return (
    <Main margin_top={95}>
      <H1>MyWALLET</H1>
      <InputsRegister />
      <Link to="/">
        <ButtonOnlyWords>Já tem uma conta? Entre agora!</ButtonOnlyWords>
      </Link>
    </Main>
  );
}
