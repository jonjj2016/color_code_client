import React, { useState } from 'react';
import './_SinglePalette.scss';
import DragablePalette from '../../Cmponents/Drag_List/List';
import { Button, Grid, Popup, Icon } from 'semantic-ui-react';

const SinglePalette = ({ role, palette, controllers, own_palettes, liked_palettes }) => {
  const [state, setState] = useState({ colors: palette.colors });
  const popupStyle = {
    padding: '3rem',
    boxSizing: 'border-box',
    fontSize: '1.2rem',
  };

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
            <Button secondary icon style={{ position: 'absolute', top: '50%', right: '-2px', zIndex: 10 }}>
              <Icon size='big' name='settings' />
            </Button>
          }
          on='click'>
          <Grid columns='1' divided>
            <Grid.Column>
              <Popup style={popupStyle} trigger={<Button onClick={controllers.onModify} basic content='Modify' fluid />} content='By Modifying you can edit and save the copy of this palette.' position='top center' size='tiny' inverted />
            </Grid.Column>
            {(show || role === 'admin') && (
              <React.Fragment>
                <Grid.Column>
                  <Popup style={popupStyle} trigger={<Button onClick={controllers.onEdit} color='orange' content='Edit Palette' fluid />} content='Warrning. By Editting you are changing the Original Palette!!!' position='top center' size='tiny' inverted />
                </Grid.Column>
                <Grid.Column>
                  <Popup style={popupStyle} trigger={<Button onClick={controllers.onDelete} fluid color='red' content='Delete' fluid />} content='Do you realy want to delete this palette ?' position='top center' size='tiny' inverted />
                </Grid.Column>
              </React.Fragment>
            )}
          </Grid>
        </Popup>
        {palette ? <DragablePalette state={state} setState={setState} colors={palette.colors} /> : null}
      </React.Fragment>
    );
  };
  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default SinglePalette;
