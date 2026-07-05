import { useNavigate } from "react-router-dom";

// React Icons
import { HiCheck } from "react-icons/hi";

// Interfaces
import { SubscriptionPlan } from "../../../domain/interfaces";

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  billingCycle: "MONTHLY" | "YEARLY";
  onSelectPlan: (
    plan: SubscriptionPlan,
    billingCycle: "MONTHLY" | "YEARLY"
  ) => void;
}

export default function SubscriptionCard({
  plan,
  billingCycle,
  onSelectPlan,
}: SubscriptionCardProps) {
  const price =
    plan.price?.[billingCycle.toLowerCase() as "monthly" | "yearly"];
  const navigate = useNavigate();

  const handleSubscribe = () => {
    onSelectPlan(plan, billingCycle);
    navigate("/subscription/checkout");
  };

  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
        <p className="mt-2 text-gray-500">{plan.description}</p>

        {price ? (
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-500">/{billingCycle.toLowerCase()}</span>
          </div>
        ) : (
          <div className="mt-4">
            <span className="text-xl font-semibold text-gray-900">
              Commission Based
            </span>
            {plan.commission && (
              <div className="mt-2 text-sm text-gray-500">
                <p>Platform Marketing: {plan.commission.platformMarketing}%</p>
                <p>Teacher Marketing: {plan.commission.teacherMarketing}%</p>
              </div>
            )}
          </div>
        )}

        <ul className="mt-6 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <HiCheck className="h-5 w-5 text-green-pea flex-shrink-0" />
              <span className="ml-3 text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="mt-8 w-full bg-green-pea text-white py-2 px-4 rounded-md hover:bg-green-pea/90 transition-colors"
          onClick={handleSubscribe}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
