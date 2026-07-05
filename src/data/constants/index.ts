const moreFromCSL = [
  { title: "CSL Business", link: "#" },
  // { title: "Get the app", link: "#" },
  // { title: "Invite friends", link: "#" },
  { title: "Aide et Support", link: "#" },
];

const headerDropdownItems = [
  {
    trigger: "CSL Business",
    link: "/business/registration",
    content: {
      description: "Donnez à votre équipe l'accès à plus de 27 000 cours CSL, à tout moment et n'importe où.",
      linkText: "Essayer CSL Business",
    },
  },
  {
    trigger: "Enseigner",
    link: "#", 
    content: {
      description: "Devenez un instructeur et partagez vos connaissances avec le monde.",
      linkText: "Commencer à enseigner",
    },
  },
];

const categories = [
  {
    categoryType: "Development",
    subCategories: [
      {
        name: "Web Development",
        popularTopics: ["JavaScript", "React JS", "Angular", "CSS", "Next.js"],
      },
      {
        name: "Data Science",
        popularTopics: ["Python", "R", "SQL", "Machine Learning", "Deep Learning"],
      },
      {
        name: "Mobile Development",
        popularTopics: ["Flutter", "React Native", "Swift", "Kotlin"],
      },
    ],
  },
  {
    categoryType: "Business",
    subCategories: [
      {
        name: "Entrepreneurship",
        popularTopics: ["Business Ideas", "Startup Funding", "Growth Strategies", "Lean Startup", "Business Planning"],
      },
      {
        name: "Leadership & Management",
        popularTopics: ["Leadership Skills", "Team Management", "Conflict Resolution", "Project Management", "Agile"],
      },
      {
        name: "Business Strategy",
        popularTopics: ["Competitive Analysis", "Strategic Planning", "Market Entry", "Business Analysis", "Corporate Strategy"],
      },
    ],
  },
  {
    categoryType: "Finance & Accounting",
    subCategories: [
      {
        name: "Financial Accounting",
        popularTopics: ["Financial Statements", "Balance Sheets", "Accounting Principles", "Bookkeeping", "Taxation"],
      },
      {
        name: "Investing & Stock Market",
        popularTopics: ["Stock Trading", "Investment Strategies", "Cryptocurrency", "Real Estate Investing", "Options Trading"],
      },
      {
        name: "Personal Finance",
        popularTopics: ["Budgeting", "Retirement Planning", "Debt Management", "Financial Planning", "Saving Strategies"],
      },
    ],
  },
  {
    categoryType: "IT & Software",
    subCategories: [
      {
        name: "Programming Languages",
        popularTopics: ["Python", "Java", "C#", "Ruby", "Go"],
      },
      {
        name: "Web Development",
        popularTopics: ["HTML", "CSS", "JavaScript", "Node.js", "Vue.js"],
      },
      {
        name: "Cloud Computing",
        popularTopics: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      },
    ],
  },
  {
    categoryType: "Office Productivity",
    subCategories: [
      {
        name: "Microsoft Office",
        popularTopics: ["Excel", "Word", "PowerPoint", "Outlook", "Access"],
      },
      {
        name: "Google Workspace",
        popularTopics: ["Google Sheets", "Google Docs", "Google Slides", "Google Drive", "Google Forms"],
      },
      {
        name: "Productivity Tools",
        popularTopics: ["Time Management", "Task Management", "Note Taking", "Collaboration Tools", "Automation"],
      },
    ],
  },
  {
    categoryType: "Personal Development",
    subCategories: [
      {
        name: "Self-Improvement",
        popularTopics: ["Mindfulness", "Time Management", "Goal Setting", "Positive Thinking", "Habits Formation"],
      },
      {
        name: "Productivity & Motivation",
        popularTopics: ["Motivational Speaking", "Focus Strategies", "Overcoming Procrastination", "Work-Life Balance", "Time Blocking"],
      },
      {
        name: "Emotional Intelligence",
        popularTopics: ["Emotional Awareness", "Social Skills", "Empathy", "Stress Management", "Mindset Growth"],
      },
    ],
  },
  {
    categoryType: "Design",
    subCategories: [
      {
        name: "Graphic Design",
        popularTopics: ["Adobe Photoshop", "Logo Design", "Illustrator", "Typography", "Branding"],
      },
      {
        name: "UI/UX Design",
        popularTopics: ["User Experience", "Wireframing", "Prototyping", "User Research", "Figma"],
      },
      {
        name: "Web Design",
        popularTopics: ["Responsive Design", "Web Typography", "HTML5", "CSS3", "Web Animation"],
      },
    ],
  },
  {
    categoryType: "Marketing",
    subCategories: [
      {
        name: "Digital Marketing",
        popularTopics: ["SEO", "Content Marketing", "Email Marketing", "Social Media Marketing", "PPC"],
      },
      {
        name: "Branding",
        popularTopics: ["Brand Strategy", "Brand Identity", "Brand Awareness", "Brand Positioning", "Brand Equity"],
      },
      {
        name: "Affiliate Marketing",
        popularTopics: ["Affiliate Networks", "Affiliate Programs", "SEO for Affiliate", "Product Promotion", "Email Campaigns"],
      },
    ],
  },
  {
    categoryType: "Lifestyle",
    subCategories: [
      {
        name: "Personal Finance",
        popularTopics: ["Budgeting", "Investing", "Financial Planning", "Saving Money", "Debt Management"],
      },
      {
        name: "Home & Garden",
        popularTopics: ["Interior Design", "Gardening", "Home Improvement", "DIY Projects", "Sustainable Living"],
      },
      {
        name: "Hobbies",
        popularTopics: ["Painting", "Photography", "Writing", "Traveling", "Cooking"],
      },
    ],
  },
  {
    categoryType: "Photography & Video",
    subCategories: [
      {
        name: "Photography",
        popularTopics: ["Camera Techniques", "Portrait Photography", "Landscape Photography", "Photo Editing", "Lighting Techniques"],
      },
      {
        name: "Video Production",
        popularTopics: ["Filmmaking", "Video Editing", "Storyboarding", "Cinematography", "Lighting for Video"],
      },
      {
        name: "Video Editing Software",
        popularTopics: ["Adobe Premiere", "Final Cut Pro", "DaVinci Resolve", "Filmora", "iMovie"],
      },
    ],
  },
  {
    categoryType: "Health & Fitness",
    subCategories: [
      {
        name: "Fitness",
        popularTopics: ["Strength Training", "Cardio Workouts", "Yoga", "Pilates", "Bodybuilding"],
      },
      {
        name: "Nutrition",
        popularTopics: ["Healthy Eating", "Meal Planning", "Weight Loss", "Supplements", "Dieting"],
      },
      {
        name: "Mental Health",
        popularTopics: ["Stress Management", "Mindfulness", "Self-care", "Mental Wellness", "Depression Management"],
      },
    ],
  },
  {
    categoryType: "Music",
    subCategories: [
      {
        name: "Music Production",
        popularTopics: ["Music Theory", "Beat Making", "Audio Engineering", "Music Composition", "Ableton Live"],
      },
      {
        name: "Instruments",
        popularTopics: ["Piano", "Guitar", "Drums", "Violin", "Saxophone"],
      },
      {
        name: "Singing & Vocal",
        popularTopics: ["Vocal Techniques", "Breathing Exercises", "Voice Control", "Singing for Beginners", "Performing Live"],
      },
    ],
  },
  {
    categoryType: "Teaching & Academics",
    subCategories: [
      {
        name: "Classroom Management",
        popularTopics: ["Teaching Strategies", "Student Engagement", "Behavior Management", "Curriculum Design", "Assessments"],
      },
      {
        name: "Language Learning",
        popularTopics: ["English as a Second Language", "Spanish", "French", "Mandarin", "German"],
      },
      {
        name: "Test Prep",
        popularTopics: ["SAT", "GRE", "GMAT", "ACT", "TOEFL"],
      },
    ],
  },
];

