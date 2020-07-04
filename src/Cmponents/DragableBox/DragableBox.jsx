// import React from 'react';
// import './_DragableBox.scss';
// import { Icon } from 'semantic-ui-react';
// import chroma from 'chroma-js';

// const DragableBox = ({ color, title, onDelete }) => {
//   const isDarkcolor = chroma(color).luminance() <= 0.28;
//   const style = {
//     color: isDarkcolor ? '#eee' : '#333',
//     // backgroundColor: isDarkcolor ? '#eee' : '#666',
//   };

//   const onClick = (e) => {
//     e.stopPropagation();
//     onDelete(color);
//   };
//   const onComponentClick = (e) => {
//     e.stopPropagation();
//   };
//   return (
//     <div onClick={onComponentClick} className='dragableBox'>
//       <div style={{ backgroundColor: color }} className='color_box'></div>
//       <div className='content'>
//         <div style={style} className='title'>
//           {title}
//         </div>
//         <div onClick={onClick} style={style} style={{ backgroundColor: isDarkcolor ? '#eee' : '#666', color: isDarkcolor ? '#333' : '#eee' }} className='icon'>
//           <Icon name='trash alternate' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DragableBox;
