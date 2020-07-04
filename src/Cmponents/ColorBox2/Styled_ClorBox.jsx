// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const ColorBox = styled.div`
//   width: 100%;
//   height: 100%;
//   margin: 0 auto;
//   position: relative;
//   /* display: inline-block; */
//   background: ${({ background }) => background};

//   cursor: pointer;
//   .copy-button {
//     position: absolute;
//     height: 30px;
//     width: 100px;
//     display: inline-block;
//     top: 50%;
//     left: 50%;
//     margin-top: -15px;
//     outline: none;
//     text-align: center;
//     margin-left: -50px;
//     background: rgba(255, 255, 255, 0.3);
//     font-size: 1rem;
//     line-height: 1;
//     color: ${(props) => (props.isDark ? '#fff' : '#333')};

//     color: ${(props) => props.back && '#eee'};
//     text-transform: uppercase;
//     border: none;
//     opacity: 0;
//     cursor: pointer;
//     text-decoration: ${(props) => props.fromShades && 'none'};
//     opacity: ${(props) => (props.show ? 1 : 0)};

//     transition: 0.3s;
//   }
//   /* &:hover {
//     transition: 400ms;
//     transform: scaleX(1.3);
//   } */
//   &:hover .copy-button {
//     opacity: 1;
//   }
//   .box-content {
//     position: absolute;
//     width: 100%;
//     left: 0;
//     bottom: 0;
//     padding: 10px;
//     color: ${(props) => (props.isDark ? '#fff' : '#111')};

//     letter-spacing: 1px;
//     text-transform: uppercase;
//     font-size: 12px;
//   }
// `;
// export const Copy_Overlay = styled.div`
//   background: ${({ background }) => background};
//   opacity: 0;
//   z-index: 0;
//   height: 100%;
//   transition: transform 1.6s ease;
//   width: 100%;

//   transform: scale(0.1);
//   ${(props) =>
//     props.copied &&
//     ` z-index: 10;
//     opacity: 1;
//     transform: scale(50);
//     position: absolute;
// `}
// `;
// export const More = styled(Link)`
//   text-decoration: none;
//   background: rgba(255, 255, 255, 0.3);
//   position: absolute;
//   border: none;
//   right: 0;
//   color: #eee;
//   color: ${(props) => (props.isDark ? '#fff' : '#666')};
//   bottom: 0;
//   width: 60px;
//   height: 30px;
//   text-align: center;
//   line-height: 30px;
//   text-transform: uppercase;
// `;
// export const Message = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: -1;
//   font-size: 4rem;
//   transform: scale(0);
//   opacity: 0;
//   flex-direction: column;
//   transition: transform 0.5s ease-in-out;
//   transition-delay: 0.4s;
//   color: #eee;
//   /* ; */

//   h1 {
//     font-weight: 400;
//     text-shadow: 1px 2px 7px rgba(0, 0, 0, 0.6);
//     background: rgba(255, 255, 255, 0.1);
//     width: 100%;
//     text-align: center;
//     padding: 1rem;
//     font-size: 4rem;
//     margin-bottom: 0;
//     text-transform: uppercase;
//     letter-spacing: 0.3rem;
//     color: ${(props) => (props.isDark ? '#eee' : '#444')};
//   }
//   p {
//     font-size: 2rem;
//     font-weight: 100;
//     letter-spacing: 2px;
//     color: ${(props) => (props.isDark ? '#eee' : '#333')};
//   }
//   ${(props) =>
//     props.copied &&
//     ` z-index: 11;
//     opacity: 1;
//     transform: scale(1);
// `}
// `;
