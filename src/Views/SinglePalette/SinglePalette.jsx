import React, { useState } from 'react';
import './_SinglePalette.scss';
import DragablePalette from '../../Cmponents/Drag_List/List';
import { Button, Grid, Popup, Icon } from 'semantic-ui-react';

const SinglePalette = ({ role, palette, controllers, own_palettes, liked_palettes }) => {
  const [state, setState] = useState({ colors: palette.colors });

  let show = false;
  if (own_palettes && liked_palettes) {
    const my_palettes = [...own_palettes, ...liked_palettes];
    show = Boolean(my_palettes.find((el) => el._id === palette._id));
  }
  console.log(show);

  const renderer = () => {
    return (
      <React.Fragment>
        <Popup
          position='left center'
          size='tiny'
          trigger={
            <Button onClick={controllers.onModify} secondary icon style={{ position: 'absolute', top: '50%', right: '-2px', zIndex: 10 }}>
              <div style={{ fontSize: '1.4rem', padding: '.5rem 1rem' }}>Generate</div>
              {/* <Icon style={{ padding: '1rem', display: 'inline-block' }} size='big' name='settings'></Icon> */}
            </Button>
          }
          content='By Generating you can edit and save the copy of this palette.'
          position='top center'
          size='tiny'
          inverted
          // on='click'
        ></Popup>
        {palette ? <DragablePalette state={state} setState={setState} colors={palette.colors} /> : null}
      </React.Fragment>
    );
  };
  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default SinglePalette;
