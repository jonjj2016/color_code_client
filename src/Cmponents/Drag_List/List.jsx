import React, { useState, useEffect } from 'react';
import Box from '../Drag_Box/Box';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { useWindowSize } from '../../Hooks/windowSize';
import arrayMove from 'array-move';
import './_styled.scss';

const SortableBox = SortableElement((item) => {
  return <Box setActiveColor={item.setActiveColor} globalState={item.state} index={item.n} shadeOpen={item.shadeOpen} onDelete={item.onDelete} setShadeOpen={item.setShadeOpen} color={item.item.color} />;
});
const SortableList = SortableContainer(({ items, setShadeOpen, shadeOpen, onDelete, setActiveColor, state }) => (
  <div className='dragable_list'>
    {items.map((color, index) => {
      return <SortableBox setActiveColor={setActiveColor} n={index} state={state} onDelete={onDelete} setShadeOpen={setShadeOpen} shadeOpen={shadeOpen} key={index} item={color} index={index} />;
    })}
  </div>
));

const List = ({ colors: co, state, setState }) => {
  const window_size = useWindowSize();
  const [local_state, local_setState] = useState({
    colors: co,
    isDragable: true,
    shadeOpen: false,
    activeColor: '',
    width: '',
  });
  const { colors, isDragable, shadeOpen, activeColor, width } = local_state;
  useEffect(() => {
    local_setState({ ...local_state, colors: [...co] });
  }, []);

  useEffect(() => {
    local_setState({ ...local_state, width: window_size.width });
  }, [window_size]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState({ ...state, colors: arrayMove(state.colors, oldIndex, newIndex) });
  };
  const setShadeOpen = () => {
    if (shadeOpen) {
      local_setState({ ...local_state, shadeOpen: false });
    } else {
      local_setState({ ...local_state, shadeOpen: true });
    }
  };
  const calcAxis = () => {
    if (shadeOpen) {
      return '0';
    }
    if (width >= 900) {
      return 'x';
    }
    if (width < 900 && width > 497) {
      return 'xy';
    }
    if (width <= 497) {
      return 'y';
    }
  };
  const calcLockAxis = () => {
    if (width >= 900) {
      return 'x';
    }
    if (width < 900 && width > 497) {
      return '';
    }
    if (width <= 497) {
      return 'y';
    }
  };
  const setActiveColor = (index) => {
    setState({ ...state, activeColor: index });
  };
  const onDelete = (color) => {
    setState({ ...state, colors: state.colors.filter((statecolor) => color !== statecolor.color) });
  };
  return (
    <React.Fragment>
      {state.colors.length ? (
        <React.Fragment>
          <SortableList state={state} setActiveColor={setActiveColor} transitionDuration={500} onDelete={onDelete} pressDelay={width < 900 ? 250 : 0} shadeOpen={shadeOpen} setShadeOpen={setShadeOpen} items={state.colors} onSortEnd={onSortEnd} axis={calcAxis()} lockAxis={calcLockAxis()} />
        </React.Fragment>
      ) : (
        <h1>loading</h1>
      )}
    </React.Fragment>
  );
};

export default List;