const searchData = {
  recentSearches: [
    "python programmation",
    "javascript débutant",
    "react hooks",
    "développement web",
  ],
  popularSearches: [
    "machine learning python",
    "science des données",
    "javascript",
    "react native",
    "développement flutter",
  ],
  courseCategories: [
    {
      name: "Python",
      count: "5 230 résultats",
      icon: "🐍",
    },
    {
      name: "Développement Web",
      count: "3 450 résultats",
      icon: "🌐",
    },
    {
      name: "Science des Données",
      count: "2 890 résultats",
      icon: "📊",
    },
  ],
};

const mockSearchResults = [
  {
    type: "course",
    title: "Formation Complète Python",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 125000,
    category: "Programmation",
    thumbnail: "https://picsum.photos/200/300?random=6",
  },
  {
    type: "course",
    title: "Python pour la Science des Données et le Machine Learning",
    instructor: "Jose Portilla",
    rating: 4.8,
    students: 140000,
    category: "Science des Données",
    thumbnail: "https://picsum.photos/200/300?random=7",
  },
  {
    type: "course",
    title: "The Web Developer Bootcamp 2024",
    instructor: "Colt Steele",
    rating: 4.9,
    students: 150000,
    category: "Web Development",
    thumbnail: "https://picsum.photos/200/300?random=2",
  },
  {
    type: "course",
    title: "Complete JavaScript Course",
    instructor: "Jonas Schmedtmann",
    rating: 4.9,
    students: 200000,
    category: "Web Development",
    thumbnail: "https://picsum.photos/200/300?random=4",
  },
  {
    type: "course",
    title: "The Complete Node.js Developer Course",
    instructor: "Andrew Mead",
    rating: 4.8,
    students: 85000,
    category: "Backend Development",
    thumbnail: "https://picsum.photos/200/300?random=5",
  },
  {
    type: "course",
    title: "React Native - The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.8,
    students: 95000,
    category: "Mobile Development",
    thumbnail: "https://picsum.photos/200/300?random=6",
  },
  {
    type: "course",
    title: "Introduction to Artificial Intelligence (AI)",
    instructor: "Prof. Andrew Ng",
    rating: 4.7,
    students: 120000,
    category: "AI & Machine Learning",
    thumbnail: "https://picsum.photos/200/300?random=8",
  },
  {
    type: "course",
    title: "Complete React Developer in 2024",
    instructor: "Andrei Neagoie",
    rating: 4.9,
    students: 130000,
    category: "Web Development",
    thumbnail: "https://picsum.photos/200/300?random=9",
  },
  {
    type: "course",
    title: "Digital Marketing Masterclass",
    instructor: "Phil Ebiner",
    rating: 4.6,
    students: 75000,
    category: "Marketing",
    thumbnail: "https://picsum.photos/200/300?random=10",
  },
];

