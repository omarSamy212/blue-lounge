import { useNavigate } from "react-router-dom";
    // eslint-disable-next-line no-unused-vars  
import { motion } from "framer-motion";
import { FiArrowLeft, FiEye, FiStar, FiFlag, FiCalendar } from "react-icons/fi";

const milestonesData = [
  {
    title: "Foundation",
    desc: "Blue Lounge Restaurants & Catering Management was established, commencing management of Blue Lounge Restaurant & Café in 6th October. This marked the beginning of numerous events and catering services, expanding business portfolio to include deliveries and events.",
    icon: <FiFlag className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "April 2014 - 2014",
    desc: "Initiated services for QNB Al Ahli Bank in 4 locations (6th of October City, Mohandessin - 2 locations, and Downtown).",
    icon: <FiCalendar className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2015-2016",
    desc: "Served Glim Gas (Ambit Cook) with daily meals. Operated catering services within Proctor & Gamble, running a full-scale À la carte restaurant and deli store.",
    icon: <FiStar className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2017-2018",
    desc: "Continued catering services at Proctor & Gamble with innovative menus and excellent service.",
    icon: <FiStar className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "Summer 2019",
    desc: "Charming shack at Dragon Island offering waffles, crepes, and children’s happy meals, showcasing adaptability and creativity.",
    icon: <FiEye className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2019",
    desc: "Introduced calorie-counted healthy meals with nutritionist collaboration, offering weekly, monthly, and quarterly deliveries.",
    icon: <FiStar className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2020",
    desc: "Specialized catering and delivery branch for KG’s breakfast, lunch, and snacks. Expanded services to BCCIS West and SIS Cairo West schools.",
    icon: <FiFlag className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2022",
    desc: "Added Citigroup cafeterias management in both branches.",
    icon: <FiStar className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "2023",
    desc: "Developed healthy food brand focused on waterless cooking and ultra-healthy nutrition using advanced equipment.",
    icon: <FiEye className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
  {
    title: "Ongoing",
    desc: "Innovating and expanding with passion and dedication to culinary excellence.",
    icon: <FiFlag className="mr-4 text-yellow-400 transition-transform duration-700 w-7 h-7 rotate-y-180 hover:rotate-y-0" />,
  },
];

function Header({ onBack }) {
  return (
    <header className="fixed top-0 z-50 flex items-center justify-center w-full px-4 py-4 mx-auto bg-black border-b bg-opacity-90 backdrop-blur-md border-white/20 max-w-7xl sm:px-8">
      <button
        onClick={onBack}
        aria-label="Back"
        className="absolute p-2 text-white transition-transform duration-300 rounded-md left-4 sm:left-8 hover:bg-white/20 hover:scale-110"
      >
        <FiArrowLeft size={26} />
      </button>
      <motion.h1
        className="text-2xl font-extrabold tracking-widest text-white select-none sm:text-3xl"
        animate={{
          x: [-10, 10, -10], // حركة أفقية بسيطة
          transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
        }}
      >
        About Us
      </motion.h1>
    </header>
  );
}

function Footer() {
  return (
<footer className="py-10 mt-32 text-sm text-center bg-black border-t bg-opacity-90 border-white/20 text-white/70">
  <h3
    className="text-[#b08d57] text-lg font-dancing mb-6"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
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

  <nav className="flex justify-center mb-6 space-x-6 text-sm sm:space-x-10 sm:text-base">
    <a
      href="#vision"
      className="transition hover:text-gray-300 underline-offset-4 hover:underline decoration-yellow-400"
    >
      Vision
    </a>
    <a
      href="#mission"
      className="transition hover:text-gray-300 underline-offset-4 hover:underline decoration-yellow-400"
    >
      Mission
    </a>
    <a
      href="#milestones"
      className="transition hover:text-gray-300 underline-offset-4 hover:underline decoration-yellow-400"
    >
      Milestones
    </a>
  </nav>

  <p>© 2025 Blue Lounge. All Rights Reserved.</p>
</footer>

  );
}

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-white bg-gradient-to-b from-black to-gray-900">
      <Header onBack={() => navigate(-1)} />

      <main className="px-4 pt-20 pb-20 mx-auto space-y-24 max-w-7xl sm:px-8 sm:space-y-36">
        {/* Vision */}
        <motion.section
          id="vision"
          initial={{ opacity: 0, x: -120, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-start gap-4 pl-6 border-l-8 border-yellow-400 select-text sm:pl-10 sm:gap-6"
        >
          <motion.div whileHover={{ rotateY: 180, scale: 1.1 }} className="self-start w-8 h-8 text-yellow-400 cursor-pointer">
            <FiEye size={32} />
          </motion.div>
          <div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-wide sm:text-6xl drop-shadow-lg">
              Vision
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              To be the leading innovator in culinary excellence, setting the standard for quality and service in the catering and food industry.
            </p>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          id="mission"
          initial={{ opacity: 0, x: 120, scale: 0.85 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex flex-row-reverse items-start gap-4 pr-6 text-right border-r-8 border-yellow-400 select-text sm:pr-10 sm:gap-6"
        >
          <motion.div whileHover={{ rotateY: 180, scale: 1.1 }} className="self-start w-8 h-8 text-yellow-400 cursor-pointer">
            <FiStar size={32} />
          </motion.div>
          <div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-wide sm:text-6xl drop-shadow-lg">
              Mission
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 sm:text-xl">
              To craft unforgettable culinary experiences that nourish the body and soul, serving a diverse clientele with excellence, creativity, and dedication.
            </p>
          </div>
        </motion.section>

        {/* Milestones */}
        <motion.section
          id="milestones"
          initial={{ opacity: 0, y: 150, scale: 0.75 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto space-y-8 text-gray-300 select-text sm:space-y-20"
        >
          <h2 className="pb-4 mb-8 text-4xl font-extrabold tracking-wide text-center border-b-8 border-yellow-400 sm:text-6xl sm:mb-12 drop-shadow-lg">
            Milestones
          </h2>

          {milestonesData.map(({ title, desc, icon }, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, rotateY: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 360, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
              className={`border-l-8 border-yellow-400 pl-6 sm:pl-10 py-4 rounded-md bg-black bg-opacity-20 shadow-lg flex items-center gap-2 sm:gap-4 ${
                idx % 2 === 0 ? "" : "border-l-0 border-r-8 pr-6 sm:pr-10 text-right"
              }`}
            >
              {icon}
              <div>
                <h3 className="mb-1 text-lg font-bold text-white sm:text-2xl drop-shadow-md">{title}</h3>
                <p className="text-sm leading-relaxed sm:text-lg">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
