import { CheckIcon } from "@heroicons/react/24/solid";

interface BenefitListProps {
  benefits: string[];
  title: string;
}

export function BenefitList({ benefits, title }: BenefitListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-base sm:text-lg font-medium mb-4 text-gray-700">
        {title}
      </h2>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-pea flex-shrink-0 mt-0.5" />
            <span className="text-sm sm:text-base text-gray-600">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
