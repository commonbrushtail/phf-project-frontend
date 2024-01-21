import { useEffect, useState } from "react";
import api from "../services/axios";
import { EmailLoginButton } from "../components/Button/auth/EmailLogin";
import { GoogleLoginButton } from "../components/Button/auth/GoogleLogin";
import { GuestLoginButton } from "../components/Button/auth/GuestLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  }, []);

  const handleCheckLoign = async () => {
    try {
      const user = await api.post("/auth/check-user-login");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

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
    <div className="h-full flex flex-col gap-y-3 items-center justify-center ">
      <GuestLoginButton />
      <GoogleLoginButton />
      <EmailLoginButton />
    </div>
  );
};

export default Login;
