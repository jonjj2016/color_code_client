import React, { useState } from 'react';
// import DragableList from '../../Cmponents/DragableList/DragableList';
// import DragableBox from '../../Cmponents/DragableBox/DragableBox';
import DragablePalette from '../../Cmponents/Drag_List/List';
import ColorPickerV2 from '../../Cmponents/ColorPickerV2/ColorPickerV2';
import { useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

const NewPalette = ({ colors, state, setState, handleColorChange }) => {
  const { add_color_modal_open: isOpen } = useSelector((state) => state.auxModals);

  const renderer = () => {
    if (colors.length) {
      return (
        <React.Fragment>
          {state.addColorMode && <ColorPickerV2 handleColorChange={handleColorChange} state={state} setState={setState} />}
          <DragablePalette state={state} setState={setState} colors={colors} />;
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 style={{ height: '95vh' }}>
            <Loader inverted />{' '}
          </h1>
        </React.Fragment>
      );
    }
  };

  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default NewPalette;