const userMenuItems = {
  learning: [
    { label: "Mes apprentissages", link: "/course" },
    { label: "Mon panier", link: "/cart" },
    { label: "Liste de souhaits", link: "/wishlist" },
    { label: "Enseigner sur CSL", link: "/instructor/onboarding" },
  ],
  communication: [
    // { label: "Notifications", link: "/" },
    // { label: "Messages", link: "/", badge: 1 },
  ],
  account: [
    { label: "Paramètres du compte", link: "/profile" },
    // { label: "Moyens de paiement", link: "/" },
    { label: "Abonnements", link: "/subscription" },
    // { label: "Historique d'achats", link: "/" },
  ],
  support: [
    { label: "Aide et support", link: "/" },
    { label: "Déconnexion", link: "/login" },
  ],
};

const mockUser = {
  fullName: "John Doe",
  email: "john@example.com",
  headline: "Développeur Full Stack",
  bio: "Je suis un développeur full stack avec une passion pour la création d'applications web innovantes.",
  language: "Français",
  unreadMessages: 2,
  unreadNotifications: 3,
  links: {
    website: "https://www.example.com",
    twitter: "https://twitter.com/example",
    facebook: "https://facebook.com/example",
    linkedin: "https://linkedin.com/example",
    youtube: "https://youtube.com/example"
  }
};

const locations = [
  {
    name: "CSL AU CAMEROUN",
    address: "DOUALA : Ndogbong derrière CAMLAIT (Cameroun)",
    phone: ["+237 233 41 90 57", "694 35 46 02", "681 28 91 36"],
  },
  {
    name: "CSL EN REP. DU CONGO",
    address: "République du CONGO, Immeuble Intérim 2000",
    phone: ["+242 06 402 38 39", "05 609 88 02"],
  },
];

const footerLinks = [
  {
    title: "À propos",
    links: ["Qui sommes-nous", "Carrières", "Blog", "Partenaires"],
  },
  {
    title: "Support",
    links: ["Centre d'aide", "Contact", "FAQ"],
  },
  {
    title: "Légal",
    links: ["Conditions d'utilisation", "Politique de confidentialité"],
  },
];

const subscriptionPlans = [
  {
    id: "learner-plan",
    name: "Learner Plan",
    type: "LEARNER" as const,
    price: {
      monthly: 10,
      yearly: 120
    },
    features: [
      "Access to all Business Teacher Mode courses",
      "Access to all Independent Teacher Mode courses",
      "Downloadable course materials",
      "Certificate of completion",
      "24/7 Support"
    ],
    description: "Perfect for individuals looking to expand their knowledge and skills"
  },
  {
    id: "independent-teacher",
    name: "Independent Teacher Mode",
    type: "TEACHER" as const,
    commission: {
      platformMarketing: 45,
      teacherMarketing: 30
    },
    features: [
      "Create and publish courses immediately",
      "Automatic onboarding",
      "Course analytics",
      "Student engagement tools",
      "Marketing tools"
    ],
    description: "Start teaching and earning with your expertise"
  },
  // Add other plans...
];

export {
  headerDropdownItems,
  categories,
  moreFromCSL,
  mockSearchResults,
  searchData,
  userMenuItems,
  mockUser,
  locations,
  footerLinks,
  subscriptionPlans,
};
