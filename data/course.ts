import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development",
    category:"Technology",
    duration: "4 Months",
    fee: "$150",

    description:
      "Learn modern web development from beginner to advanced level and build real-world websites and applications.",

    learn: [
      "Build responsive websites",
      "Learn React and Next.js",
      "Create full-stack web applications",
      "Understand API integration",
      "Deploy modern web projects",
    ],

    includes: {
      skillLevel: "Beginner to Advanced",
      certificate: "Yes, Included",
      projects: "5 Real Projects",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "HTML5 & CSS3",
        "JavaScript Fundamentals",
        "Responsive Web Design",
        "Git & GitHub Basics",
      ],

      semester2: [
        "React.js",
        "Next.js",
        "REST API Integration",
        "Final Full Stack Project",
      ],
    },
  },

  {
    id: 2,
    title: "Graphic Design & UI/UX",
     category:"Design",
    duration: "3 Months",
    fee: "$120",

    description:
      "Master creative design skills and learn professional UI/UX design tools used in the industry.",

    learn: [
      "Create professional logo designs",
      "Design mobile and web UI",
      "Use Figma and Photoshop professionally",
      "Understand UX principles",
      "Build creative design portfolios",
    ],

    includes: {
      skillLevel: "Beginner to Intermediate",
      certificate: "Yes, Included",
      projects: "4 Design Projects",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "Design Principles",
        "Typography & Color Theory",
        "Adobe Photoshop",
        "Logo Design Practice",
      ],

      semester2: [
        "UI Design with Figma",
        "UX Fundamentals",
        "Wireframing & Prototyping",
        "Final UI/UX Project",
      ],
    },
  },

  {
    id: 3,
    title: "English Communication Skills",
     category:"Language",
    duration: "2 Months",
    fee: "$80",

    description:
      "Improve your spoken English, communication, and presentation skills for professional success.",

    learn: [
      "Speak English confidently",
      "Improve grammar and vocabulary",
      "Practice interview communication",
      "Develop presentation skills",
      "Enhance pronunciation and fluency",
    ],

    includes: {
      skillLevel: "Beginner Friendly",
      certificate: "Yes, Included",
      projects: "Speaking Activities",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "Grammar Basics",
        "Vocabulary Building",
        "Daily Conversation Practice",
        "Pronunciation Training",
      ],

      semester2: [
        "Public Speaking",
        "Interview Preparation",
        "Presentation Skills",
        "Final Speaking Assessment",
      ],
    },
  },

  {
    id: 4,
    title: "Data Science & AI Basics",
     category:"Technology",
    duration: "5 Months",
    fee: "$180",

    description:
      "Learn data analysis, machine learning fundamentals, and AI concepts using modern tools and datasets.",

    learn: [
      "Analyze real-world datasets",
      "Understand machine learning basics",
      "Create AI prediction systems",
      "Visualize data professionally",
      "Use Python for data science",
    ],

    includes: {
      skillLevel: "Intermediate",
      certificate: "Yes, Included",
      projects: "6 AI Projects",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "Python Basics",
        "Pandas & NumPy",
        "Data Visualization",
        "Statistics for Data Science",
      ],

      semester2: [
        "Machine Learning",
        "Model Training",
        "AI Concepts",
        "Prediction System Project",
      ],
    },
  },

  {
    id: 5,
    title: "Digital Marketing",
     category:"Marketing",
    duration: "3 Months",
    fee: "$100",

    description:
      "Learn how businesses grow online using SEO, social media marketing, and digital advertising strategies.",

    learn: [
      "Run social media campaigns",
      "Understand SEO optimization",
      "Create marketing strategies",
      "Analyze advertising performance",
      "Build brand awareness online",
    ],

    includes: {
      skillLevel: "Beginner to Intermediate",
      certificate: "Yes, Included",
      projects: "3 Marketing Campaigns",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "Marketing Fundamentals",
        "SEO Basics",
        "Social Media Marketing",
        "Content Strategy",
      ],

      semester2: [
        "Google Ads",
        "Facebook Advertising",
        "Analytics & Reporting",
        "Final Campaign Project",
      ],
    },
  },

  {
    id: 6,
    title: "Mobile App Development",
     category:"Technology",
    duration: "4 Months",
    fee: "$160",

    description:
      "Build modern Android and iOS applications using powerful mobile development frameworks.",

    learn: [
      "Build mobile applications",
      "Design responsive mobile UI",
      "Connect apps with APIs",
      "Manage app state effectively",
      "Deploy mobile applications",
    ],

    includes: {
      skillLevel: "Beginner to Advanced",
      certificate: "Yes, Included",
      projects: "5 Mobile Apps",
      access: "Lifetime Access",
    },

    modules: {
      semester1: [
        "Flutter / React Native Basics",
        "Mobile UI Design",
        "Navigation System",
        "Mini App Development",
      ],

      semester2: [
        "API Integration",
        "Authentication System",
        "Database Integration",
        "Final Mobile App Project",
      ],
    },
  },
];