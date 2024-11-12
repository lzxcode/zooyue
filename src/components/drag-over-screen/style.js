import styled from "styled-components";

export const DragOverScreen = styled.div`
height:${props => (props.$initHeight)};
position: relative;
.content{
    z-index: 9;
    top: 0;
    left: 0;
    width: ${props => (props.$initWidth)};
    overflow: hidden;
    height:${props => (props.$open ? "100vh" : props.$initHeight)};
    position: ${props => (props.$open ? "fixed" : "absolute")};
    transition: all 0.3s ease-in-out;
  }
`