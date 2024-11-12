import styled from 'styled-components';

export const Container = styled.div`
display: flex;
 .item {
   width: 50px;
    margin-right: 10px;
    flex-shrink: 0;
 }
 .active{
    color: red;
 }
 cursor: pointer;
`