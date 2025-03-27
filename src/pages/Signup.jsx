import { useState } from "react";
import { motion } from "framer-motion";

function Signup() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    companyName: false,
    email: false,
    password: false,
    emailInvalid: false,

    // passwordLength: false,
    // passwordDigit: false,
    // passwordLetter: false,
    // passwordSpecial: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs requis
    const newErrors = {
      companyName: !formData.companyName,
      email: !formData.email,
      password: !formData.password,
      emailInvalid: formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
      passwordLength: formData.password.length < 6,

      /** Pour renforcer la sécurité (Pour l'à venir) */
      // passwordDigit: !/\d/.test(formData.password),
      // passwordLetter: !/[a-zA-Z]/.test(formData.password),
      // passwordSpecial: !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
      /** */
    };

    setErrors(newErrors);

    // Si aucune erreur, soumettre le formulaire
    if (!Object.values(newErrors).includes(true)) {
      console.log("Formulaire soumis avec succès");
      // Logic de soumission du formulaire ici (création de compte)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si l'utilisateur modifie le champ, retirer l'erreur associée
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
      emailInvalid: false,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Créer un compte
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="company-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom de l’entreprise
            </label>
            <input
              id="company-name"
              name="companyName" 
              type="text"
              value={formData.companyName}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.companyName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              // required
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              // required
            />
            {errors.email && !formData.email && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
            {errors.emailInvalid && formData.email && (
              <span className="text-red-500 text-sm">
                Le format de l&apos;e-mail est invalide
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md sm:text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              // required
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Ce champ est requis<br /></span>
            )}
            {errors.passwordLength && (
              <span className="text-red-500 text-sm">
                Le mot de passe doit contenir au moins 6 caractères
              </span>
            )}
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="w-full button-korobo transition-all duration-300"
          >
            Créer un compte
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Signup;
