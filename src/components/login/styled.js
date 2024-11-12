import styled, { createGlobalStyle } from "styled-components";
export const LoginContainer = styled.div`


`
export const GlobalStyle = createGlobalStyle`
  .modal-wrap-header-right {
    user-select: none;
      .loginTitle{
         ${props => props.theme.minix.rowCenter}
         span {
            padding: 0 20px;
         }
      }
      .login-body{
        height: 120px;
        margin-top: 20px;
        ${props => props.theme.minix.rowAroundCenter}
        img{
            width: 120px;
            height: 100%;
            object-fit: cover;
            flex-shrink: 0;
        }
        .login-form{
            box-sizing: border-box;
            height: 100%;
            padding: 0 20px;
            ${props => props.theme.minix.columnBetweenCenter}
            .button {
                width: 100%;
                ${props => props.theme.minix.rowBetweenCenter}
            }
        }
      }
  }
`