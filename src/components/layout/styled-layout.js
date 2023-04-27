import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: calc(100vw - 100px);
  max-width: 1116px;

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 320px) {
    max-width: 288px;
    width: 100%;
  }
`;

export const ColumnContainer = styled(Container)`
  flex-direction: column;
`;
