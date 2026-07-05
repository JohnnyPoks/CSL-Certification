import { Timestamp } from "firebase/firestore";

export enum Currency {
  EUR = "EUR",
  USD = "USD",
}

export enum PlanType {
  TEACHER = "Teacher",
  BUSINESS_LEARNER = "Business Learner",
  BUSINESS_TEACHER = "Business Teacher",
}

export enum CourseLevel {
  DEBUTANT = "DEBUTANT",
  INTERMEDIAIRE = "INTERMEDIAIRE",
  AVANCE = "AVANCE",
}

export enum PublishStatus {
  BROUILLON = "BROUILLON",
  EN_REVUE = "EN_REVUE",
  PUBLIE = "PUBLIE",
  REJETE = "REJETE",
}

export enum ContentType {
  VIDEO = "Video",
  DOCUMENT = "Document",
  QUIZ = "Quiz",
  ASSIGNMENT = "Assignment",
}

export enum QuizQuestionType {
  MULTIPLE_CHOICE = "Multiple Choice",
  TRUE_FALSE = "True/False",
  OPEN_ENDED = "Open Ended",
}

export enum UserRole {
  ADMIN = "Admin",
  TEACHER = "Teacher",
  STUDENT = "Student",
  BUSINESS_ADMIN = "Business Admin",
}

// User Related Interfaces
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoURL?: string;
  biography?: string;
  title?: string;
  compTimestamp?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  role: UserRole;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  lastLoginAt: Timestamp;
  isActive: boolean;
  isEmailVerified: boolean;
}

export interface TeacherProfile extends User {
  expertise: string[];
  totalStudents: number;
  totalCourses: number;
  averageRating: number;
  totalReviews: number;
  paymentInfo: {
    paypalEmail?: string;
    bankAccount?: {
      accountName: string;
      accountNumber: string;
      bankName: string;
      swiftCode: string;
    };
  };
  commissionRate: number; // Percentage
  totalEarnings: number;
}

