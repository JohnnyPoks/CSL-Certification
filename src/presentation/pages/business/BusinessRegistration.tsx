import { FormEvent, useState } from "react";
import { FormInput } from "../../components/business/FormInput";
import { FormSelect } from "../../components/business/FormSelect";
import { FormTextarea } from "../../components/business/FormTextarea";
import { BenefitList } from "../../components/business/BenefitList";
import { TrustedBy } from "../../components/business/TrustedBy";

const BENEFITS = [
  "Formez vos équipes avec plus de 28 000 cours dans 16 langues",
  "Préparez vos employés à plus de 200 examens de certification reconnus par l'industrie",
  "Développez des équipes techniques hautement qualifiées dans des environnements de pratique sans risque",
  "Identifiez les lacunes en compétences émergentes, les tendances d'apprentissage et les références de l'industrie",
  "Intégrez le contenu avec votre système de gestion de l'apprentissage existant",
];

const COMPANY_SIZES = [
  { value: "1-50", label: "1-50 employés" },
  { value: "51-200", label: "51-200 employés" },
  { value: "201-500", label: "201-500 employés" },
  { value: "501+", label: "501+ employés" },
];

const TRAINING_SIZES = [
  { value: "1-50", label: "1-50 personnes" },
  { value: "51-200", label: "51-200 personnes" },
  { value: "201-500", label: "201-500 personnes" },
  { value: "501+", label: "501+ personnes" },
];

const JOB_LEVELS = [
  { value: "individual", label: "Contributeur individuel" },
  { value: "manager", label: "Manager" },
  { value: "director", label: "Directeur" },
  { value: "vp", label: "Vice-président" },
  { value: "c-level", label: "C-Level" },
];

const TRUSTED_COMPANIES = [
  { name: "Volkswagen", logo: "/logos/vw.svg" },
  { name: "Samsung", logo: "/logos/samsung.svg" },
  { name: "Cisco", logo: "/logos/cisco.svg" },
  { name: "AT&T", logo: "/logos/att.svg" },
  { name: "P&G", logo: "/logos/pg.svg" },
  { name: "HP Enterprise", logo: "/logos/hpe.svg" },
  { name: "Citi", logo: "/logos/citi.svg" },
  { name: "Ericsson", logo: "/logos/ericsson.svg" },
];

export default function BusinessRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    companyName: "",
    companySize: "",
    trainingSize: "",
    jobTitle: "",
    jobLevel: "",
    trainingNeeds: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="lg:pr-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 lg:text-left text-center">
                Obtenez votre démo
              </h1>
              <p className="text-lg text-gray-600 lg:text-left text-center">
                Parlez-nous de vos besoins et nous élaborerons un plan
                personnalisé pour obtenir des résultats.
              </p>
            </div>

            <div className="mb-12 lg:mb-16">
              <BenefitList
                title="Avec nous comme partenaire d'apprentissage, vous pouvez :"
                benefits={BENEFITS}
              />
            </div>

            <div className="hidden lg:block">
              <TrustedBy companies={TRUSTED_COMPANIES} />
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Prénom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <FormInput
                label="Email professionnel"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FormInput
                label="Numéro de téléphone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <FormSelect
                label="Où êtes-vous situé ?"
                name="location"
                value={formData.location}
                onChange={handleChange}
                options={[]} // Add location options
                required
              />

              <FormInput
                label="Nom de l'entreprise"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormSelect
                  label="Taille de l'entreprise"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  options={COMPANY_SIZES}
                  required
                />

                <FormSelect
                  label="Nombre de personnes à former"
                  name="trainingSize"
                  value={formData.trainingSize}
                  onChange={handleChange}
                  options={TRAINING_SIZES}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Titre du poste"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />

                <FormSelect
                  label="Niveau de poste"
                  name="jobLevel"
                  value={formData.jobLevel}
                  onChange={handleChange}
                  options={JOB_LEVELS}
                  required
                />
              </div>

              <FormTextarea
                label="Quels sont les besoins en formation de votre organisation ?"
                name="trainingNeeds"
                value={formData.trainingNeeds}
                onChange={handleChange}
                placeholder="Décrivez vos besoins spécifiques..."
              />

              <button
                type="submit"
                className="w-full bg-green-pea hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-md transition-colors mt-6"
              >
                Soumettre
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                En vous inscrivant, vous acceptez nos{" "}
                <a href="#" className="text-chelsea-gem hover:underline">
                  conditions
                </a>{" "}
                et notre{" "}
                <a href="#" className="text-chelsea-gem hover:underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <TrustedBy companies={TRUSTED_COMPANIES} />
        </div>
      </div>
    </div>
  );
}
