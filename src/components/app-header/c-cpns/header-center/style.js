import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
width: 300px;
text-align: center;
.text{
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
    opacity: ${props => (props.$showOpacity)};

}
`