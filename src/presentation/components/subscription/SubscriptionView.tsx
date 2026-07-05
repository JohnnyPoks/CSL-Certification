import { Link } from "react-router-dom";

// Interfaces
import { IUserProfile } from "../../../domain/interfaces/Subscription";

interface SubscriptionViewProps {
  profile: IUserProfile;
}

export default function SubscriptionView({ profile }: SubscriptionViewProps) {
  const hasActiveSubscription = profile.subscription?.status === "ACTIVE";

  if (!hasActiveSubscription) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            No Active Subscription
          </h2>
          <p className="text-gray-600 mb-6">
            Choose a subscription plan to access all our features and courses.
          </p>
          <Link
            to="/subscription"
            className="inline-block bg-green-pea text-white px-6 py-2 rounded-md hover:bg-green-pea/90 transition-colors"
          >
            View Plans
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Current Plan</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {profile.subscription?.planName}
            </h3>
            <p className="text-gray-500">
              {profile.subscription?.billingCycle === "MONTHLY"
                ? "Monthly"
                : "Yearly"}{" "}
              Plan
            </p>
          </div>
          <span className="text-green-pea font-semibold">Active</span>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Next billing date</span>
            <span className="font-medium">
              {formatDate(profile.subscription?.nextBillingDate)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">
              ${profile.subscription?.amount}/
              {profile.subscription?.billingCycle.toLowerCase()}
            </span>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button className="text-gray-600 hover:text-gray-900">
            Cancel Subscription
          </button>
          <Link
            to="/subscription"
            className="text-green-pea hover:text-green-pea/90"
          >
            Change Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
