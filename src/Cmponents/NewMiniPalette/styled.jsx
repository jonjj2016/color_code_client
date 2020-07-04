import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  ${({ formodal }) => formodal && 'height:40vh;width:50vw'};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ micro }) => micro && `display:inline-block`};
`;
export const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  letter-spacing: 2px;
  color: #666;
  font-weight: 700;
  word-spacing: 0.3rem;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 2;
  transition: 400ms;
  opacity: 0;
  .my_icon {
    color: black;
    height: 2rem;
    width: 2rem;
    font-size: 1.2rem;
    padding: 1rem;
    height: 3rem;
    width: 3rem;
    box-sizing: border-box;
  }
  .delete {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .miniPaletteInfo {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .miniPlaetteTitle {
      position: absolute;
      width: 100%;
      bottom: 0;
      margin-bottom: 0.5rem;
      text-align: center;
    }
  }
`;
export const MiniPaletteWrapper = styled.div`
  height: 200px;
  width: 100%;
  ${({ micro }) => micro && `display:inline-block`};
  cursor: pointer;
  display: flex;
  transition: 1000ms;
  position: relative;
  ${({ micro }) =>
    micro &&
    ` height: 100px;
  width: 140px`};
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;
export const Horizontal = styled.div`
  height: 200px;
  width: 100%;
  cursor: pointer;
  display: flex;
  transition: 1000ms;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  ${({ micro }) =>
    micro &&
    ` height: 100px;
  width: 140px`};
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;
export const Circular = styled.div`
  height: 200px;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 4px;
  align-items: center;
  padding: 5px 20px;
  overflow: hidden;
  ${({ micro }) =>
    micro &&
    ` height: 100px;
    padding: 5px ;
  width: 140px`};
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;
export const Square = styled.div`
  height: 200px;
  width: 100%;
  cursor: pointer;
  transition: 1000ms;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 4px;
  align-items: center;
  padding: 5px;

  overflow: hidden;
  ${({ micro }) =>
    micro &&
    ` height: 100px;
  width: 140px`};
  &:hover {
    ${Info} {
      opacity: 1;
    }
  }
`;

export const MiniColorBox = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ color }) => color};
  position: relative;
  box-shadow: inset -8px 3px 18px -6px rgba(0, 0, 0, 0.17);
  ${({ direction }) =>
    direction === 'square' &&
    `box-shadow:  4px 4px 15px 0px rgba(0, 0, 0, 0.17), 29px 33px 0px 20px rgba(0,0,0,0.01);
}`};

  ${({ direction }) => direction === 'circle' && ` border-radius:100% ;box-shadow:  4px 4px 15px 0px rgba(0, 0, 0, 0.17), 29px 33px 0px 20px rgba(0,0,0,0.01)`};
  ${({ micro, direction }) => !micro && direction === 'circle' && `max-height:100px`};
  ${({ direction }) => direction === 'horizontal' && `box-shadow:  4px 4px 15px 0px rgba(0, 0, 0, 0.17), 29px 33px 0px 20px rgba(0,0,0,0.01)`};
`;

//
//45deg
export const MiniPaletteGallery = styled.div`
  width: 400px;
  box-sizing: border-box;
  padding: 2rem;
  /* width: 600px;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  grid-gap: 4px; */
  /* display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid red; */
`;
