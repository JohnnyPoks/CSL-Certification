import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interfaces
import { SubscriptionPlan } from "../../../domain/interfaces/Subscription";

export default function SubscriptionCheckout() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<{
    plan: SubscriptionPlan;
    billingCycle: "MONTHLY" | "YEARLY";
    timestamp: number;
  } | null>(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem("selectedPlan");
    if (!storedPlan) {
      navigate("/subscription");
      return;
    }

    const parsedPlan = JSON.parse(storedPlan);
    // Check if the plan selection is not older than 30 minutes
    if (Date.now() - parsedPlan.timestamp > 30 * 60 * 1000) {
      localStorage.removeItem("selectedPlan");
      navigate("/subscription");
      return;
    }

    setSelectedPlan(parsedPlan);
  }, [navigate]);

  if (!selectedPlan) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Complete Your Subscription
          </h1>

          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <p className="text-gray-600">{selectedPlan.plan.name}</p>
            <p className="text-gray-600">
              {selectedPlan.billingCycle.toLowerCase()} billing
            </p>
          </div>

          {/* Add payment form here */}
          <div className="space-y-4">
            <button
              className="w-full bg-green-pea text-white py-2 px-4 rounded-md hover:bg-green-pea/90 transition-colors"
              onClick={() => {
                /* Implement payment processing */
              }}
            >
              Complete Purchase
            </button>
            <button
              className="w-full text-gray-600 hover:text-gray-900"
              onClick={() => navigate("/subscription")}
            >
              Back to Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
