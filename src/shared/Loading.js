import styled from 'styled-components';

import { ThreeDots } from 'react-loader-spinner';

export default function Loading({ height, width }) {
  return (
    <ContainerLoading>
      <ThreeDots color="#FF4" height={height} width={width} />
    </ContainerLoading>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;
