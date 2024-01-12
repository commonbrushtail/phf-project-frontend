import { useEffect, useState } from "react";
import { GoogleLoginButton } from "../components/Button/auth/GoogleLogin";
import { GuestLoginButton } from "../components/Button/auth/GuestLogin";
import api from "../services/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    handleCheckLoign()
  }, []);

  const handleCheckLoign = async () => {
    try {
      const user = await api.post("/auth/check-user-login");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

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
    <div className="h-full">
    
   
      <GuestLoginButton />
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
