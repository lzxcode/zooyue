import styled from "styled-components";

export const Container = styled.div`
display: flex;
 .left-arrow{
    cursor: pointer;
    display: inline-block;
 }
 .right-arrow{
    cursor: pointer;

          display: inline-block;
       
 }
 .scroll-item{
    position: relative;
    width: ${props => props.$scrollContentWidth}px;
    overflow: hidden;
    
    .scroll-item-content{
        position: absolute;
        transform:  translateX(${prpos => prpos.$tranfWidth + "px"});
        transition: all 0.5s ease-in-out;
    }
 }
`