export interface BusinessAccount {
  id: string;
  name: string;
  type: "LEARNER" | "TEACHER";
  plan: PlanType;
  maxUsers: number;
  currentUsers: number;
  adminUsers: string[]; // User IDs
  subscriptionStatus: "ACTIVE" | "SUSPENDED" | "CANCELLED";
  billingInfo: {
    address: string;
    city: string;
    country: string;
    vatNumber?: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
  };
  subscriptionDetails: {
    planId: string;
    startDate: Timestamp;
    endDate: Timestamp;
    autoRenew: boolean;
    price: number;
    currency: Currency;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Course Related Interfaces
export type CourseSectionItemType = "video" | "article" | "quiz" | "resource";

export interface CourseSectionItem {
  id: string;
  type: CourseSectionItemType;
  title: string;
  duration?: string;
  preview?: boolean;
  questions?: number;
}

export interface CourseSection {
  id: string;
  title: string;
  lectures: number;
  duration: number;
  items?: CourseSectionItem[];
  collapsed?: boolean;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  language: string;
  level: CourseLevel;
  category: string;
  subCategories?: string[];
  whatYouWillLearn?: string[];
  requirements?: string[];
  targetAudience?: string[];
  instructorId: string;
  instructorName: string;
  thumbnailURL: string;
  price: number;
  currency: Currency;
  discountPrice?: number;
  rating?: number;
  totalRatings?: number;
  totalStudents?: number;
  status: PublishStatus;
  isComplete: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt?: Timestamp;
  lastUpdated?: string;
  estimatedDuration: number;
  certificateEnabled?: boolean;
  hasSubtitles?: boolean;
  sections?: CourseSection[];
}

export interface Section {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  order: number;
  totalDuration: number; // in minutes
  totalLectures: number;
  isPublished: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Content {
  id: string;
  sectionId: string;
  courseId: string;
  title: string;
  description?: string;
  type: ContentType;
  order: number;
  duration?: number; // for videos
  isPreview: boolean;
  isDownloadable: boolean;
  contentURL: string;
  thumbnailURL?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Quiz extends Content {
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number; // in minutes
  maxAttempts: number;
  shuffleQuestions: boolean;
  showCorrectAnswers: boolean;
}

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

export enum EnrollmentStatus {
  ACTIVE = "Active",
  COMPLETED = "Completed",
  EXPIRED = "Expired",
}

// Enrollment and Progress Related Interfaces
export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrollmentDate: Timestamp;
  completionDate?: Timestamp;
  progress: number; // Percentage
  status: EnrollmentStatus;
  certificateId?: string;
  lastAccessedAt: Timestamp;
  purchaseInfo: {
    price: number;
    currency: Currency;
    discountApplied?: number;
    promoCode?: string;
    referralCode?: string;
  };
}

export enum ProgressStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

export interface Progress {
  id: string;
  enrollmentId: string;
  userId: string;
  courseId: string;
  contentId: string;
  status: ProgressStatus;
  progress: number; // Percentage for videos
  lastAccessedAt: Timestamp;
  completedAt?: Timestamp;
  timeSpent: number; // in seconds
}

export enum QuizAttemptStatus {
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  enrollmentId: string;
  startTime: Timestamp;
  endTime?: Timestamp;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: {
    questionId: string;
    answer: string | string[];
    isCorrect: boolean;
  }[];
  status: QuizAttemptStatus;
  attempt: number;
}

// Review and Rating Related Interfaces
export interface Review {
  id: string;
  courseId: string;
  userId: string;
  rating: number;
  review?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isVerifiedPurchase: boolean;
  helpfulVotes: number;
  reportCount: number;
  replies?: ReviewReply[];
}

export interface ReviewReply {
  id: string;
  reviewId: string;
  userId: string;
  content: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  isInstructor: boolean;
}

export enum TransactionType {
  COURSE_PURCHASE = "Course Purchase",
  SUBSCRIPTION = "Subscription",
  REFUND = "Refund",
  INSTRUCTOR_PAYOUT = "Instructor Payout",
}

export enum TransactionStatus {
  PENDING = "Pending",
  COMPLETED = "Completed",
  FAILED = "Failed",
  REFUNDED = "Refunded",
}

// Payment and Transaction Related Interfaces
export interface Transaction {
  id: string;
  userId: string;
  courseId?: string;
  businessAccountId?: string;
  amount: number;
  currency: Currency;
  type: TransactionType;
  status: TransactionStatus;
  paymentMethod: string;
  paymentId: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  metadata?: {
    discountApplied?: number;
    promoCode?: string;
    referralCode?: string;
    commission?: number;
  };
}

// Referral Program Related Interfaces
export interface ReferralProgram {
  id: string;
  userId: string;
  referralCode: string;
  totalReferrals: number;
  successfulReferrals: number;
  earnedCredits: number;
  earnedCash: number;
  currency: Currency;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export enum ReferralTransactionStatus {
  PENDING = "Pending",
  COMPLETED = "Completed",
  REJECTED = "Rejected",
}

export enum ReferralTransactionType {
  COURSE_CREDIT = "Course Credit",
  CASH = "Cash",
}

export interface ReferralTransaction {
  id: string;
  referrerId: string;
  referredUserId: string;
  courseId?: string;
  transactionId: string;
  reward: {
    type: ReferralTransactionType;
    amount: number;
    currency: Currency;
  };
  status: ReferralTransactionStatus;
  createdAt: Timestamp;
  processedAt?: Timestamp;
}

export enum PromoCodeType {
  PERCENTAGE = "Percentage",
  FIXED_AMOUNT = "Fixed Amount",
}

// Promotional and Marketing Related Interfaces
export interface PromoCode {
  id: string;
  code: string;
  type: PromoCodeType;
  value: number;
  currency?: Currency;
  startDate: Timestamp;
  endDate: Timestamp;
  maxUses?: number;
  currentUses: number;
  minPurchaseAmount?: number;
  applicableCourses?: string[]; // Course IDs
  applicableCategories?: string[];
  createdBy: string;
  isActive: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Certificate Related Interfaces
export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  enrollmentId: string;
  certificateNumber: string;
  issueDate: Timestamp;
  expiredDate: Timestamp;
  templateId: string;
  physicalDocumentUrl: string;
  instructorSignature: string;
  verificationUrl: string;
  metadata?: {
    completionDate: Timestamp;
    grade?: string;
    duration: string;
  };
}
