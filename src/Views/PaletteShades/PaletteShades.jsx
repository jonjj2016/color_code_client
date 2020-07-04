import React, { useEffect, useState } from 'react';
import './_PaletteShades.scss';
import ColourBox from '../../Cmponents/ColorBox2/ColorBox';
import { ColorBox } from '../../Cmponents/ColorBox2/Styled_ClorBox';
import Palette from '../../Cmponents/Palette/Palette';
import { useHistory } from 'react-router-dom';
import MyMenu from '../../Cmponents/Menu/Menu.Container';
import DropDown from '../../Cmponents/DropDown/DropDown';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';

const PaletteShades = ({ palette, color }) => {
  const { goBack } = useHistory();
  const [state, setState] = useState({
    format: 'hex',
  });

  const onChange = (e, { value }) => {
    setState({ ...state, format: value });
  };
  return (
    <div className='PaletteShades'>
      <MyMenu>
        <MenuItem onClick={() => goBack()}>
          <span>
            <Icon name='reply' />
            {'  '}
            <span style={{ color: 'grey', textTransform: 'uppercase', letterSpacing: '2px' }}>{color}</span>
          </span>
        </MenuItem>
        <Menu.Menu position='right'>
          <DropDown onChange={onChange} />
        </Menu.Menu>
      </MyMenu>
      <div className='Palette-colors'>
        {palette.map((shade, index) => {
          return <ColourBox key={index} fromShades background={shade[state.format]} name={shade.name} id={shade.id} />;
        })}
      </div>
    </div>
  );
};

export default PaletteShades;
