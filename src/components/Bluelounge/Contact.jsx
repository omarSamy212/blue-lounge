// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiPhone, FiGlobe, FiMapPin, FiMail } from "react-icons/fi";

function Header({ onBack }) {
  return (
    <header className="fixed top-0 z-50 flex items-center justify-center w-full px-6 py-4 mx-auto bg-black border-b sm:px-8 bg-opacity-90 backdrop-blur-md border-white/20 max-w-7xl">
      <button
        onClick={onBack}
        aria-label="Back"
        className="absolute p-2 text-white transition-transform duration-300 rounded-md left-6 sm:left-8 hover:bg-white/20 hover:scale-110"
      >
        <FiArrowLeft size={26} />
      </button>
      <motion.h1
        className="text-3xl font-extrabold tracking-widest text-white select-none"
        animate={{
          x: [-10, 10, -10],
          transition: { yoyo: Infinity, duration: 4, ease: "easeInOut" },
        }}
      >
        Contact Us
      </motion.h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 mt-20 bg-black border-t shadow-lg bg-opacity-90 border-white/20">
      <div className="flex flex-col items-center justify-between px-6 mx-auto text-sm font-semibold tracking-wide text-white uppercase sm:px-8 max-w-7xl md:flex-row">
        <div>&copy; 2025 Blue Lounge. All Rights Reserved.</div>
        <nav className="flex mt-4 space-x-6 md:mt-0">
          <a href="#vision" className="transition hover:text-gray-300">
            Vision
          </a>
          <a href="#mission" className="transition hover:text-gray-300">
            Mission
          </a>
          <a href="#milestones" className="transition hover:text-gray-300">
            Milestones
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function ContactUs() {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <FiPhone className="w-8 h-8 text-yellow-400" />,
      label: "Phone",
      value: "0100 1688 655 - 0127 7913 492",
      href: "tel:+01001688655",
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-yellow-400" />,
      label: "Website",
      value: "bluelounge4catering.com",
      href: "https://bluelounge4catering.com",
    },
    {
      icon: <FiMapPin className="w-8 h-8 text-yellow-400" />,
      label: "Address",
      value: "Block 13/12 - First Floor, IZAR Plaza - Palm Hills, 6th of October City - Giza - Egypt",
      href: null,
    },
    {
      icon: <FiMail className="w-8 h-8 text-yellow-400" />,
      label: "Email",
      value: "blueloungerestaurant@outlook.com",
      href: "mailto:blueloungerestaurant@outlook.com",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 pt-20 text-white sm:px-8 bg-gradient-to-br from-black to-gray-900">
      <Header onBack={() => navigate(-1)} />
      <main className="w-full max-w-4xl mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-8 space-y-12 bg-black shadow-xl sm:p-12 bg-opacity-30 rounded-xl"
        >
          {contactInfo.map(({ icon, label, value, href }, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-6 cursor-pointer"
              whileHover={{ scale: 1.1, x: 10 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {icon}
              <div>
                <h3 className="text-xl font-semibold">{label}</h3>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-lg text-yellow-400 underline hover:text-yellow-300"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="max-w-lg text-lg text-yellow-400">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    
    </div>
  );
}
