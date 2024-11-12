import styled from "styled-components";
export const HeaderRightWrapper = styled.div`
flex:1;
text-align: right;
display: flex;
justify-content: flex-end;
align-items: center;
.rightContent{
    pointer-events: all;
    cursor: pointer;
    user-select: none;
    .login ,.user{
    margin-right: 10px;
    }
    .login {
        width: 50px;
        height: 30px;
        color: ${(props) => props.$isScrollDown ? "white" : "black"};
        ${props => props.theme.minix.rowAroundCenter}
        background-color: ${(props) => props.$isScrollDown ? "#00aeec" : "#ccc"};
        border-radius: 10px;
    }
    .user {
        position: relative;
        img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        img:hover + .user-tiptool{
            opacity: 1;
            visibility: visible;
        }
        .user-tiptool{
            opacity: 0;
            transition: all .3s;
            border-radius: 10px;
            overflow: hidden;
            visibility: hidden;
            position: absolute;
            text-align: left;
            top: 60px;
            right: 0px;
            width: 150px;
            height: 200px;
            background-color: #e8e8e8;
            ${props => props.theme.minix.columnStartStart}
            span{
                background-color: #fff;
                display: inline-block;
                width: 100%;
                box-sizing: border-box;
                padding: 10px 10px;
            }
        }
    }
    .profile{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${(props) => props.theme.minix.boxShow}
        .box{
            position: absolute;
            right: 0;
            top: 40px;
            border: 1px solid #ccc ;
        }
    }
}

`
