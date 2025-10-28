import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// صور السلايد شو مختلفة لكل سلايد
const sliderImages = [
  "/assets/photo_5764642634851879890_y.jpg", // صورة كبيرة للسلايد 1
  "/assets/photo_6037353301298318110_y.jpg", // صورة كبيرة للسلايد 2
];

// لوجوهات الأزرار منفصلة عن الصور
const buttonData = [
  {
    text: "Blue Lounge",
    logo: "/assets/photo_5764642634851879887_y.jpg", // لوجو صغير
    route: "/b",
    bg: "bg-white",
    txt: "text-black",
    ring: "ring-black",
    hover: "hover:bg-black hover:text-white"
  },
  {
    text: "Instafood",
    logo: "/assets/photo_5764642634851879892_x.jpg", // لوجو صغير
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
      <div className="relative w-[98vw] max-w-4xl h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-900 mb-12">
        <AnimatePresence mode="wait">
          <motion.img
            key={sliderImages[current]}
            src={sliderImages[current]}
            alt={`slide ${current + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.9, type: "spring" }}
            className="absolute inset-0 object-cover w-full h-full"
            style={{ filter: "drop-shadow(0 24px 60px #000A)" }}
          />
        </AnimatePresence>
        <div className="absolute z-20 flex gap-3 -translate-x-1/2 bottom-5 left-1/2">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-4 h-4 rounded-full ring-2 transition-all ring-white ${
                current === i ? "bg-white" : "bg-gray-600 border"
              } border-gray-600`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* أزرار بأسلوب أبيض وأسود مع لوجوهات منفصلة */}
      <div className="flex flex-wrap justify-center gap-8 mt-3 w-fit">
        {buttonData.map(({ text, logo, route, bg, txt, ring, hover }) => (
          <motion.button
            key={text}
            whileHover={{ scale: 1.06, boxShadow: "0px 0px 40px #fff, 0px 0px 40px #000" }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center gap-5 px-8 py-4 rounded-full shadow-xl ${bg} ${txt} ${ring} ring-2 transition-all duration-300 text-xl font-semibold ${hover}`}
            onClick={() => navigate(route)}
          >
            <div className="flex items-center justify-center w-12 h-12 mr-3 bg-white border-2 border-gray-400 rounded-full shadow-lg">
              <img
                src={logo}
                alt={`${text} logo`}
                className="object-contain w-10 h-10 rounded-full"
              />
            </div>
            <span style={{ letterSpacing: "1.0px", fontFamily: "Montserrat, Cairo, sans-serif" }}>
              {text}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
