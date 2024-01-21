import { useEffect } from "react";
import { useLoaderData, Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
export const Root = () => {
  const userData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/experience");
     
    }else{
      navigate("/login");
    }
  }, []);

  return (
    <AnimatePresence>
    <motion.div
      className="overflow-hidden h-full"
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



export default Root;
