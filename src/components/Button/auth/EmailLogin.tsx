import { Button } from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";

export const EmailLoginButton = () => {
  const navigate = useNavigate();

  const handleClickContinueWithEmail = () => {
    navigate("/email-login");
  };
  return (
    <Button onPress={() => handleClickContinueWithEmail()} variant="primary">
      Continue with Email
    </Button>
  );
};
