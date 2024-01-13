import { useEffect } from "react";
import { useLoaderData, Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Outlet />
    </motion.div>
  </AnimatePresence>
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

export default Root;
