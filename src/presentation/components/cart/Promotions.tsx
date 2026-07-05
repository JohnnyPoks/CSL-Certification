interface PromotionsProps {
  appliedCoupon?: string;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon: () => void;
}

export const Promotions = ({
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}: PromotionsProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem("coupon") as HTMLInputElement;
    if (input.value.trim()) {
      onApplyCoupon(input.value.trim());
      input.value = "";
    }
  };

  return (
    <div className="p-4 sm:p-6 border-t border-gray-200">
      <h3 className="font-semibold mb-3 text-sm sm:text-base">Promotions</h3>

      {appliedCoupon && (
        <div className="flex items-center justify-between bg-chelsea-gem/10 p-2 sm:p-3 rounded mb-3">
          <span className="text-xs sm:text-sm text-chelsea-gem">
            {appliedCoupon} est appliqué
          </span>
          <button
            onClick={onRemoveCoupon}
            className="text-gray-500 hover:text-gray-700 p-1 sm:p-2"
            aria-label="Supprimer le code promo"
          >
            ×
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
        <input
          type="text"
          name="coupon"
          placeholder="Entrez votre code promo"
          className="w-full sm:flex-grow p-2 sm:p-3 text-sm border border-gray-300 rounded sm:rounded-r-none focus:outline-none focus:border-chelsea-gem"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-chelsea-gem text-white text-sm font-medium rounded sm:rounded-l-none hover:bg-chelsea-gem/90 transition-colors"
        >
          Appliquer
        </button>
      </form>
    </div>
  );
};
