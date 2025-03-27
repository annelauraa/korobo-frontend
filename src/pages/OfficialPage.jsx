import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import "../App.css";

function OfficialPage() {
  return (
    <div>
      <Navbar />
      {/* Corps de page */}
      <motion.div className=" main-container py-12 sm:py-16 text-white">
        <div className="min-h-screen max-w-7xl mx-auto px-6 lg:px-8">
          {/* <motion.section className="ml-35 mt-15"> */}
          <motion.section className="flex flex-col p-10 gap-3">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl "
            >
              <span className="text-white">Bienvenue sur</span>
            </motion.h1>
            <motion.h1>
              <span className="text-8xl font-bold text-korobo "> KOROBO</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-white w-100"
            >
              L`application KOROBO vous permet de gérer efficacement la
              maintenance de vos sites photovoltaïques.
            </motion.p>
            <hr className="mt-5 w-50 text-stone-600" />
            <motion.a
              href="/signup"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-4 button-korobo lg:w-35 md:w-35 xs:w-full"
            >
              Créer un compte
            </motion.a>
          </motion.section>
          {/* Section de présentation */}
          {/* <motion.section
            id="features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-35 ml-35"
          >
            <h2 className="text-3xl font-semibold text-white">
              Nos fonctionnalités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {[
                "Gestion des Sites",
                "Suivi des Interventions",
                "Notifications en Temps Réel",
              ].map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold text-korobo">{title}</h3>
                  <p className="mt-2 text-stone-900">
                    {title === "Gestion des Sites"
                      ? "Ajoutez et gérez vos sites photovoltaïques avec toutes les informations nécessaires."
                      : title === "Suivi des Interventions"
                      ? "Planifiez, suivez et gérez les interventions techniques selon le type de contrat du site."
                      : "Recevez des notifications concernant les nouvelles interventions et les rappels de maintenances."}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section> */}
        </div>
      </motion.div>
    </div>
  );
}

export default OfficialPage;
