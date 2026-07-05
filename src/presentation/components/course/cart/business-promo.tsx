import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../../shared/section-heading";

const BUSINESS_FEATURES = [
  "Pour les équipes de 2 utilisateurs ou plus",
  "Plus de 2000+ formations certifiantes en BTP",
  "Outils d'engagement et de suivi",
  "Intégrations SSO et LMS",
];

export default function BusinessPromo() {
  return (
    <div className="space-y-4">
      <div>
        <SectionHeading
          title="CSL Formation Pro"
          subtitle="Abonnez-vous à cette formation et plus de 2000+ formations certifiantes pour votre organisation."
        />
      </div>

      <Button
        variant="secondary"
        className="w-full bg-green-pea text-white hover:bg-green-pea/90 text-sm py-2"
      >
        Essayer CSL Formation Pro
      </Button>

      <ul className="space-y-2">
        {BUSINESS_FEATURES.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"
          >
            <Check className="w-4 h-4 shrink-0 text-green-pea mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
