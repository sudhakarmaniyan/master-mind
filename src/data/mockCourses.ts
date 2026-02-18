export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: string;
  instructor: string;
  modules: string[];
}

export const mockCourses: Course[] = [
  {
    id: 'react-ts',
    title: 'Mastering React & TypeScript',
    shortDescription: 'Build scalable, type-safe web applications from scratch.',
    fullDescription: 'Dive deep into the React ecosystem combined with the power of TypeScript. You will learn hooks, context API, state management, and how to type your components perfectly.',
    duration: '8 Weeks',
    price: '$199',
    instructor: 'Sarah Jenkins',
    modules: ['React Basics', 'TypeScript Fundamentals', 'Advanced Hooks', 'State Management (Redux/Zustand)', 'Final Project Build']
  },
  {
    id: 'node-backend',
    title: 'Backend Masterclass (Node.js)',
    shortDescription: 'Learn to build robust REST APIs and microservices.',
    fullDescription: 'Become a backend expert by mastering Node.js, Express, and MongoDB. Learn about authentication, security, database modeling, and scalable deployment.',
    duration: '10 Weeks',
    price: '$249',
    instructor: 'David Chen',
    modules: ['Node.js Basics', 'Express.js Routing', 'MongoDB & Mongoose', 'Authentication & JWT', 'Server Deployment']
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science & ML',
    shortDescription: 'Master data analysis, visualization, and Machine Learning algorithms.',
    fullDescription: 'Go from Python basics to building predictive Machine Learning models. This course covers everything from data cleaning with Pandas to training neural networks with TensorFlow.',
    duration: '12 Weeks',
    price: '$299',
    instructor: 'Dr. Anita Desai',
    modules: ['Python Crash Course', 'Data Analysis with Pandas & NumPy', 'Data Visualization (Matplotlib/Seaborn)', 'Intro to Machine Learning', 'Deep Learning Basics']
  },
  {
    id: 'cloud-aws',
    title: 'Cloud Computing with AWS',
    shortDescription: 'Get hands-on experience deploying and managing cloud infrastructure.',
    fullDescription: 'Prepare for the AWS Solutions Architect exam. You will learn how to provision servers, manage databases in the cloud, and build highly available, fault-tolerant architectures.',
    duration: '8 Weeks',
    price: '$229',
    instructor: 'Michael Roberts',
    modules: ['Cloud Fundamentals', 'Compute (EC2 & Lambda)', 'Storage (S3 & EBS)', 'VPC & Networking', 'Security & IAM']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    shortDescription: 'Learn to defend systems by thinking like a hacker.',
    fullDescription: 'A comprehensive guide to network security, cryptography, and ethical hacking. Learn how to identify vulnerabilities, perform penetration testing, and secure modern web applications.',
    duration: '14 Weeks',
    price: '$349',
    instructor: 'Alex Mercer',
    modules: ['Networking Protocols', 'Cryptography Basics', 'Web App Vulnerabilities (OWASP)', 'Penetration Testing (Kali Linux)', 'Incident Response']
  },
  {
    id: 'nextjs-fullstack',
    title: 'Modern Full-Stack with Next.js',
    shortDescription: 'Build SEO-friendly, high-performance web apps using Next.js 14+.',
    fullDescription: 'Master the latest React framework. Learn about Server Components, Server Actions, App Router, and integrating databases directly into your Next.js application using Prisma.',
    duration: '6 Weeks',
    price: '$179',
    instructor: 'Sarah Jenkins',
    modules: ['Next.js App Router', 'React Server Components', 'Data Fetching & Caching', 'Database Integration (Prisma)', 'Vercel Deployment']
  }
];