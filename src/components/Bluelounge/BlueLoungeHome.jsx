import React, { useState, useEffect } from "react";
    // eslint-disable-next-line no-unused-vars  
import { motion } from "framer-motion";

const sliderImages = [
  "src/assets/photo_6037353301298318157_y.jpg",
  "src/assets/photo_6037353301298318158_y.jpg",
  "src/assets/photo_6037353301298318159_y.jpg",
];

const backgroundImage = "src/assets/photo_6037353301298318108_y.jpg";

const dishes = [
  {
    id: 1,
    name: "Signature Salad",
    desc: "Fresh mushrooms, walnuts, strawberries, and aged cheese, perfectly balanced for a nutritious delight.",
    img: "src/assets/photo_6037353301298318109_y.jpg",
  },
  {
    id: 2,
    name: "Bakery",
    desc: "Handcrafted breads and pastries made fresh daily using traditional methods for authentic flavor.",
    img: "src/assets/photo_6037353301298318135_y.jpg",
  },
  {
    id: 3,
    name: "Contemporary Veggie",
    desc: "A vibrant combination of cucumber, olives, and crunchy vegetables designed for health-conscious food lovers.",
    img: "src/assets/photo_6037353301298318110_y.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 25,
      delay: custom * 0.3,
    },
  }),
};

