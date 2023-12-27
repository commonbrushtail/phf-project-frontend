import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { GoogleLoginButton } from "../components/Button/auth/GoogleLogin";
import api from "../services/axios";
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

const Input = styled.input`
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async () => {
    try {
      const user = await api.post("/auth/email-login", {
        email: email,
        password: password,
      });

      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <Button
        onClick={() => {
          handleLoginSubmit();
        }}
      >
        Login
      </Button>

      <GoogleLoginButton />
    </div>
  );
};

export default Login;
