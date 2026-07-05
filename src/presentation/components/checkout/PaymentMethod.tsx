import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';

interface PaymentMethodProps {
  onPaymentMethodChange: (method: 'card' | 'paypal') => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ onPaymentMethodChange }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [saveCard, setSaveCard] = useState(false);

  const handleMethodChange = (method: 'card' | 'paypal') => {
    setPaymentMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Mode de paiement</h2>
        <div className="flex items-center text-sm text-gray-600">
          <LockClosedIcon className="h-4 w-4 mr-1" />
          Sécurisé et crypté
        </div>
      </div>

      <div className="space-y-4">
        <div className="border rounded-md p-4">
          <label className="flex items-center space-x-3 mb-4">
            <input
              type="radio"
              checked={paymentMethod === 'card'}
              onChange={() => handleMethodChange('card')}
              className="h-4 w-4 text-green-pea focus:ring-green-pea"
            />
            <span>Cartes</span>
          </label>

          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Numéro de carte
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-pea focus:border-green-pea"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Date d'expiration
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-pea focus:border-green-pea"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    CVC/CVV
                  </label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-pea focus:border-green-pea"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Nom sur la carte
                </label>
                <input
                  type="text"
                  placeholder="Nom sur la carte"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-pea focus:border-green-pea"
                />
              </div>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  className="h-4 w-4 text-green-pea focus:ring-green-pea"
                />
                <span className="text-sm">
                  Enregistrer cette carte pour mes achats ultérieurs
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="border rounded-md p-4">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              checked={paymentMethod === 'paypal'}
              onChange={() => handleMethodChange('paypal')}
              className="h-4 w-4 text-green-pea focus:ring-green-pea"
            />
            <span>PayPal</span>
          </label>
        </div>
      </div>
    </div>
  );
}; 