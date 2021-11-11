import styled from "styled-components";

export const LoginWrapper = styled.div `
  .login-form-root {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 30px;
    margin-right: 30px;
    height: 600px
  }

  #components-form-demo-normal-login .login-form {
  max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
    float: left;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
}
`