import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const sliderImages = [
  "/assets/photo_6037353301298318157_y.jpg",
  "/assets/photo_6037353301298318158_y.jpg",
  "/assets/photo_6037353301298318159_y.jpg",
];

const backgroundImage = "/assets/photo_6048839933633432618_y.jpg";

export default function InstaFoodHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const handlePdfClick = () => {
    const pdfUrl = "/InstaFood portfolio.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen px-4 mx-auto overflow-x-hidden text-white bg-black font-poppins sm:px-6 md:px-8 max-w-7xl">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-dancing { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-[6px] border-b border-white/10 flex justify-between items-center px-4 sm:px-6 py-4">
        <div
          className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase select-none font-dancing text-[#b08d57]"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Instafood
        </div>
        <nav className="flex space-x-4 text-sm font-semibold text-white sm:space-x-8 sm:text-base">
          <a href="/" className="hover:text-[#b08d57] transition-colors">landing</a>
          <a href="/si" className="hover:text-[#b08d57] transition-colors">Services</a>
          <a href="/k" className="hover:text-[#b08d57] transition-colors">About</a>
          <a href="/di" className="hover:text-[#b08d57] transition-colors">Contact</a>
        </nav>
      </header>

      <div className="h-20"></div>

      {/* HERO */}
      <section className="h-[70vh] sm:h-[80vh] md:h-[94vh] relative flex flex-col justify-center items-center text-center overflow-hidden px-4">
        <motion.img
          src={backgroundImage}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-55 blur-[0.5px] scale-105"
          animate={{ scale: [1.04, 1, 1.06, 1.04] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="z-10 max-w-4xl pt-24 mx-auto sm:pt-36">
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-widest mb-4 sm:mb-6 select-none font-dancing text-[#b08d57]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Instafood
          </h1>
          <motion.h2
            className="mb-6 text-xl font-medium sm:text-3xl md:text-5xl sm:mb-10 text-white/90"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Nutritious • Delicious • Innovative
          </motion.h2>
          <motion.p
            className="max-w-xl mx-auto mb-6 text-sm sm:text-base md:text-xl text-white/85 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Bringing health and taste together — every bite, a story of quality and care.
          </motion.p>
          <button className="px-8 py-2 text-base font-bold transition duration-300 border-2 border-white rounded-full shadow-lg group sm:px-12 sm:py-3 sm:text-lg bg-black/60 hover:bg-white hover:text-black hover:border-black">
            <span className="transition group-hover:invert">Explore Menu</span>
          </button>
        </div>
      </section>

      {/* SLIDER */}
      <section
        className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] max-w-6xl mx-auto rounded-3xl overflow-hidden my-16 sm:my-24 shadow-2xl border border-white/10"
        id="menu"
      >
        {sliderImages.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`slide-${idx + 1}`}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1.08 : 1,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full rounded-3xl"
          />
        ))}
        <button
          onClick={() =>
            setCurrentSlide(
              (currentSlide + sliderImages.length - 1) % sliderImages.length
            )
          }
          className="absolute z-20 p-2 text-3xl text-white transform -translate-y-1/2 rounded-full sm:text-4xl left-4 top-1/2 bg-black/70 hover:bg-gray-700"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % sliderImages.length)}
          className="absolute z-20 p-2 text-3xl text-white transform -translate-y-1/2 rounded-full sm:text-4xl right-4 top-1/2 bg-black/70 hover:bg-gray-700"
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

      {/* OUR STORY */}
      <section
        id="our-story"
        className="relative max-w-5xl mx-auto mt-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-gray-800 via-black to-gray-900 shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20 text-center"
      >
        <h2
          className="mb-6 text-3xl font-bold text-white sm:text-5xl md:text-6xl font-dancing sm:mb-10"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Our Story
        </h2>
        <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-200 sm:text-lg md:text-xl font-poppins">
          In 2023, Instafood was established, embarking on a new journey to provide El-Hilty meals,
          catering services, and the management of corporate and school cafeterias. With a fresh
          independent management team and a commitment to continuous improvement, Instafood quickly became
          synonymous with quality and innovation in food service.
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-sm leading-relaxed text-gray-200 sm:text-lg md:text-xl font-poppins">
          Our mission is to deliver nutritious and delicious meals while maintaining exceptional service
          standards. Through careful attention to detail and a dedication to customer satisfaction, we
          continue to grow, ensuring that every meal served reflects our passion for excellence.
        </p>
      </section>

      {/* OUR SERVICES PREVIEW */}
      <section className="max-w-6xl px-4 mx-auto mt-16 text-center">
        <h2
          className="mb-12 text-4xl text-white sm:text-5xl md:text-6xl font-dancing"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-10">
          {[
            {
              title: "Healthy Food",
              desc: "Nutritious, calorie-counted meals crafted with expert care.",
              img: "/assets/photo_6037353301298318109_y.jpg",
            },
            {
              title: "Bakery",
              desc: "Fresh breads and pastries made daily to perfection.",
              img: "/assets/photo_6037353301298318135_y.jpg",
            },
            {
              title: "Event Catering",
              desc: "Memorable catering experiences for all occasions.",
              img: "/assets/photo_6037353301298318110_y.jpg",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="p-6 transition border shadow-lg cursor-pointer bg-white/10 rounded-3xl border-white/20 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full h-56 mb-6 rounded-2xl"
              />
              <h3
                className="mb-3 text-xl font-bold sm:text-2xl font-dancing"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {service.title}
              </h3>
              <p className="text-base text-gray-200 font-poppins">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="/si"
          className="inline-block px-12 py-3 mt-10 text-lg font-bold transition border-2 border-white rounded-full hover:bg-white hover:text-black"
        >
          View All Services
        </a>
      </section>

      {/* Footer */}
      <footer className="relative py-10 mt-32 text-sm text-center bg-black border-t bg-opacity-90 border-white/20 text-white/70">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/photo_5764642634851879892_x.png"
            alt="Blue Lounge Logo"
            className="object-contain w-24 h-auto filter brightness-90 drop-shadow-lg"
            style={{ maxWidth: "120px" }}
          />
        </div>

        <h3 className="text-[#b08d57] text-lg font-dancing mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Follow us for daily food inspirations 🍽️
        </h3>

        <div className="flex justify-center gap-8 mb-6">
          <a href="https://wa.me/201001688655" target="_blank" rel="noopener noreferrer" className="text-[#b08d57] hover:text-green-500 transition-transform transform hover:scale-125" title="Chat on WhatsApp">
            <i className="text-2xl fab fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#b08d57] hover:text-blue-500 transition-transform transform hover:scale-125" title="Visit our Facebook">
            <i className="text-2xl fab fa-facebook-f"></i>
          </a>
          <a href="mailto:instafood@outlook.com" className="text-[#b08d57] hover:text-red-500 transition-transform transform hover:scale-125" title="Send us an Email">
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
