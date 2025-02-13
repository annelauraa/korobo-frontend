import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 text-korobo p-1 shadow-md">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Bouton Mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-green-900 focus:outline-none focus:ring-1"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex item s-center">
            <div className="flex-shrink-0 font-bold text-2xl text-korobo opacity-50 ml-5">
              KOROBO
            </div>
          </div>

          {/* Liens Desktop */}
          <div className="hidden sm:flex sm:space-x-6">
            {["Accueil", "Fonctionnalités", "FAQ", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  whileHover={{ scale: 1.03, fontWeight: 600 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          {/* Connexion / Inscription */}
          <div className="hidden sm:block space-x-4">
            <motion.a
              href="/login"
              className="button-korobo-outlined"
              whileHover={{ scale: 1.1 }}
            >
              Connexion
            </motion.a>
            <motion.a
              href="/signup"
              className="button-korobo"
              whileHover={{ scale: 1.1 }}
            >
              Inscription
            </motion.a>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white p-4 shadow-lg"
          >
            <div className="flex flex-col space-y-3">
              {["Accueil", "Fonctionnalités", "FAQ", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block text-green-800"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
