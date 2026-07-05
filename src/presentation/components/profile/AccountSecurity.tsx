import { useState } from "react";

// ICONS
import { FiEye, FiEyeOff } from "react-icons/fi";

// INTERFACES
import { IUserProfile } from "../../../domain/interfaces";

interface PasswordStrength {
  score: number;
  message: string;
  color: string;
}

interface AccountSecurityProps {
  profile: IUserProfile;
  onProfileUpdate: (profile: IUserProfile) => void;
}

const AccountSecurity = ({ profile }: AccountSecurityProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({
    score: 0,
    message: "",
    color: "bg-gray-200",
  });

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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
    setError("");

    if (name === "newPassword") {
      checkPasswordStrength(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    if (passwords.newPassword === "") {
      setError("Le mot de passe ne peut être vide");
      return;
    }
    if (passwordStrength.score < 3) {
      setError("Le mot de passe n'est pas assez fort");
      return;
    }
    // TODO: Implement password change logic
    console.log("Changing password:", passwords.newPassword);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">Compte</h1>
      <p className="text-gray-600 mb-6">
        Modifiez vos paramètres de compte et changez votre mot de passe ici.
      </p>

      {/* Email Section */}
      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-4">Email:</h2>
        <div className="p-4 border rounded bg-gray-50">
          Votre adresse email est{" "}
          <span className="font-medium text-green-pea">{profile.email}</span>
        </div>
      </section>

      {/* Password Change Section */}
      <section className="mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nouveau mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                autoComplete="off"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 pr-10 border rounded focus:ring-2 focus:ring-green-pea"
                placeholder="Entrez le nouveau mot de passe"
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
            {passwords.newPassword && (
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
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                autoComplete="off"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 pr-10 border rounded focus:ring-2 focus:ring-green-pea"
                placeholder="Retapez le nouveau mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 bg-red-500/10 p-4 rounded text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="px-6 py-2 bg-green-pea/90 text-white rounded hover:bg-green-pea"
          >
            Changer le mot de passe
          </button>
        </form>
      </section>

      {/* 2FA Section */}
      <section className="bg-white border rounded-lg p-6">
        <h2 className="font-semibold text-lg mb-2">
          Authentification à deux facteurs
        </h2>
        <p className="text-gray-600 mb-4">
          Renforcez la sécurité de votre compte en exigeant qu'un code vous soit
          envoyé par email lors de la connexion. Pour plus d'informations sur le
          fonctionnement de l'authentification à deux facteurs, consultez notre{" "}
          <a href="#" className="text-green-pea hover:text-green-pea/80">
            article du Centre d'aide
          </a>
          .
        </p>
        <button className="px-6 py-2 bg-green-pea/10 cursor-not-allowed text-green-pea rounded">
          Activer (Bientôt disponible)
        </button>
      </section>
    </div>
  );
};

export default AccountSecurity;
