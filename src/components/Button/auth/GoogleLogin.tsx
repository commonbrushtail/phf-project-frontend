import {useGoogleLogin, } from "@react-oauth/google";
import api from "../../../services/axios";
import { Button } from "@adobe/react-spectrum";
export const GoogleLoginButton = () => {
  const handleSuccess = async (response: any) => {
    const { code } = response;
    
    try {
      const userData = await api.post("/auth/google", {
        credential: code,
      });

      console.log(userData )

      
    } catch (err) {
      throw new Error(String(err));
    }
  };

  const handleError = (error:any) => {
    console.log(error);
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleSuccess(tokenResponse),
    onError: (error) => handleError(error),
    flow: 'auth-code',
  });

  return (
    <Button onPress={
      () => {
        login()
      }
    }  variant="primary">Continue with Google</Button>
    // <button className="bg-red-400" onClick={()=>login()}>Google</button>
 
    // <GoogleLogin
    //   onSuccess={(res) => {
    //     handleSuccess(res);
    //   }}
    //   onError={() => {
    //     handleError();
    //   }}
    // />
  );
};
