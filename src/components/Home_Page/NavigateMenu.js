import styled from 'styled-components';
import icon_Entry from '../../assets/icon_Entry.svg';
import icon_T_Exit from '../../assets/icon_T_Exit.svg';
import ButtonNavigateMenu from '../../shared/ButtonNavigateMenu';
import { Link } from 'react-router-dom';

export default function NavigateMenu() {
  return (
    <NavigateMenu_Style>
      <Link
        to="/new_entry"
        style={{
          textDecoration: 'none',
          color: 'black',
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          paddingRight: '10px',
          marginLeft: '6%'
        }}
      >
        <ButtonNavigateMenu title={'Nova Entrada'} icon={icon_Entry} />
      </Link>

      <Link
        to="/new_exit"
        style={{
          textDecoration: 'none',
          color: 'black',
          width: '100%',
          display: 'flex',
          paddingLeft: '10px',
          marginRight: '6%'
        }}
      >
        <ButtonNavigateMenu title={'Nova saída'} icon={icon_T_Exit} />
      </Link>
    </NavigateMenu_Style>
  );
}

const NavigateMenu_Style = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 142px;
  padding: 13px 0 13px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #8c11be;
`;
