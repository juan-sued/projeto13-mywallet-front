import styled from 'styled-components';

export default function ButtonNavigateMenu({ icon, title }) {
  return (
    <ButtonNavigateMenu_Style>
      <img src={icon} alt="" />
      <p>{title}</p>
    </ButtonNavigateMenu_Style>
  );
}

const ButtonNavigateMenu_Style = styled.button`
  border: none;
  min-width: 100%;
  height: 114px;
  background: #a328d6;
  border-radius: 5px;
  max-height: 114px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;

    width: 20px;

    color: #ffffff;
  }

  :hover {
    cursor: pointer;
    background-color: #a328f2;
  }
`;
