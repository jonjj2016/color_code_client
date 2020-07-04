import styled from 'styled-components';

export const Palette = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .Palette-colors {
    height: 96%;
    display: flex;
  }
  .portal {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 50%;
  }
`;
