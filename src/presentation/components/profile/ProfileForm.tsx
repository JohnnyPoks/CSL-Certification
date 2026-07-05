import { useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";

// INTERFACES
import { IUserProfile } from "../../../domain/interfaces";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="border-b p-2 mb-3 flex gap-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${
          editor.isActive("bold")
            ? "bg-green-pea/10 text-green-pea"
            : "hover:bg-green-pea/10"
        }`}
      >
        Gras
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${
          editor.isActive("italic")
            ? "bg-green-pea/10 text-green-pea"
            : "hover:bg-green-pea/10"
        }`}
      >
        Italique
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded ${
          editor.isActive("underline")
            ? "bg-green-pea/10 text-green-pea"
            : "hover:bg-green-pea/10"
        }`}
      >
        Souligné
      </button>
    </div>
  );
};

interface ProfileFormProps {
  profile: IUserProfile;
  onProfileUpdate: (profile: IUserProfile) => void;
}

const ProfileForm = ({ profile, onProfileUpdate }: ProfileFormProps) => {
  const [charCount, setCharCount] = useState(profile.headline?.length || 0);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: profile.bio || "",
    onUpdate: ({ editor }) => {
      handleChange("bio", editor.getHTML());
    },
  });

  const handleChange = (
    field: keyof IUserProfile,
    value: string | typeof profile.links
  ) => {
    if (field === "headline") {
      setCharCount(value.toString().length);
    }
    onProfileUpdate({ ...profile, [field]: value });
  };

  return (
    <div className="p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-2">Profil public</h1>
      <p className="text-gray-600 mb-6">
        Ajoutez des informations vous concernant
      </p>

      {/* Basic Information */}
      <section className="space-y-6 mb-8">
        <h2 className="font-semibold text-lg">Informations de base:</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Prénom</label>
            <input
              type="text"
              value={profile.fullName.split(" ")[0]}
              onChange={(e) =>
                handleChange(
                  "fullName",
                  `${e.target.value} ${profile.fullName
                    .split(" ")
                    .slice(1)
                    .join(" ")}`
                )
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-pea"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              value={profile.fullName.split(" ").slice(1).join(" ")}
              onChange={(e) =>
                handleChange(
                  "fullName",
                  `${profile.fullName.split(" ")[0]} ${e.target.value}`
                )
              }
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-pea"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Titre professionnel{" "}
              <span className="text-gray-400">({charCount}/60)</span>
            </label>
            <input
              type="text"
              value={profile.headline}
              onChange={(e) => handleChange("headline", e.target.value)}
              placeholder='Ex: "Instructeur sur CSL" ou "Architecte"'
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-pea"
              maxLength={60}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <div className="border rounded-lg hover:border-gray-200 focus-within:!border-green-pea/20 focus-within:ring-1 focus-within:ring-green-pea transition-all duration-200">
              <MenuBar editor={editor} />
              <EditorContent
                editor={editor}
                className="px-4 py-2 min-h-[200px] max-h-[200px] overflow-y-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Les liens et codes promo ne sont pas autorisés dans cette section.
            </p>
          </div>

          {/* <div>
            <label className="block text-sm font-medium mb-1">Langue</label>
            <select
              value={profile.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-pea"
            >
              <option value="English (US)">English (US)</option>
              <option value="Français">Français</option>
            </select>
          </div> */}
        </div>
      </section>

      {/* Social Links */}
      <section className="space-y-6">
        <h2 className="font-semibold text-lg">Liens:</h2>
        <div className="space-y-4">
          {Object.entries(profile.links).map(([platform, value]) => (
            <div key={platform}>
              <label className="block text-sm font-medium mb-1 capitalize">
                {platform}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) =>
                  handleChange("links", {
                    ...profile.links,
                    [platform]: e.target.value,
                  })
                }
                className="w-full p-2 border rounded focus:ring-2 focus:ring-green-pea"
                placeholder={`Votre profil ${platform}`}
              />
            </div>
          ))}
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

export default ProfileForm;
