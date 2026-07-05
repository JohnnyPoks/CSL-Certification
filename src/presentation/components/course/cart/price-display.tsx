interface PriceDisplayProps {
  price: number;
  discountPrice?: number;
  currency?: string;
}

export default function PriceDisplay({
  price,
  discountPrice,
  currency = "€",
}: PriceDisplayProps) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-xl lg:text-2xl font-bold">
        {discountPrice?.toFixed(2) || price.toFixed(2)}
        {currency}
      </span>
    </div>
  );
}
