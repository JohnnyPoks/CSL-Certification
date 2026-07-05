import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FiEye, FiEyeOff } from "react-icons/fi";

// Assets
import signup01 from "/login.png";

// Interfaces
import { PasswordStrength } from "@/domain/interfaces";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    message: "",
    color: "bg-gray-200",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengths = {
      0: { message: "Très faible", color: "bg-red-500" },
      1: { message: "Faible", color: "bg-red-500" },
      2: { message: "Moyen", color: "bg-yellow-500" },
      3: { message: "Fort", color: "bg-green-500" },
      4: { message: "Très fort", color: "bg-green-500" },
      5: { message: "Excellent", color: "bg-green-500" },
    };

    setPasswordStrength({
      score,
      message: strengths[score as keyof typeof strengths].message,
      color: strengths[score as keyof typeof strengths].color,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom complet est requis";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email invalide";
      valid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img
          src={signup01}
          alt="Learning illustration"
          className="max-w-full"
        />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-6 lg:pl-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Inscrivez-vous et commencez à apprendre
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-black"
              >
                Nom complet
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Entrez votre nom complet"
                className={`mt-1 block w-full min-h-[50px] px-3 py-2 text-lg border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-green-pea focus:border-green-pea`}
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-black"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Entrez votre email"
                className={`mt-1 block w-full min-h-[50px] px-3 py-2 text-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-green-pea focus:border-green-pea`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-black"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Créez votre mot de passe"
                  className={`mt-1 block w-full min-h-[50px] px-3 py-2 text-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-green-pea focus:border-green-pea pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <FiEye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${passwordStrength.color} transition-all duration-300`}
                      style={{
                        width: `${(passwordStrength.score / 5) * 100}%`,
                      }}
                    />
                  </div>
                  <p
                    className={`text-sm mt-1 ${passwordStrength.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  >
                    {passwordStrength.message}
                  </p>
                </div>
              )}
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-lg bg-green-pea/80 hover:bg-green-pea text-white rounded-md transition-colors"
            >
              S'inscrire
            </button>
          </form>

          <div className="text-center space-y-4 text-xl">
            <p className="text-gray-600">
              Déjà inscrit ?{" "}
              <Link
                to="/login"
                className="text-green-pea/80 hover:text-green-pea font-bold underline"
              >
                Se connecter
              </Link>
            </p>
          </div>

          <p className="text-xs text-center text-gray-500">
            En vous inscrivant, vous acceptez nos{" "}
            <Link
              to="https://cfpcsl.com/"
              className="text-green-pea hover:underline"
            >
              Conditions d'utilisation
            </Link>{" "}
            et notre{" "}
            <Link
              to="https://cfpcsl.com/"
              className="text-green-pea hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
