import styled from 'styled-components';

export default function Main({ children, margin_top }) {
  return <Main_Style margin_top={margin_top}>{children}</Main_Style>;
}
const Main_Style = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.margin_top}px;
`;
