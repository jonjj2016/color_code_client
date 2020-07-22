import React from 'react';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const userPalette = ({ palette, onCopy }) => {
  const style = {
    display: 'flex',
    height: '50vh',
    padding: '0',
    overflow: 'hidden',
  };
  return (
    <Segment style={style}>
      {palette.colors.map((color, index) => {
        console.log(color);
        return (
          <CopyToClipboard onCopy={() => onCopy(color.color)} text={color.color} key={index}>
            <ColorBox color={color.color} />
          </CopyToClipboard>
        );
      })}
    </Segment>
  );
};

const ColorBox = styled.div`
  margin: 0;
  padding: 0;
  width: 300%;
  height: 100%;
  margin-right: -3px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
    transition: 300ms;
    scale: 1.2;
    transform-origin: right;
    &:nth-child(1) {
      transform-origin: left;
    }
  }
`;
export default userPalette;
