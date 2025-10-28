import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
;
import { useNavigate } from "react-router-dom";

// صور السلايد شو 5 صور مختلفة
const sliderImages = [
  "/assets/photo_5764642634851879890_y.jpg",
  "/assets/photo_6037353301298318110_y.jpg",
  "/assets/photo_6037353301298318157_y.jpg",
  "/assets/photo_6037353301298318135_y.jpg",
  "/assets/photo_5764642634851879888_y.jpg"
];

// بيانات أزرار بلو وانستا باللون الأسود ونص أبيض فقط
const buttonData = [
  {
    text: "Blue Lounge",
    logo: "/assets/photo_5764642634851879887_y.jpg",
    route: "/b",
    bg: "bg-black",
    txt: "text-white",
    ring: "ring-white",
    hover: "hover:bg-white hover:text-black"
  },
  {
    text: "Instafood",
    logo: "/assets/photo_5764642634851879892_x.jpg",
    route: "/i",
    bg: "bg-black",
    txt: "text-white",
    ring: "ring-white",
    hover: "hover:bg-white hover:text-black"
  }
];

export default function Landing() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-0 bg-black">
      {/* السلايد شو */}
      <AnimatePresence mode="wait">
        <motion.img
          key={sliderImages[current]}
          src={sliderImages[current]}
          alt={`slide ${current + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, type: "spring" }}
          className="relative w-[98vw] max-w-4xl h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] rounded-3xl object-cover shadow-2xl border-2 border-gray-900 mb-12"
          style={{ filter: "drop-shadow(0 24px 60px #000A)" }}
        />
      </AnimatePresence>

      {/* أزرار متجاوبة */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 sm:flex-row w-fit">
        {buttonData.map(({ text, logo, route, bg, txt, ring, hover }) => (
          <motion.button
            key={text}
            whileHover={{ scale: 1.06, boxShadow: "0px 0px 40px #fff, 0px 0px 40px #000" }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center gap-4 rounded-full shadow-xl ${bg} ${txt} ${ring} ring-2 transition-all duration-300 px-8 py-4 w-full sm:w-auto font-semibold text-lg ${hover}`}
            onClick={() => navigate(route)}
          >
            <div className="flex items-center justify-center w-12 h-12 mr-3 bg-white border-2 border-gray-400 rounded-full shadow-lg">
              <img
                src={logo}
                alt={`${text} logo`}
                className="object-contain w-10 h-10 rounded-full"
              />
            </div>
            <span style={{ letterSpacing: "1px", fontFamily: "Montserrat, Cairo, sans-serif" }}>
              {text}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
