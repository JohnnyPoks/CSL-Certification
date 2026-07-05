import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import login01 from "/login.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("L'email est requis");
      return;
    }
    if (!validateEmail(email)) {
      setError("Veuillez entrer une adresse email valide");
      return;
    }
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <img src={login01} alt="Learning illustration" className="max-w-full" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start p-6 lg:pl-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Connectez-vous pour continuer votre apprentissage
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-black"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Entrez votre email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={`mt-1 block w-full min-h-[50px] px-3 py-2 text-lg border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-green-pea focus:border-green-pea`}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-lg bg-green-pea/80 hover:bg-green-pea text-white rounded-md transition-colors"
            >
              Continuer avec email
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Autres options de connexion
              </span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="flex justify-center w-full items-center py-2 border border-gray-300 rounded-md hover:bg-green-pea/10">
              <FcGoogle className="text-4xl" />
            </button>
          </div>

          <div className="text-center space-y-4 text-xl">
            <p className="text-gray-600">
              Vous n'avez pas de compte?{" "}
              <Link
                to="/register"
                className="text-green-pea/80 hover:text-green-pea font-bold underline"
              >
                S'inscrire
              </Link>
            </p>
            <Link
              to="/organization-login"
              className="block text-green-pea/80 hover:text-green-pea font-bold underline"
            >
              Se connecter avec votre organisation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
