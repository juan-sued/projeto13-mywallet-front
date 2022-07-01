import styled from 'styled-components';

export default function ButtonOnlyWords({ children }) {
  return <ButtonOnlyWords_Style>{children}</ButtonOnlyWords_Style>;
}

const ButtonOnlyWords_Style = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin: 36px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  :hover {
    cursor: pointer;
  }
`;
