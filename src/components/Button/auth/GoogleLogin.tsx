import { GoogleLogin } from "@react-oauth/google";
import api from "../../../services/axios";
export const GoogleLoginButton = () => {
  const handleSuccess = async (response: any) => {
    const { credential, clientId } = response;
    
    try {
      const userData = await api.post("/auth/google", {
        credential: credential,
        clientId: clientId,
      });

      console.log(userData )

      
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = () => {
    console.log('faild')
  };

  return (
    <GoogleLogin
      onSuccess={(res) => {
        handleSuccess(res);
      }}
      onError={() => {
        handleError();
      }}
    />
  );
};
