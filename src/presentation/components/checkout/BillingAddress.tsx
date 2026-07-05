import React from 'react';

interface BillingAddressProps {
  onCountryChange: (country: string) => void;
}

export const BillingAddress: React.FC<BillingAddressProps> = ({ onCountryChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Adresse de facturation</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">
            Pays
          </label>
          <select
            id="country"
            className="w-full p-2 border border-gray-300 rounded-md max-w-md focus:ring-green-pea focus:border-green-pea"
            onChange={(e) => onCountryChange(e.target.value)}
            defaultValue="Cameroon"
          >
            <option value="Cameroon">Cameroun</option>
            <option value="Cameroon">Cameroun</option>
            <option value="Cameroon">Cameroun</option>
            <option value="Cameroon">Cameroun</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <p className="text-sm text-gray-500">
          CSL est tenu par la loi de collecter les taxes de transaction applicables pour les achats effectués dans certaines juridictions fiscales.
        </p>
      </div>
    </div>
  );
}; 