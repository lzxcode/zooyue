import styled from "styled-components";

export const HeaderWrapper = styled.div`
   pointer-events: none;
   display: flex;
   align-items: center;
   height: 60px;
   position: fixed;
   top: 0;
   width: 100%;
   background-color: ${props => props.$showOpacity ? 'rgba(0, 0, 0, 0)' : '#fff'};
   z-index: 99;
   transition: all 0.3s ease-in-out;

   .show {
    pointer-events: none;
    width: 100%;
    height: ${props => (props.$showHeight)}px;
    position: absolute;
    top: 0;
    left: 0;
   
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.$showOpacity)};

    .box {
      position: absolute;
      top: 50%;
      height: ${props => (props.$boxHeight)}px;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      width: ${props => (props.$boxWidth)}px;
      text-align: center;
      border: 2px solid black;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
   }
   .text{
    color: #fff;
    transition: all 0.3s ease-in-out;
    position: absolute;
      top: 30%;
      height: ${props => (props.$boxHeight)}px;
      left: 50%;
      transform: translate(-50%, -50%);
   }
  }
`