import Main from '../../shared/Main';
import styled from 'styled-components';
import NavigateMenu from './NavigateMenu';
import Header from '../../shared/Header';
import iconExit from '../../assets/iconExit.svg';
import RegisterTransactions from './RegisterTransactions';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
export default function Home_Page() {
  const { objHomeResponse, objLoginResponse } = useContext(UserContext);

  return (
    <Main>
      <Header
        title={objHomeResponse === null ? '' : `Olá, ${objLoginResponse.user.name}`}
      >
        <img src={iconExit} alt="a" />
      </Header>
      <RegisterTransactions />
      <NavigateMenu />
    </Main>
  );
}
