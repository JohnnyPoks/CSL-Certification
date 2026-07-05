import React from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';

interface OrderSummaryProps {
  originalPrice: number;
  totalPrice: number;
  courseCount: number;
  onCheckout: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  originalPrice,
  totalPrice,
  courseCount,
  onCheckout,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Résumé</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Prix original:</span>
          <span>{originalPrice.toFixed(2)} €</span>
        </div>

        <div className="flex justify-between font-semibold border-t pt-4">
          <span>Total: ({courseCount} cours)</span>
          <span>{totalPrice.toFixed(2)} €</span>
        </div>

        <div className="text-sm text-gray-600">
          En finalisant votre achat, vous acceptez nos{' '}
          <a href="#" className="text-green-pea hover:underline">
            Conditions d'utilisation
          </a>
          .
        </div>

        <button
          onClick={onCheckout}
          className="w-full bg-green-pea hover:bg-chelsea-gem text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
        >
          <LockClosedIcon className="h-5 w-5" />
          <span>Finaliser l'achat</span>
        </button>

        <div className="text-center text-sm text-gray-600">
          Garantie de remboursement de 30 jours
        </div>
      </div>
    </div>
  );
}; 