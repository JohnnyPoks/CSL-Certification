import { useState } from "react";
import { IUserProfile } from "../../../domain/interfaces";

interface CloseAccountProps {
  profile: IUserProfile;
  onProfileUpdate: (profile: IUserProfile) => void;
}

const CloseAccount = ({ profile }: CloseAccountProps) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleCloseAccount = async () => {
    // TODO: Implement account closure logic
    console.log("Closing account for:", profile.email);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">Fermer le compte</h1>
      <p className="text-gray-600 mb-6">
        Fermez définitivement votre compte.
      </p>

      {/* Warning Section */}
      <section className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-red-600 font-semibold text-lg mb-4">
            Attention:
          </h2>
          <p className="text-gray-700 mb-4">
            Si vous fermez votre compte, vous serez désabonné de tous vos cours 
            et perdrez l'accès à votre compte et aux données associées à votre compte pour toujours, 
            même si vous choisissez de créer un nouveau compte avec la même adresse e-mail à l'avenir.
          </p>
          <p className="text-gray-700">
            Veuillez noter que si vous souhaitez réactiver votre compte après avoir soumis une demande 
            de suppression, vous aurez 14 jours à compter de la date de soumission initiale pour 
            contacter <span className="text-green-pea">support@csl.com</span> pour annuler cette demande.
          </p>
        </div>
      </section>

      {/* Action Section */}
      <section>
        {!isConfirmOpen ? (
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Fermer le compte
          </button>
        ) : (
          <div className="bg-gray-50 border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">
              Êtes-vous sûr de vouloir fermer votre compte ?
            </h3>
            <p className="text-gray-600 mb-4">
              Cette action est irréversible après la période de grâce de 14 jours.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleCloseAccount}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirmer la fermeture
              </button>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CloseAccount;
