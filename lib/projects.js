export const projects = [
  {
    id: 1,
    slug: "nexus-academy",
    title: "Nexus Academy – Online Learning Platform",
    excerpt:
      "A subscription-based online learning platform with role-based access for students, instructors, and administrators.",
    description:
      "Nexus Academy is a scalable online learning platform built to deliver structured courses with lessons, assignments, and quizzes. It features secure authentication, role-based dashboards, instructor tools, and subscription-based enrollment.",
    fullDescription: `Nexus Academy is a full-featured online learning management system designed to support digital education at scale. The platform accommodates multiple user roles including students, instructors, and administrators, each with tailored dashboards and permissions.

Students can enroll in courses through a subscription model, access video lessons, complete assignments, and take interactive quizzes while tracking their learning progress. Instructors are provided with dedicated tools to create and manage courses, lessons, assignments, and assessments efficiently.

Core capabilities include:

- Secure authentication and authorization using JWT
- Role-based access control for students, instructors, and admins
- Course creation and management dashboard for instructors
- Video-based lessons with progress tracking
- Assignment submission and grading workflow
- Quiz system with automatic evaluation
- Subscription-based course access
- Learner progress tracking and analytics
- Fully responsive design across devices

Nexus Academy was built with scalability and performance in mind, leveraging Next.js on the frontend for fast rendering and SEO optimization, while Django REST Framework powers a secure and maintainable backend API.`,
    image: "/projects/nexus.webp",
    liveUrl: "https://nexusacademy.vercel.app",
    githubUrl: "https://github.com/OmarCypha700/nexus_academy_frontend",
    techStack: [
      "Next.js",
      "Django REST Framework",
      "SQL",
      "JWT",
      "Tailwind CSS",
    ],
    gallery: [
      {
        url: "/projects/nexus-1.webp",
        caption:
          "Student dashboard showing enrolled courses and progress tracking",
      },
      {
        url: "/projects/nexus-2.webp",
        caption: "Instructor dashboard for course and content management",
      },
      {
        url: "/projects/nexus-3.webp",
        caption: "Interactive quiz interface with instant feedback",
      },
      {
        url: "/projects/nexus-4.webp",
        caption: "Mobile-responsive layout on tablet devices",
      },
    ],
    // demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "JWT-based authentication with role management",
      "Instructor-led course creation and management",
      "Subscription-based enrollment system",
      "Video lessons with progress tracking",
      "Assignments and auto-graded quizzes",
      "Responsive and mobile-first UI",
    ],
  },

  {
    id: 2,
    slug: "clinova",
    title: "ClinOva – Nursing Practical Assessment App",
    excerpt:
      "A progressive web app for conducting, assessing, and managing nursing practical examinations digitally.",
    description:
      "ClinOva is a full-stack Django Progressive Web App designed to digitize nursing practical assessments. It enables structured evaluations, role-based workflows, offline usage, and secure record management for training institutions.",
    fullDescription: `ClinOva is a Progressive Web Application built to modernize the way nursing practical assessments are conducted in training institutions. The platform replaces paper-based assessment methods with a structured, digital, and auditable workflow.

The application supports multiple roles including students, assessors, and administrators, each with clearly defined permissions. Assessors can evaluate students using standardized rubrics, record scores and remarks in real time, and sync data seamlessly when connectivity is restored.

Key capabilities include:

- Digital nursing practical assessment forms
- Standardized scoring rubrics and checklists
- Offline-first functionality for low-connectivity environments
- Automatic data synchronization when online
- Role-based access control for assessors and administrators
- Secure student records and assessment history
- Reporting and performance summaries
- Installable PWA with native app-like experience

ClinOva is designed to improve assessment accuracy, reduce administrative workload, and ensure reliable record keeping while remaining easy to deploy across devices.`,
    image: "/projects/clinova.webp",
    liveUrl: "https://nursingpractical.vercel.app",
    githubUrl: "https://github.com/OmarCypha700/nursing_practical_app_frontend",
    techStack: [
      "Next.js",
      "Django REST Framework",
      "PWA",
      "SQL",
      "Tailwind CSS",
    ],
    gallery: [
      {
        url: "/projects/clinova-1.webp",
        caption: "Assessment dashboard showing student evaluation progress",
      },
      {
        url: "/projects/clinova-2.webp",
        caption: "Digital nursing practical assessment checklist",
      },
      {
        url: "/projects/clinova-3.webp",
        caption: "Offline data capture with automatic synchronization",
      },
    ],
    //   demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Offline-first PWA for practical assessments",
      "Standardized nursing assessment rubrics",
      "Role-based access for assessors and administrators",
      "Secure student assessment records",
      "Performance reports and summaries",
      "Installable app with native-like experience",
    ],
  },

  {
  id: 3,
  slug: "student-info-system",
  title: "Student Information Management System",
  excerpt:
    "An institutional system for managing student bio-data, academic records, and official documents securely.",
  description:
    "A web-based Student Information Management System designed for educational institutions to manage student bio information, academic records, certificates, transcripts, and official documents in a centralized platform.",
  fullDescription: `The Student Information Management System is a centralized web platform built to help educational institutions efficiently manage student records throughout the academic lifecycle.

The system enables administrators to securely capture, store, and retrieve student bio-data, academic records, and official documents such as certificates and transcripts. It replaces manual record keeping with a structured, searchable, and secure digital solution.

Core functionalities include:

- Student bio-data registration and management
- Secure storage of certificates, transcripts, and official documents
- Document retrieval and verification workflows
- Academic record management
- Role-based access control for administrators and staff
- Audit trails for record access and updates
- Secure file storage and data protection
- Responsive interface for desktop and mobile access

Designed with institutional requirements in mind, the system improves data accuracy, reduces administrative workload, and ensures long-term record integrity for schools and training institutions.`,
  image: "/projects/student-info.webp",
  liveUrl: "https://cypha.pythonanywhere.com",
  githubUrl: "https://github.com/OmarCypha700/Student-Information-System",
  techStack: ["Django", "Django Templates", "SQL"],
  gallery: [
    {
      url: "/projects/student-1.webp",
      caption: "Student bio-data management interface",
    },
    {
      url: "/projects/student-2.webp",
      caption: "Secure document upload and storage",
    },
    {
      url: "/projects/student-3.webp",
      caption: "Student record search and retrieval dashboard",
    },
  ],
  demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  features: [
    "Centralized student bio-data management",
    "Secure storage of certificates and transcripts",
    "Role-based access and permissions",
    "Advanced student record search",
    "Audit trails and access logging",
    "Responsive and institution-ready design",
  ],
},

  {
    id: 4,
    slug: "gymfit",
    title: "GymFit – Fitness Gym Landing Page",
    excerpt:
      "A high-impact fitness gym landing page designed to attract members, showcase programs, and drive sign-ups.",
    description:
      "GymFit is a modern fitness gym landing page built to promote gym services, trainers, classes, and membership plans with a bold, conversion-focused design.",
    fullDescription: `GymFit is a modern and visually engaging fitness gym landing page tailored for gyms, fitness centers, and personal trainers who want to grow their membership base.

The landing page focuses on strong branding, clear calls to action, and a smooth user experience that converts visitors into paying members.

This project includes:

- Hero section with motivational messaging and call-to-action
- Programs and class showcase
- Trainer profiles with experience highlights
- Membership plans and pricing section
- Testimonials and success stories
- Responsive design for mobile and desktop
- Contact and sign-up section
- Smooth animations and scroll interactions
- Performance-optimized layout

GymFit is ideal for gyms looking for a professional online presence that builds trust, highlights results, and encourages sign-ups.`,
    image: "/projects/gymfit.webp",
    liveUrl: "https://gymfit-cypha.netlify.app/",
    githubUrl: "https://github.com/OmarCypha700/GymFit",
    techStack: ["HTML", "CSS", "Responsive Design"],
    gallery: [
      {
        url: "/projects/gymfit-1.webp",
        caption: "Hero section with call-to-action",
      },
      {
        url: "/projects/gymfit-2.webp",
        caption: "Fitness programs and class offerings",
      },
      {
        url: "/projects/gymfit-3.webp",
        caption: "Trainer profiles and testimonials",
      },
    ],
    // demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Conversion-focused landing page layout",
      "Modern fitness-themed UI",
      "Membership plans and pricing display",
      "Trainer and class showcase",
      "Testimonials and success stories",
      "Fully responsive design",
    ],
  },

  //   {
  //     id: 5,
  //     slug: "data-analysis-toolkit",
  //     title: "Data Analysis Toolkit",
  //     excerpt:
  //       "A collection of scripts and utilities for academic data analysis.",
  //     description:
  //       "A Python based toolkit focused on cleaning, analyzing, and visualizing academic datasets, aimed at students and early stage researchers.",
  //     fullDescription: `The Data Analysis Toolkit is a comprehensive Python package designed to simplify common data analysis tasks for students and researchers working with academic datasets.

  // The toolkit provides:

  // - Data cleaning and preprocessing utilities
  // - Statistical analysis functions
  // - Visualization templates for common chart types
  // - Automated report generation
  // - Dataset validation tools
  // - Integration with popular data sources
  // - Jupyter notebook templates
  // - Documentation and tutorials

  // Whether you're working on a thesis, research project, or learning data science, this toolkit provides the essential utilities to streamline your workflow and produce professional results.`,
  //     image: "/projects/window.svg",
  //     liveUrl: "https://datatoolkit.example.com",
  //     githubUrl: "https://github.com/yourusername/data-toolkit",
  //     techStack: [
  //       "Python",
  //       "Pandas",
  //       "NumPy",
  //       "Matplotlib",
  //       "Seaborn",
  //       "Jupyter",
  //     ],
  //     gallery: [
  //       {
  //         url: "/projects/data-1.webp",
  //         caption: "Data visualization dashboard",
  //       },
  //       {
  //         url: "/projects/data-2.webp",
  //         caption: "Statistical analysis output",
  //       },
  //       {
  //         url: "/projects/data-3.webp",
  //         caption: "Jupyter notebook interface",
  //       },
  //     ],
  //     demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //     features: [
  //       "Data cleaning automation",
  //       "Statistical analysis tools",
  //       "Custom visualization templates",
  //       "Report generation",
  //       "CSV/Excel import/export",
  //       "Integration with NumPy/Pandas",
  //     ],
  //   },
];
