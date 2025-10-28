// InstaFoodContact.jsx (Final Premium Bronze Edition)
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function InstaFoodContact() {
  const contactInfo = [
    {
      icon: <FiPhone className="text-[#b08d57] w-8 h-8" />,
      label: "Phone",
      value: "0100 1688 655 - 0127 7913 492",
      href: "tel:+201001688655",
    },
    {
      icon: <FiGlobe className="text-[#b08d57] w-8 h-8" />,
      label: "Website",
      value: "bluelounge4catering.com",
      href: "https://bluelounge4catering.com",
    },
    {
      icon: <FiMapPin className="text-[#b08d57] w-8 h-8" />,
      label: "Address",
      value:
        "Motamayez District - Wahat Road - 6th of October City - Giza",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-[#1a120a] text-white min-h-screen font-poppins overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-dancing { font-family: 'Dancing Script', cursive; }
        `}
      </style>

<header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-[#b08d57]/20 flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-12 py-4 gap-y-2">
  <h1
    className="flex-1 min-w-[150px] text-2xl sm:text-3xl md:text-4xl font-dancing text-[#b08d57] select-none"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    Instafood
  </h1>
  <nav className="flex flex-wrap justify-center flex-1 gap-4 text-sm font-semibold basis-full md:basis-auto md:flex-auto md:gap-8 md:text-base md:justify-end">
    <a href="/i" className="hover:text-[#b08d57] transition">Home</a>
    <a href="/si" className="hover:text-[#b08d57] transition">Services</a>
    <a href="/k" className="hover:text-[#b08d57] transition">About</a>
    <a href="/di" className="text-[#b08d57] underline underline-offset-4">Contact</a>
    <a
      href="/"
      className="ml-0 md:ml-4 px-4 py-2 border border-[#b08d57]/50 rounded-full hover:bg-[#b08d57] hover:text-black transition text-sm"
    >
      Back to landing
    </a>
  </nav>
</header>


      <div className="h-24" />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#1a120a] via-black to-[#0c0a08]"
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
          transition={{ duration: 1 }}
        >
          LET’S CONNECT WITH US
        </motion.h1>
        <motion.p
          className="z-10 max-w-2xl mt-6 text-lg text-gray-300 font-poppins"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Reach out to us for inquiries, partnerships, or event catering — we’re here to help.
        </motion.p>
      </section>

      {/* CONTACT INFO */}
      <main className="grid max-w-5xl grid-cols-1 gap-12 px-6 mx-auto mt-20 md:px-12 md:grid-cols-2">
        {contactInfo.map(({ icon, label, value, href }, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-6 bg-white/5 border border-[#b08d57]/30 backdrop-blur-md rounded-3xl p-8 shadow-[0_0_25px_rgba(176,141,87,0.15)] hover:bg-white/10 transition cursor-pointer"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex-shrink-0">{icon}</div>
            <div>
              <h3
                className="text-2xl font-dancing text-[#b08d57] mb-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {label}
              </h3>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#b08d57] text-base underline hover:text-[#d5b98a] font-poppins"
                >
                  {value}
                </a>
              ) : (
                <p className="text-[#b08d57] text-base font-poppins max-w-md">{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </main>

      {/* MAP SECTION */}
      <section className="max-w-5xl px-6 mx-auto mt-24">
        <motion.div
          className="rounded-3xl overflow-hidden border border-[#b08d57]/30 shadow-[0_0_25px_rgba(176,141,87,0.15)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Instafood Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2371489546233!2d31.013716975693566!3d29.97278722298279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855a4e52f5633%3A0x9de29c509aad1e90!2sPalm%20Hills%2C%206th%20of%20October%20City!5e0!3m2!1sen!2seg!4v1709311111111!5m2!1sen!2seg"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/201001688655"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-4 text-white transition-all bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

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
