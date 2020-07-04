// import React, { useState, useEffect } from 'react';
// import chroma from 'chroma-js';
// import './_ColorBox.scss';
// import { ColorBox, Copy_Overlay, Message, More } from './Styled_ClorBox';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { useParams } from 'react-router-dom';
// import { Icon, Button } from 'semantic-ui-react';
// import { text_Color } from '../../Helpers/ColorHelpers';

// let timeout;
// const MyColorBox = (props) => {
//   const { paletteId } = useParams();
//   const { background, name, id, fromShades = false } = props;
//   const [copied, setCopied] = useState(false);

//   const isDarkcolor = chroma(background).luminance() <= 0.18;

//   const onClick = (e) => {
//     setCopied(true);
//   };

//   useEffect(() => {
//     if (copied === true) {
//       timeout = setTimeout(() => {
//         setCopied(false);
//       }, 2000);
//     }
//     return () => clearTimeout();
//   }, [onClick, copied]);
//   return (
//     <CopyToClipboard onCopy={onClick} text={background}>
//       <ColorBox isDark={isDarkcolor} fromShades={fromShades} background={background}>
//         <Copy_Overlay background={background} copied={copied} />
//         <Message isDark={isDarkcolor} copied={copied}>
//           <h1>Copied!</h1>
//           <p>{background}</p>
//         </Message>

//         <div className='copy-container'>
//           <div className='box-content'>
//             <span>{name} </span>
//           </div>
//           {/* <div className='copy-button'>
//             <Button circular size='large' onClick={onClick} icon>
//               <Icon name='code' />
//             </Button>
//           </div> */}
//           <button onClick={onClick} className='copy-button'>
//             Copy
//           </button>
//         </div>
//         {!fromShades && (
//           <More isDark={isDarkcolor} to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
//             Shades
//           </More>
//         )}
//       </ColorBox>
//     </CopyToClipboard>
//   );
// };

// export default MyColorBox;
