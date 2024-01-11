import {useGoogleLogin } from "@react-oauth/google";
import api from "../../../services/axios";
export const GoogleLoginButton = () => {
  const handleSuccess = async (response: any) => {
    const { code } = response;
    
    try {
      const userData = await api.post("/auth/google", {
        credential: code,
      });

      console.log(userData )

      
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = () => {
    console.log('faild')
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => handleSuccess(tokenResponse),
    onError: () => handleError(),
    flow: 'auth-code',
  });

  return (

    <button onClick={()=>login()}>Google</button>
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