export default function BlueLoungeUltraFancy() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const mainTitle = "blue lounge";

  const handlePdfClick = () => {
    const pdfUrl = "https://www.canva.com/design/DAG2V8omkRk/oWItFGvpFPkO_gVkbxX35A/edit";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen px-4 mx-auto overflow-x-hidden text-white bg-black sm:px-6 md:px-8 font-poppins max-w-7xl">
      {/* Import fonts from Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-dancing-script { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-[6px] border-b border-white/10 flex justify-between items-center px-4 sm:px-6 py-4">
        <div
          className="text-xl font-extrabold tracking-tight uppercase select-none sm:text-2xl md:text-3xl font-dancing-script"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          {mainTitle}
        </div>
        <nav className="flex space-x-4 text-sm font-semibold sm:space-x-6 md:text-base">
          <a href="#" className="transition-colors hover:text-gray-300">Home</a>
          <a href="/s" className="transition-colors hover:text-gray-300">Services</a>
          <a href="/a" className="transition-colors hover:text-gray-300">About</a>
          <a href="/c" className="transition-colors hover:text-gray-300">Contact</a>
        </nav>
      </header>

      <div className="h-20"></div>

      {/* HERO */}
      <section className="h-[80vh] md:h-[94vh] relative flex flex-col justify-center items-center text-center overflow-hidden px-4">
        <motion.img
          src={backgroundImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[1.5px] scale-105"
          initial={{ scale: 1 }}
          animate={{ scale: [1.04, 1, 1.06, 1.04] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/96" />
        <div className="z-10 max-w-4xl pt-24 md:pt-36">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-widest uppercase sm:mb-6 sm:text-5xl md:text-7xl font-dancing-script"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {mainTitle}
          </h1>
          <motion.h2
            className="mb-6 text-xl font-medium sm:mb-8 sm:text-2xl md:text-4xl text-white/90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Catering Excellence
          </motion.h2>
          <motion.p
            className="max-w-xl mx-auto mb-4 text-sm sm:mb-6 sm:text-base md:text-xl text-white/80"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Join us for a meal to remember!
          </motion.p>
          <button className="px-6 py-2 mt-4 text-sm font-bold transition duration-300 border-2 border-white rounded-full shadow-lg sm:px-8 md:px-12 sm:py-3 sm:mt-6 sm:text-base md:text-lg bg-black/70 hover:bg-white hover:text-black hover:border-black focus:outline-none">
            <span className="transition group-hover:invert">Explore our Menu</span>
          </button>
        </div>
      </section>

      {/* SLIDER */}
      <section
        className="relative w-full max-w-5xl mx-auto my-12 overflow-hidden border shadow-2xl rounded-3xl border-white/10"
        id="menu"
      >
        {sliderImages.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`slide-${idx + 1}`}
            className="absolute inset-0 object-cover w-full h-full rounded-3xl"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1.08 : 1,
            }}
            transition={{ duration: 1 }}
          />
        ))}
        <button
          onClick={() =>
            setCurrentSlide(
              (currentSlide + sliderImages.length - 1) % sliderImages.length
            )
          }
          className="absolute z-20 p-2 text-3xl text-white transform -translate-y-1/2 rounded-full left-4 top-1/2 sm:text-4xl bg-black/70 hover:bg-gray-700"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % sliderImages.length)}
          className="absolute z-20 p-2 text-3xl text-white transform -translate-y-1/2 rounded-full right-4 top-1/2 sm:text-4xl bg-black/70 hover:bg-gray-700"
        >
          ›
        </button>
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {sliderImages.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer border-2 ${
                currentSlide === i ? "bg-white" : "bg-gray-600 border-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Alternating Image/Text Grid */}
      <section className="max-w-6xl px-4 mx-auto space-y-20" id="gallery">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.id}
            custom={i}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <motion.img
              src={dish.img}
              alt={dish.name}
              className="max-w-xs transition-transform shadow-lg md:max-w-md rounded-3xl hover:scale-105"
              whileHover={{ scale: 1.08, rotate: 1 }}
            />
            <div className="w-full p-6 bg-white border shadow-inner sm:p-8 bg-opacity-10 backdrop-blur-md rounded-3xl border-white/20 md:w-1/2">
              <h3
                className="mb-4 text-3xl font-bold sm:text-4xl font-dancing-script"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {dish.name}
              </h3>
              <p className="text-sm text-gray-300 sm:text-base">{dish.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Our Story Section */}
      <section
        id="our-story"
        className="relative max-w-5xl mx-auto mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-gray-800 via-black to-gray-900 shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20"
      >
        <div className="absolute inset-0 -z-10 opacity-20 rounded-3xl bg-[url('src/assets/photo_6037353301298318110_y.jpg')] bg-cover bg-center filter blur-lg" />
        <h2
          className="relative mb-6 text-3xl font-extrabold tracking-wide text-center text-white sm:mb-8 sm:text-5xl font-dancing-script"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Our Story
        </h2>
        <motion.p
          className="max-w-3xl mx-auto text-sm text-center text-gray-300 sm:text-base"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          ril 2014, Blue Lounge Restaurants & Catering Management set out on a culinary journey, assuming the management of the well-loved Blue Lounge
          Restaurant & Café in 6th October, which had been serving satisfied customers since 2007.

          Over the years, we expanded our horizons. We operated beachfront restaurants on the North Coast for three consecutive years, catering to private beaches
          at Marina Gate 5, Rimas (Al-Yashmak Ladies Only Beach), and the exclusive Sky Lounge atop the Porto Marina Main Building.
          In 2018, we introduced two new culinary brands: "TamrHenna" at Marcellia Land in Sahel and "El-Hilty" for oriental food and sohour during Ramadan in 6th October.
          In the summer of 2019, we brought smiles to Dragon Island/Livios Sidi Abd El-Rahman with a small shack offering waffles, crepes, and children's happy meals.
        </motion.p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 mt-32 text-sm text-center bg-black border-t bg-opacity-90 border-white/20 text-white/70">
        <h3 className="text-[#b08d57] text-lg font-dancing mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Follow us for daily food inspirations 🍽️
        </h3>

        <div className="flex justify-center gap-8 mb-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/201001688655"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b08d57] hover:text-green-500 transition-transform transform hover:scale-125"
            title="Chat on WhatsApp"
          >
            <i className="text-2xl fab fa-whatsapp"></i>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b08d57] hover:text-blue-500 transition-transform transform hover:scale-125"
            title="Visit our Facebook"
          >
            <i className="text-2xl fab fa-facebook-f"></i>
          </a>

          {/* Gmail */}
          <a
            href="mailto:instafood@outlook.com"
            className="text-[#b08d57] hover:text-red-500 transition-transform transform hover:scale-125"
            title="Send us an Email"
          >
            <i className="text-2xl fas fa-envelope"></i>
          </a>
        </div>

        <p>© 2025 Blue Lounge. All Rights Reserved.</p>
      </footer>

      {/* Side Chat-Like PDF Button in Black and White */}
      <button
        onClick={handlePdfClick}
        aria-label="Download PDF Menu"
        className="fixed z-50 flex items-center justify-center text-white transition duration-300 bg-black rounded-full shadow-lg right-4 bottom-24 w-14 h-14 hover:bg-white hover:text-black"
        style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12v6m0 0l-3-3m3 3l3-3m6-9H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2z"
          />
        </svg>
      </button>
    </div>
  );
}
