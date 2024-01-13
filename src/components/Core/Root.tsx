import { useEffect } from "react";
import { useLoaderData, Outlet, useNavigate } from "react-router-dom";
import api from "../../services/axios";
export const Root = () => {
  const userData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/experience");
     
    }else{
      navigate("/login");
    }
  }, []);

  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};


export const rootLoader = async ({request}:any) => {
  try {
    const userData = await api.post("/auth/check-user-login",{
      signal: request.signal
    });
    return userData;
  } catch (err) {
    return null;
  }
}
