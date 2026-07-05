import { useState } from "react";

// Components
import SubscriptionCard from "../../components/subscription/SubscriptionCard";

// Constants
import { subscriptionPlans } from "../../../data/constants";

// Interfaces
import { SubscriptionPlan } from "../../../domain/interfaces";

export default function SubscriptionPage() {
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<
    "MONTHLY" | "YEARLY"
  >("MONTHLY");

  const handleSelectPlan = (
    plan: SubscriptionPlan,
    billingCycle: "MONTHLY" | "YEARLY"
  ) => {
    // Store selected plan in localStorage or state management
    localStorage.setItem(
      "selectedPlan",
      JSON.stringify({
        plan,
        billingCycle,
        timestamp: new Date().getTime(),
      })
    );
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect plan for your learning journey
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative bg-white rounded-lg p-0.5 flex">
            <button
              onClick={() => setSelectedBillingCycle("MONTHLY")}
              className={`${
                selectedBillingCycle === "MONTHLY"
                  ? "bg-green-pea text-white"
                  : "text-gray-500"
              } relative py-2 px-6 rounded-md`}
            >
              Monthly
            </button>
            <button
              onClick={() => setSelectedBillingCycle("YEARLY")}
              className={`${
                selectedBillingCycle === "YEARLY"
                  ? "bg-green-pea text-white"
                  : "text-gray-500"
              } relative py-2 px-6 rounded-md ml-0.5`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              plan={plan}
              billingCycle={selectedBillingCycle}
              onSelectPlan={handleSelectPlan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
