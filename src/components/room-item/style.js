import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${props => props.$itemWidth || "25%"};
  padding: 10px;
  box-sizing: border-box;
  .inner{
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .cover{
        position: relative;
        padding: 66.66% 8px 0;
        border-radius: 10px;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    
  }
`