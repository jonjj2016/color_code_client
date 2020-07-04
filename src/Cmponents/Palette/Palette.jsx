// import React, { useState, useEffect } from 'react';
// import { Palette } from './Styled';
// import ColorBox from '../ColorBox2/ColorBox';
// import MyMenu from '../../Cmponents/Menu/Menu.Container';
// import { Menu, Icon, MenuItem, Button } from 'semantic-ui-react';
// import DropDown from '../DropDown/DropDown';
// import Slider from '../Slider/Slider';
// import MyPortal from '../Portal/MyPortal';
// import { useHistory } from 'react-router-dom';
// import { actions } from '../../Modules/Pallete/actions';
// import { useDispatch, useSelector } from 'react-redux';
// import Controller from '../Controller/Container';

// const MyPalette = ({ palette }) => {
//   console.log(palette);

//   const { push, goBack } = useHistory();
//   const dispatch = useDispatch();
//   const { colors } = palette;
//   const { current } = useSelector((state) => state.paletteReducer);
//   const [state, setState] = useState({ level: 500, format: 'hex' });
//   // useEffect(() => {
//   //   if (current) {
//   //     push('/compose_palette');
//   //   }
//   // }, [current]);
//   const changeLevel = (level) => {
//     setState({ ...state, level });
//   };

//   const onHandleSelectChange = (e, { value }) => {
//     setState({ ...state, format: value });
//   };

//   const onChangeRoute = () => push('/');

//   const renderer = () => {
//     return (
//       <div className='Palette-colors'>
//         {colors[state.level].map((color, index) => (
//           <ColorBox key={index} name={color.name} id={color.id} background={color[state.format]} />
//         ))}
//       </div>
//     );
//   };

//   const onDeleteClicked = () => {
//     dispatch(actions.remove_start(palette.id));
//   };
//   const onEditClicked = () => {
//     push(`/compose_palette/${palette.id}`);
//   };
//   const onRouteMove = () => {
//     goBack();
//   };
//   const onGradientpath = () => {
//     push(`/generate_gradien/${palette.id}`);
//   };
//   return (
//     <Palette>
//       <Controller>
//         <Button onClick={onEditClicked}>Edit</Button>
//         <Button size='large' color='youtube' onClick={onDeleteClicked}>
//           Delete
//         </Button>
//         <Button onClick={onGradientpath} fluid color='teal'>
//           Genereate Gradient
//         </Button>
//       </Controller>
//       <MyMenu location='palette'>
//         <MenuItem onClick={onChangeRoute}>
//           <Icon name='reply' />
//         </MenuItem>
//         <Menu.Menu position='left'>
//           <Slider state={state} changeLevel={changeLevel} />
//         </Menu.Menu>

//         <Menu.Menu position='right'>
//           <DropDown onChange={onHandleSelectChange} state={state} />
//         </Menu.Menu>
//       </MyMenu>
//       {renderer()}
//     </Palette>
//   );
// };

// export default MyPalette;
