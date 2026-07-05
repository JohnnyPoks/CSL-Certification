import { Currency } from "@/models";
import { Timestamp } from "firebase/firestore";

// Interfaces
export interface IHeaderDropdownItem {
  trigger: React.ReactNode | string;
  link: string;
  content: {
    description: string;
    linkText: string;
  };
  className?: string;
}

export interface ISearchResult {
  type: 'course' | string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  category?: string;
  thumbnail?: string;
}

export interface IUserProfile {
  id?: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  headline: string;
  bio: string;
  language: string;
  avatar?: string;
  unreadMessages: number;
  unreadNotifications: number;
  subscription?: UserSubscription;
  links: {
    website: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  }
}

export interface IUserMenuItem {
  label: string;
  link: string;
  icon?: React.ReactNode;
  badge?: number;
}

export interface PasswordStrength {
  score: number;
  message: string;
  color: string;
}

export interface ISignUpForm {
  fullName: string;
  email: string;
  password: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  type: "LEARNER" | "TEACHER" | "BUSINESS_LEARNER" | "BUSINESS_TEACHER";
  price?: {
    monthly?: number;
    yearly?: number;
  };
  features: string[];
  commission?: {
    platformMarketing: number;
    teacherMarketing: number;
  };
  description: string;
  isPopular?: boolean;
}

export interface UserSubscription {
  id: string;
  userId: string;
  planId: string;
  status: "ACTIVE" | "CANCELLED" | "EXPIRED";
  startDate: Timestamp;
  endDate: Timestamp;
  autoRenew: boolean;
  billingCycle: "MONTHLY" | "YEARLY";
  price: number;
  currency: Currency;
}
