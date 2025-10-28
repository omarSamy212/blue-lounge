// InstaFoodServices.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const servicesIndividuals = [
  {
    title: "Healthy Food",
    desc: "Enjoy nutritious, calorie-counted meals tailored to your dietary needs. Collaborating with nutritionists, we provide weekly, monthly, and quarterly food deliveries to support your well-being.",
    img: "/assets/photo_6037353301298318109_y.jpg",
  },
  {
    title: "Economical Meals",
    desc: "Satisfying and budget-friendly meals aimed at workers and individuals with limited resources. Delicious options that warm the soul without breaking the bank.",
    img: "/assets/photo_6037353301298318110_y.jpg",
  },
  {
    title: "Bakery",
    desc: "From fresh bread that calms the soul to sweet pastries that brighten your day — every bite is made with love and care, crafted to perfection.",
    img: "/assets/photo_6037353301298318135_y.jpg",
  },
  {
    title: "Frozen Food",
    desc: "Enjoy the convenience of half-cooked frozen meals — perfect for quick and easy home dining. Our frozen food options offer a variety of delicious choices.",
    img: "/assets/photo_6048839933633432617_y.jpg",
  },
  {
    title: "Event Catering",
    desc: "Our expert catering services make your events unforgettable. Birthdays, anniversaries, or corporate gatherings — we craft memories with flavor and style.",
    img: "/assets/photo_6037353301298318110_y.jpg",
  },
];

const servicesCorporate = [
  {
    title: "Corporate Catering",
    desc: "Comprehensive catering solutions for businesses, including cafeteria management, event catering, and more. We ensure employees enjoy fresh, nutritious meals efficiently on-site.",
    img: "/assets/photo_6037353301298318110_y.jpg",
  },
  {
    title: "School Meal Solutions",
    desc: "Specialized catering for schools focusing on health, variety, and adaptability. Locally sourced ingredients and customizable menus ensure quality and freshness for every student.",
    img: "/assets/photo_6037353301298318158_y.jpg",
  },
  {
    title: "University Catering",
    desc: "Dedicated catering services for universities like Nile University — tailored to the diverse needs of students and staff with balanced, energizing meals.",
    img: "/assets/photo_6037353301298318159_y.jpg",
  },
  {
    title: "Banker Meals",
    desc: "Nutritious meals designed for bankers — fueling focus and productivity throughout the workday with convenient, high-quality food options.",
    img: "/assets/photo_6037353301298318108_y.jpg",
  },
];

export default function InstaFoodServices() {
  return (
    <div className="min-h-screen px-6 pb-24 overflow-x-hidden text-white bg-gradient-to-b from-black to-gray-900 md:px-10 font-poppins">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');

          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-dancing { font-family: 'Dancing+Script', cursive; }
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

      <div className="h-24"></div>

      {/* PAGE TITLE */}
      <motion.h1
        className="mt-20 mb-10 text-6xl text-center md:text-7xl font-dancing"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      {/* INDIVIDUALS SECTION */}
      <section className="mx-auto mt-16 max-w-7xl">
        <motion.h2
          className="text-4xl text-center md:text-5xl font-dancing mb-14"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Individuals Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesIndividuals.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 transition border shadow-lg bg-white/10 rounded-3xl border-white/20 hover:bg-white/20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full mb-6 h-60 rounded-2xl"
              />
              <h3
                className="mb-3 text-2xl font-bold text-white font-dancing"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {service.title}
              </h3>
              <p className="text-base text-gray-200">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORPORATE SECTION */}
      <section className="mx-auto max-w-7xl mt-28">
        <motion.h2
          className="text-4xl text-center md:text-5xl font-dancing mb-14"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Corporate Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesCorporate.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 transition border shadow-lg bg-white/10 rounded-3xl border-white/20 hover:bg-white/20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="object-cover w-full mb-6 h-60 rounded-2xl"
              />
              <h3
                className="mb-3 text-2xl font-bold text-white font-dancing"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {service.title}
              </h3>
              <p className="text-base text-gray-200">{service.desc}</p>
            </motion.div>
          ))}
        </div>
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

        <p>© 2025 Instafood. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
