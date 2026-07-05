export interface SubscriptionPlan {
  id: string;
  name: string;
  type: "LEARNER" | "TEACHER" | "BUSINESS_LEARNER" | "BUSINESS_TEACHER";
  price?: {
    monthly?: number;
    yearly?: number;
  };
  commission?: {
    platformMarketing: number;
    teacherMarketing: number;
  };
  features: string[];
  description: string;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  status: "ACTIVE" | "CANCELLED" | "EXPIRED";
  startDate: Date;
  endDate: Date;
  nextBillingDate: Date;
  autoRenew: boolean;
  billingCycle: "MONTHLY" | "YEARLY";
  amount: number;
  currency: string;
}

export interface IUserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  subscription?: UserSubscription;
}
