// import React, { useState } from 'react';
// import './_styles.scss';
// import { Popup, PopupContent, Segment, Modal, Card, Button, ButtonGroup } from 'semantic-ui-react';

// const MiniImageBox = ({ image, setImage, children }) => {
//   //console.log(image);
//   const [state, setState] = useState({ popupOpen: false });
//   const { popupOpen } = state;
//   const onPopupOpen = () => setState({ ...state, popupOpen: true });
//   const onPopupClose = () => setState({ ...state, popupOpen: false });
//   const setCurrentImage = () => setImage(image.id);
//   return (
//     <Popup on='click' hideOnScroll style={{ padding: 0, overflow: 'hidden', borderRadius: '1.2rem', zIndex: 1000 }} inverted position='top right' trigger={<div className='miniImage' style={{ backgroundImage: `url( ${image.urls.small})`, backgroundPosition: 'center' }}></div>}>
//       <PopupContent>
//         <Segment style={{ backgroundImage: `url( ${image.urls.thumb})`, borderRadius: 0, backgroundSize: 'cover', backgroundPosition: 'center', height: '20rem', width: '30rem' }}></Segment>
//       </PopupContent>
//       <Popup.Content>
//         <Button.Group fluid style={{ marginTop: 0 }}>
//           {children}
//           {/* <MyModal onClick={setCurrentImage} secondary content='Next' icon='right arrow' labelPosition='right'>
//             <Modal.Header>Select a Photo</Modal.Header>
//             <Modal.Content>
//               <Card style={{ width: '100%' }} color='red'>
//                 <Segment style={{ height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${'https://images.unsplash.com/photo-1591921815587-584f02684e22'})` }}></Segment>
//               </Card>
//             </Modal.Content>
//             <Modal.Description></Modal.Description>
//           </MyModal> */}
//         </Button.Group>
//       </Popup.Content>
//     </Popup>
//   );
// };

// export default MiniImageBox;
