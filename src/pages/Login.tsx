import { useEffect } from "react";
import styled, { css } from "styled-components";
import { GoogleLoginButton } from "../components/Button/auth/GoogleLogin";
const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: "#BF4F74";
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: "#BF4F74";
      color: white;
    `};
`;
const Login = () => {
  
  useEffect(() => {
   
  }, []);
    return (
    <div>
        <GoogleLoginButton />
      <Button>dd</Button>
      {/* Add your login form here */}
    </div>
  );
};

export default Login;
