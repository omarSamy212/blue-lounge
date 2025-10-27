// InstaFoodAbout.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// InstaFoodAbout.jsx (Premium Bronze Edition)


const aboutImages = [
  "public/assets/photo_6037353301298318109_y.jpg",
  "public/assets/photo_6037353301298318110_y.jpg",
  "public/assets/photo_6037353301298318135_y.jpg",
];

export default function InstaFoodAbout() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-black via-[#0b0b0b] to-[#1a120a] font-poppins overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-dancing { font-family: 'Dancing Script', cursive; }
        `}
      </style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-[#b08d57]/20 flex justify-between items-center px-8 md:px-12 py-4">
        <h1
          className="text-3xl font-dancing text-[#b08d57] select-none"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Instafood
        </h1>
        <nav className="flex gap-8 text-sm font-semibold md:text-base">
          <a href="/" className="hover:text-[#b08d57] transition">Home</a>
          <a href="/s" className="hover:text-[#b08d57] transition">Services</a>
          <a href="/a" className="text-[#b08d57] underline underline-offset-4">About</a>
          <a href="/c" className="hover:text-[#b08d57] transition">Contact</a>
          <a
            href="/"
            className="ml-4 px-4 py-2 border border-[#b08d57]/50 rounded-full hover:bg-[#b08d57] hover:text-black transition text-sm"
          >
            Back to Home
          </a>
        </nav>
      </header>

      <div className="h-24" />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#1c140d] via-black to-[#0c0a08]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.h1
          className="text-6xl md:text-7xl font-dancing text-[#b08d57] z-10"
          style={{ fontFamily: "'Dancing Script', cursive" }}
  
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
        >
          About Instafood
        </motion.h1>
      </section>

      {/* OUR STORY */}
      <section className="max-w-5xl px-6 mx-auto mt-24 text-center md:px-12">
        <motion.div
          className="bg-white/5 border border-[#b08d57]/30 backdrop-blur-md rounded-3xl p-10 shadow-[0_0_20px_rgba(176,141,87,0.2)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-dancing mb-10 text-[#b08d57]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Our Story
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-200 md:text-xl">
            In 2023, “Instafood” was established, embarking on a new journey to
            provide “El-Hilty” meals, catering services, and manage corporate
            and school cafeterias. With a new independent management team and a
            commitment to continuous improvement, Instafood quickly became
            synonymous with quality and innovation in food service.
          </p>
          <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
            Our mission is to deliver nutritious and delicious meals while
            maintaining exceptional service standards. With passion, precision,
            and a deep dedication to customer satisfaction, every meal we serve
            reflects our promise of excellence.
          </p>
        </motion.div>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-6xl px-6 mx-auto mt-32 md:px-12">
        <motion.h2
          className="text-5xl font-dancing text-center text-[#b08d57] mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Vision & Mission
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {[
            {
              title: "Our Vision",
              desc: "To lead the food service industry with innovation, quality, and trust — delivering excellence and warmth in every bite.",
            },
            {
              title: "Our Mission",
              desc: "To create nourishing, delicious, and affordable meals while maintaining exceptional standards of service and integrity.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-[#b08d57]/30 rounded-3xl p-10 text-center backdrop-blur-md hover:scale-[1.02] transition-all shadow-[0_0_25px_rgba(176,141,87,0.15)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
            >
              <h3
                className="text-3xl font-dancing text-[#b08d57] mb-4"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {card.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-300 font-poppins">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl px-6 mx-auto mt-32 text-center md:px-12">
        <h2
          className="text-5xl md:text-6xl font-dancing mb-14 text-[#b08d57]"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Instafood Moments
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {aboutImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-3xl border border-[#b08d57]/30 shadow-[0_0_20px_rgba(176,141,87,0.15)]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                className="object-cover w-full h-64 transition hover:opacity-90"
              />
            </motion.div>
          ))}
        </div>
      </section>

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

        <p>© 2025 Instafood. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
