import { useState } from "react";

// ICONS
import { BsPersonCircle } from "react-icons/bs";

// INTERFACES
import { IUserProfile } from "../../../domain/interfaces";

interface PhotoUploadProps {
  profile: IUserProfile;
  onProfileUpdate: (profile: IUserProfile) => void;
}

const PhotoUpload = ({ profile, onProfileUpdate }: PhotoUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    // TODO: Implement actual file upload logic
    console.log("Uploading file:", selectedFile);
    // Update profile with new avatar URL
    onProfileUpdate({
      ...profile,
      avatar: preview || undefined
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">Photo</h1>
      <p className="text-gray-600 mb-6">
        Ajoutez une belle photo de vous pour votre profil.
      </p>

      {/* Image Preview */}
      <section className="mb-8">
        <h2 className="font-semibold text-lg mb-4">Aperçu de l'image</h2>
        <div className="border rounded-lg p-4 bg-gray-50 flex items-center justify-center">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <BsPersonCircle className="w-32 h-32 text-gray-400" />
          )}
        </div>
      </section>

      {/* Upload Section */}
      <section>
        <h2 className="font-semibold text-lg mb-4">Ajouter / Modifier l'image</h2>
        <div className="flex gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="px-4 py-2 bg-green-pea/80 text-white rounded hover:bg-green-pea disabled:opacity-50"
          >
            Télécharger l'image
          </button>
        </div>
      </section>

      {/* Save Button */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-green-pea/80 text-white rounded hover:bg-green-pea">
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default PhotoUpload;
