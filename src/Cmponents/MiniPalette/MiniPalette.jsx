import React from 'react';
import { Card } from 'semantic-ui-react';
import './_MiniPalette.scss';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const MiniPalette = ({ modal, palette }) => {
  console.log(palette);

  const { push } = useHistory();

  const onRouteChange = () => !modal && push(`/palette/${palette.id}`);

  const renderer = () => {
    return (
      <div onClick={onRouteChange} className='wrapper'>
        <div className='info'>
          {false && (
            <React.Fragment>
              {' '}
              <div className='delete my_icon'>
                <Icon name='trash' />
              </div>
              <div className='edit my_icon'>
                <Icon name='edit' />
              </div>
            </React.Fragment>
          )}
          <div className='miniPaletteInfo'>
            <div className='miniPlaetteTitle'>{palette.paletteName}</div>
          </div>
        </div>
        {palette.colors.map((color, index) => {
          return <div key={index} style={{ backgroundColor: color.color }} className='miniColorBox'></div>;
        })}
      </div>
    );
  };
  return (
    <Card className='item' color='purple'>
      {renderer()}
      <Card.Content extra>
        <div className='extra'>
          <span>
            <Icon name='heart outline' />
            22 likes
          </span>
          <span>
            <Icon name='clone outline' />
          </span>
        </div>
      </Card.Content>
    </Card>
  );
};

export default MiniPalette;
