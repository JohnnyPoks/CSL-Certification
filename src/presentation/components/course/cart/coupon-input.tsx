import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CouponInputProps {
  appliedCoupon?: string;
  onApply: (coupon: string) => void;
  onRemove: () => void;
}

export default function CouponInput({
  appliedCoupon,
  onApply,
  onRemove,
}: CouponInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const coupon = formData.get("coupon") as string;
    if (coupon) onApply(coupon);
  };

  if (appliedCoupon) {
    return (
      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
        <div className="flex items-center gap-2">
          <span className="font-medium">{appliedCoupon}</span>
          <span className="text-sm text-gray-600">est appliqué</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-gray-700"
          onClick={onRemove}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0">
      <Input
        name="coupon"
        placeholder="Entrer un code promo"
        className="flex-2 rounded-none"
      />
      <Button
        type="submit"
        variant="outline"
        className="flex-1 rounded-none bg-chelsea-gem text-white hover:bg-chelsea-gem/90"
      >
        Appliquer
      </Button>
    </form>
  );
}
