import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonOnlyWords from '../../shared/ButtonOnlyWords';
import H1 from '../../shared/H1';
import Main from '../../shared/Main';
import InputsLogin from './InputsLogin';

export default function Login_Page() {
  return (
    <Main margin_top={159}>
      <H1>MyWALLET</H1>
      <InputsLogin />
      <Link to="/sign-up">
        <ButtonOnlyWords>Não possui uma conta? Cadastre-se!</ButtonOnlyWords>
      </Link>
    </Main>
  );
}
