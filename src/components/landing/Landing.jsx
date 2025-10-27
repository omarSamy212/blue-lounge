// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen md:flex-row">
      {/* Blue Lounge */}
      <motion.div
        className="relative flex items-center justify-center w-full p-4 overflow-hidden cursor-pointer md:w-1/2 md:p-8"
        whileHover={{ scale: 1.02 }}
        onClick={() => navigate("/b")}
      >
        {/* خلفية */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900"></div>
        {/* وهج متحرك */}
        <motion.div
          className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-white/30 via-blue-400/20 to-blue-700/20 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* الزرار */}
        <motion.button
          className="relative z-10 px-6 py-3 text-lg font-bold text-white transition-all duration-500 bg-blue-600 shadow-lg sm:px-8 sm:py-4 md:px-10 md:py-5 sm:text-xl md:text-2xl lg:text-3xl rounded-2xl hover:bg-blue-500"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Blue Lounge
        </motion.button>
      </motion.div>

      {/* Instafood */}
      <motion.div
        className="relative flex items-center justify-center w-full p-4 overflow-hidden cursor-pointer md:w-1/2 md:p-8"
        whileHover={{ scale: 1.02 }}
        onClick={() => navigate("/i")}
      >
        {/* خلفية */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
        {/* وهج متحرك */}
        <motion.div
          className="absolute w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-r from-white/30 via-yellow-300/20 to-red-400/20 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* الزرار */}
        <motion.button
          className="relative z-10 px-6 py-3 text-lg font-bold text-black transition-all duration-500 bg-yellow-400 shadow-lg sm:px-8 sm:py-4 md:px-10 md:py-5 sm:text-xl md:text-2xl lg:text-3xl rounded-2xl hover:bg-yellow-300"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Instafood
        </motion.button>
      </motion.div>
    </div>
  );
}
