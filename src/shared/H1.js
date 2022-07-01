import styled from 'styled-components';

function H1({ children }) {
  return <H1_Style>{children}</H1_Style>;
}

export default H1;

const H1_Style = styled.h1`
  font-family: 'Saira Stencil One';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  margin-bottom: 8px;
  color: #ffffff;
`;
