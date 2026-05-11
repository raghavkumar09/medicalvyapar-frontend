import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulate checking auth token.
      navigate("/login");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="h-24 w-24 bg-white rounded-3xl flex items-center justify-center text-blue-600 text-5xl font-bold shadow-2xl mb-6">
          M
        </div>
        <h1 className="text-4xl font-bold tracking-tight">MediVyapar</h1>
        <p className="text-blue-100 mt-3 text-lg font-medium tracking-wide">
          Smart Solution For Every Pharmacy
        </p>
      </motion.div>
      <motion.div 
        className="absolute bottom-16 flex justify-center w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-8 h-8 border-4 border-blue-400 border-t-white rounded-full animate-spin" />
      </motion.div>
    </div>
  );
}
