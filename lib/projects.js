export const projects = [
  {
    id: 1,
    slug: "nexus-academy",
    title: "Nexus Academy",
    excerpt: "A subscription based online learning platform with role based access for students and instructors.",
    description:
      "Nexus Academy is an online education platform designed to deliver structured courses with lessons, assignments, and quizzes. It features authentication, role based access control, instructor dashboards, and subscription based enrollment.",
    fullDescription: `Nexus Academy is a comprehensive online learning management system built to facilitate digital education. The platform supports multiple user roles including students, instructors, and administrators, each with tailored dashboards and capabilities.

Key features include:
- User authentication and authorization with JWT
- Course creation and management for instructors
- Interactive lessons with rich media support
- Assignment submission and grading system
- Quiz creation with automatic grading
- Subscription-based access control
- Progress tracking and analytics
- Responsive design for all devices

The platform was built with scalability in mind, utilizing Next.js for the frontend to ensure fast page loads and excellent SEO, while Django REST Framework powers the backend API with robust security measures.`,
    image: "/projects/nexus_academy.webp",
    liveUrl: "https://nexusacademy.vercel.app",
    githubUrl: "https://github.com/OmarCypha700/nexus_academy_frontend",
    techStack: ["Next.js", "Django REST", "SQL", "JWT", "Tailwind CSS"],
    gallery: [
      {
        url: "/projects/nexus-1.jpg",
        caption: "Dashboard overview showing enrolled courses and progress",
      },
      {
        url: "/projects/nexus-2.jpg",
        caption: "Instructor panel for course management",
      },
      {
        url: "/projects/nexus-3.jpg",
        caption: "Interactive quiz interface with instant feedback",
      },
      {
        url: "/projects/nexus-4.jpg",
        caption: "Mobile responsive design on tablet",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
    features: [
      "Role-based authentication and authorization",
      "Course catalog with search and filtering",
      "Video lessons with progress tracking",
      "Interactive quizzes and assignments",
      "Real-time notifications",
      "Payment integration for subscriptions",
    ],
  },
  {
    id: 2,
    slug: "stock-ledger-system",
    title: "Stock Ledger Management System",
    excerpt: "A progressive web app for managing inventory, requisitions, and stock movements.",
    description:
      "A full stack Django PWA built for managing institutional stock records. It supports offline first usage, role based workflows, stock ledger tracking, and approval pipelines.",
    fullDescription: `The Stock Ledger Management System is a Progressive Web Application designed for institutions to efficiently manage their inventory, track stock movements, and handle requisition workflows.

Built with offline-first capabilities, the system ensures uninterrupted access even in low-connectivity environments. The application features:

- Comprehensive inventory management
- Multi-level approval workflows for requisitions
- Real-time stock level tracking
- Barcode scanning for quick item identification
- Detailed reporting and analytics
- Offline data synchronization
- Role-based access control for different departments

The PWA architecture allows installation on any device, providing a native app-like experience while maintaining the flexibility of web deployment.`,
    image: "/projects/globe.svg",
    liveUrl: "https://stockledger.example.com",
    githubUrl: "https://github.com/yourusername/stock-ledger",
    techStack: ["Django", "PWA", "SQLite", "Tailwind CSS", "Service Workers"],
    gallery: [
      {
        url: "/projects/stock-1.jpg",
        caption: "Main dashboard with stock overview",
      },
      {
        url: "/projects/stock-2.jpg",
        caption: "Requisition approval workflow",
      },
      {
        url: "/projects/stock-3.jpg",
        caption: "Stock movement history and analytics",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Offline-first PWA capabilities",
      "Barcode scanning integration",
      "Approval workflow system",
      "Real-time stock alerts",
      "Comprehensive audit trails",
      "Excel export functionality",
    ],
  },
  {
    id: 3,
    slug: "anm-library-platform",
    title: "ANMTC Digital Library",
    excerpt: "A modern digital library platform for academic resources and student engagement.",
    description:
      "A digital library system designed for a nursing and midwifery training college. It provides access to academic resources, announcements, and student focused library services.",
    fullDescription: `The ANMTC Digital Library is a modern platform designed specifically for nursing and midwifery students to access academic resources, research materials, and library services online.

The platform serves as a comprehensive digital hub featuring:

- Searchable catalog of books, journals, and multimedia resources
- Digital resource repository for research papers and study materials
- Library announcements and event notifications
- Book reservation and renewal system
- Student resource recommendations
- Mobile-responsive interface for access anywhere
- Integration with academic calendars

Built with modern web technologies, the platform provides an intuitive user experience while maintaining robust search capabilities and resource organization.`,
    image: "/projects/next.svg",
    liveUrl: "https://library.example.com",
    githubUrl: "https://github.com/yourusername/anm-library",
    techStack: ["Next.js", "Tailwind CSS", "REST API", "MongoDB"],
    gallery: [
      {
        url: "/projects/library-1.jpg",
        caption: "Library catalog search interface",
      },
      {
        url: "/projects/library-2.jpg",
        caption: "Digital resource viewer",
      },
      {
        url: "/projects/library-3.jpg",
        caption: "Student dashboard with recommendations",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Advanced search and filtering",
      "Digital resource access",
      "Book reservation system",
      "Personalized recommendations",
      "Announcement system",
      "Mobile-first design",
    ],
  },
  {
    id: 4,
    slug: "authentication-starter",
    title: "Authentication Starter Kit",
    excerpt: "Reusable authentication boilerplate for modern web applications.",
    description:
      "A clean authentication starter kit implementing login, registration, password reset, and protected routes using JWT and modern security practices.",
    fullDescription: `The Authentication Starter Kit is a production-ready boilerplate for implementing secure authentication in modern web applications. It follows industry best practices and security standards.

This comprehensive starter includes:

- User registration with email verification
- Secure login with JWT tokens
- Password reset via email
- Protected route middleware
- Refresh token rotation
- Session management
- Account settings and profile management
- Security features like rate limiting and CSRF protection

The kit is designed to be easily integrated into any Next.js project, saving weeks of development time while ensuring robust security from day one.`,
    image: "/projects/vercel.svg",
    liveUrl: "https://authstarter.example.com",
    githubUrl: "https://github.com/yourusername/auth-starter",
    techStack: ["Next.js", "JWT", "REST API", "Tailwind CSS", "NextAuth"],
    gallery: [
      {
        url: "/projects/auth-1.jpg",
        caption: "Login interface with social auth options",
      },
      {
        url: "/projects/auth-2.jpg",
        caption: "User profile and settings page",
      },
      {
        url: "/projects/auth-3.jpg",
        caption: "Password reset flow",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "JWT-based authentication",
      "Social login integration",
      "Email verification",
      "Password reset functionality",
      "Protected routes",
      "Session management",
    ],
  },
  {
    id: 5,
    slug: "data-analysis-toolkit",
    title: "Data Analysis Toolkit",
    excerpt: "A collection of scripts and utilities for academic data analysis.",
    description:
      "A Python based toolkit focused on cleaning, analyzing, and visualizing academic datasets, aimed at students and early stage researchers.",
    fullDescription: `The Data Analysis Toolkit is a comprehensive Python package designed to simplify common data analysis tasks for students and researchers working with academic datasets.

The toolkit provides:

- Data cleaning and preprocessing utilities
- Statistical analysis functions
- Visualization templates for common chart types
- Automated report generation
- Dataset validation tools
- Integration with popular data sources
- Jupyter notebook templates
- Documentation and tutorials

Whether you're working on a thesis, research project, or learning data science, this toolkit provides the essential utilities to streamline your workflow and produce professional results.`,
    image: "/projects/window.svg",
    liveUrl: "https://datatoolkit.example.com",
    githubUrl: "https://github.com/yourusername/data-toolkit",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    gallery: [
      {
        url: "/projects/data-1.jpg",
        caption: "Data visualization dashboard",
      },
      {
        url: "/projects/data-2.jpg",
        caption: "Statistical analysis output",
      },
      {
        url: "/projects/data-3.jpg",
        caption: "Jupyter notebook interface",
      },
    ],
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Data cleaning automation",
      "Statistical analysis tools",
      "Custom visualization templates",
      "Report generation",
      "CSV/Excel import/export",
      "Integration with NumPy/Pandas",
    ],
  },
];
