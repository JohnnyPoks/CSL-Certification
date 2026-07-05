interface CartSummaryProps {
  total: number;
  itemCount: number;
}

export const CartSummary = ({ total, itemCount }: CartSummaryProps) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-2xl font-bold">{total.toFixed(2)}€</span>
      </div>

      <button
        className="w-full py-3 bg-green-pea text-white rounded-lg font-semibold hover:bg-green-pea/90 transition-colors"
        onClick={() => {
          // TODO: Implement checkout logic
          console.log("Proceeding to checkout");
        }}
      >
        Passer à la caisse
      </button>

      <p className="mt-4 text-sm text-gray-600 text-center">
        {itemCount} {itemCount > 1 ? "cours" : "cours"} dans votre panier
      </p>
    </div>
  );
};
