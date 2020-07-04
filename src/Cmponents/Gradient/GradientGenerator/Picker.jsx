// import React from 'react';
// import ColorPicker from '../../ColorPicker/ColorPicker';
// import { Button, Input } from 'semantic-ui-react';
// import './_Picker.scss';

// const Picker = ({ onClearColors, handleColorChange, color, addRandomColor, onChange, newColorName, saveColor }) => {
//   return (
//     <div className='PickerWrapper'>
//       <h1 style={{ color: color }}>Compose Palette</h1>
//       <div className='buttonGroup'>
//         <Button onClick={onClearColors} fluid color='youtube'>
//           Clear Colors
//         </Button>
//         <Button onClick={addRandomColor} fluid color='vk'>
//           Random Color
//         </Button>
//       </div>
//       <ColorPicker color={color} onChangeComplete={handleColorChange} />
//       <Input value={newColorName} onChange={onChange} name='newColorName' fluid placeholder='Color Name' />
//       <Button onClick={saveColor} style={{ backgroundColor: color, color: '#eee' }} fluid>
//         Save Color
//       </Button>
//     </div>
//   );
// };

// export default Picker;
