import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import SectionHeading from "../../shared/section-heading";
import PriceDisplay from "./price-display";
import CouponInput from "./coupon-input";

interface PersonalPlanProps {
  price: number;
  discountPrice?: number;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  appliedCoupon?: string;
  onApplyCoupon: (coupon: string) => void;
  onRemoveCoupon: () => void;
}

export default function PersonalPlan({
  price,
  discountPrice,
  onAddToCart,
  onAddToWishlist,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}: PersonalPlanProps) {
  return (
    <div className="space-y-4">
      <div>
        <SectionHeading
          title="Abonnez-vous aux formations CSL"
          subtitle="Accédez à cette formation et plus de 2000+ formations certifiantes avec l'abonnement Personnel."
        />
        <a href="#" className="text-green-pea hover:text-parsley text-sm">
          En savoir plus
        </a>
      </div>

      <Button
        variant="secondary"
        className="w-full bg-green-pea text-white hover:bg-green-pea/90 text-sm py-2"
      >
        Essayer l'abonnement Personnel gratuitement
      </Button>

      <div className="text-center text-xs sm:text-sm text-gray-600 space-y-1">
        <p>À partir de 10€/mois après l'essai</p>
        <p>Annulez à tout moment</p>
      </div>

      <div className="text-center text-sm">ou</div>

      <div className="space-y-3">
        <PriceDisplay price={price} discountPrice={discountPrice} />

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 border-green-pea text-green-pea text-sm py-2 px-3 hover:bg-green-pea/10"
            onClick={onAddToCart}
          >
            Ajouter au panier
          </Button>
          <Button
            variant="outline"
            className="border-green-pea text-green-pea p-2 hover:bg-green-pea/10"
            onClick={onAddToWishlist}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-600 space-y-1">
          <p>Garantie satisfait ou remboursé pendant 30 jours</p>
          <p>Accès illimité</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between text-xs sm:text-sm gap-2">
        <button className="text-green-pea hover:text-parsley">
          Partager
        </button>
        <button className="text-green-pea hover:text-parsley">
          Offrir cette formation
        </button>
        <button className="text-green-pea hover:text-parsley">
          Code promo
        </button>
      </div>

      <CouponInput
        appliedCoupon={appliedCoupon}
        onApply={onApplyCoupon}
        onRemove={onRemoveCoupon}
      />
    </div>
  );
}
