interface TrustedByProps {
  companies: Array<{
    name: string;
    logo: string;
  }>;
}

export function TrustedBy({ companies }: TrustedByProps) {
  return (
    <div className="mt-12">
      <h3 className="text-center text-base sm:text-lg font-medium mb-6 sm:mb-8 text-gray-700">
        Ils nous font confiance
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
        {companies.map((company) => (
          <div
            key={company.name}
            className="w-24 sm:w-32 h-12 sm:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
