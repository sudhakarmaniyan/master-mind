import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  HiOutlineClock, 
  HiOutlineAcademicCap, 
  HiOutlineCheckCircle, 
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineArrowLeft,
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineX,
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlineStar,
  HiOutlineFire
} from 'react-icons/hi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function CourseDetail() {
  const { id } = useParams();
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    qualification: '',
    passingYear: '',
    occupation: '',
    batch: '',
    mode: '',
    source: '',
    comments: ''
  });

  // Comprehensive course database with all new courses
  const courseDatabase = {
    // Cloud Computing
    "1": {
      id: 1,
      title: "Cloud Computing",
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      category: "Cloud",
      accent: "from-orange-500 to-red-600",
      overview: "Master cloud architecture, deployment models, and services across AWS, Azure, and Google Cloud. Learn virtualization, containerization, and cloud security best practices. This comprehensive program prepares you for multiple cloud certifications.",
      longDescription: "This program is designed to take you from cloud fundamentals to advanced architecture patterns. You'll gain hands-on experience with all major cloud providers and learn to design, deploy, and manage scalable cloud solutions. The curriculum emphasizes real-world scenarios and best practices for enterprise cloud adoption.",
      highlights: [
        "Hands-on experience with AWS, Azure, and GCP",
        "Real-world cloud migration projects",
        "DevOps integration with cloud platforms",
        "Industry-recognized certification preparation"
      ],
      curriculum: [
        { week: 1, topic: "Cloud Computing Fundamentals", description: "Understanding cloud models, deployment strategies, and service models (IaaS, PaaS, SaaS)" },
        { week: 2, topic: "AWS Core Services", description: "Deep dive into EC2, S3, VPC, IAM, and Lambda" },
        { week: 3, topic: "Microsoft Azure Essentials", description: "Azure VMs, Storage, Networking, and Active Directory" },
        { week: 4, topic: "Google Cloud Platform", description: "Compute Engine, Cloud Storage, and Kubernetes Engine" },
        { week: 5, topic: "Virtualization & Containers", description: "VMware, Docker, and container orchestration" },
        { week: 6, topic: "Kubernetes Deep Dive", description: "Pod management, services, ingress, and helm charts" },
        { week: 7, topic: "Infrastructure as Code", description: "Terraform and CloudFormation for automated deployments" },
        { week: 8, topic: "Cloud Security & Compliance", description: "Security groups, encryption, compliance frameworks" },
        { week: 9, topic: "Monitoring & Performance", description: "CloudWatch, Azure Monitor, and Stackdriver" },
        { week: 10, topic: "Capstone Project", description: "Multi-cloud architecture design and implementation" }
      ],
      prerequisites: [
        "Basic understanding of operating systems",
        "Fundamental networking knowledge",
        "Basic command line experience",
        "Logical thinking ability"
      ],
      careerOpportunities: [
        { role: "Cloud Architect", salary: "₹12-25 LPA" },
        { role: "Cloud Engineer", salary: "₹8-18 LPA" },
        { role: "DevOps Engineer", salary: "₹10-22 LPA" },
        { role: "Cloud Consultant", salary: "₹15-30 LPA" },
        { role: "Site Reliability Engineer", salary: "₹12-28 LPA" }
      ],
      certifications: [
        "AWS Solutions Architect Associate",
        "Microsoft Azure Fundamentals",
        "Google Cloud Associate Engineer",
        "Certified Kubernetes Administrator"
      ],
      fee: "₹45,000",
      batchStart: "April 15, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 10,
      totalSeats: 30,
      availableSeats: 12,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    // Manual/Automation Testing
    "2": {
      id: 2,
      title: "Manual/Automation Testing",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      category: "Testing",
      accent: "from-green-500 to-emerald-600",
      overview: "Comprehensive training in manual testing methodologies and automation tools including Selenium, JUnit, TestNG. Learn test planning, execution, and reporting with industry best practices.",
      longDescription: "This program covers the complete software testing lifecycle from manual testing fundamentals to advanced automation frameworks. You'll learn to design test cases, execute test plans, and implement robust automation suites that ensure software quality at every stage of development.",
      highlights: [
        "ISTQB-aligned curriculum",
        "Real-world testing projects",
        "Automation framework development",
        "Performance and security testing"
      ],
      curriculum: [
        { week: 1, topic: "Software Testing Fundamentals", description: "SDLC, STLC, testing principles, and quality assurance concepts" },
        { week: 2, topic: "Manual Testing Techniques", description: "Black box, white box, exploratory testing, and test case design" },
        { week: 3, topic: "Test Management", description: "Test planning, defect tracking with JIRA, and test reporting" },
        { week: 4, topic: "Introduction to Automation", description: "Automation strategy, tool selection, and framework types" },
        { week: 5, topic: "Selenium WebDriver", description: "Locators, WebDriver commands, and browser automation" },
        { week: 6, topic: "TestNG Framework", description: "Annotations, assertions, parallel execution, and reporting" },
        { week: 7, topic: "Cucumber & BDD", description: "Behavior Driven Development with Gherkin syntax" },
        { week: 8, topic: "API Testing", description: "Postman, REST Assured, and API automation" },
        { week: 9, topic: "Performance Testing", description: "JMeter for load and stress testing" },
        { week: 10, topic: "Mobile Testing", description: "Appium for mobile application testing" },
        { week: 11, topic: "CI/CD Integration", description: "Jenkins pipeline for automated test execution" },
        { week: 12, topic: "Capstone Project", description: "Complete test automation framework development" }
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Logical thinking ability",
        "Attention to detail",
        "Analytical mindset"
      ],
      careerOpportunities: [
        { role: "QA Tester", salary: "₹4-8 LPA" },
        { role: "Automation Engineer", salary: "₹6-12 LPA" },
        { role: "SDET", salary: "₹8-15 LPA" },
        { role: "Test Analyst", salary: "₹5-10 LPA" },
        { role: "Quality Assurance Manager", salary: "₹12-20 LPA" }
      ],
      certifications: [
        "ISTQB Foundation Level",
        "Selenium WebDriver Certification",
        "ISTQB Advanced Level",
        "Certified Agile Tester"
      ],
      fee: "₹35,000",
      batchStart: "April 10, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 12,
      totalSeats: 30,
      availableSeats: 18,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80"
    },
    // Data Analytics
    "3": {
      id: 3,
      title: "Data Analytics",
      duration: "14 Weeks",
      level: "Beginner to Advanced",
      category: "Data",
      accent: "from-blue-500 to-cyan-600",
      overview: "Transform raw data into actionable insights using Python, SQL, Tableau, and Power BI. Master statistical analysis, data visualization, and storytelling with data to drive business decisions.",
      longDescription: "This comprehensive program takes you from data fundamentals to advanced analytics. You'll learn to clean, analyze, and visualize data using industry-standard tools. The curriculum emphasizes practical applications and real-world case studies across various industries.",
      highlights: [
        "End-to-end data analytics pipeline",
        "Interactive dashboard creation",
        "Statistical analysis and modeling",
        "Business intelligence strategies"
      ],
      curriculum: [
        { week: 1, topic: "Python Programming", description: "Python basics, data structures, and functions for data analysis" },
        { week: 2, topic: "SQL for Data Analysis", description: "Advanced queries, joins, subqueries, and database design" },
        { week: 3, topic: "Pandas Fundamentals", description: "Data manipulation, cleaning, and transformation" },
        { week: 4, topic: "Statistical Analysis", description: "Descriptive statistics, probability, and hypothesis testing" },
        { week: 5, topic: "Data Visualization", description: "Matplotlib, Seaborn, and effective visualization techniques" },
        { week: 6, topic: "Tableau Desktop", description: "Dashboards, stories, and advanced visualizations" },
        { week: 7, topic: "Power BI", description: "Data modeling, DAX, and interactive reports" },
        { week: 8, topic: "Excel Advanced Analytics", description: "PivotTables, Power Query, and advanced formulas" },
        { week: 9, topic: "Data Storytelling", description: "Presenting insights effectively to stakeholders" },
        { week: 10, topic: "Big Data Introduction", description: "Spark basics and working with large datasets" },
        { week: 11, topic: "Real-world Projects", description: "E-commerce, finance, and healthcare analytics" },
        { week: 12, topic: "Portfolio Development", description: "Building your data analytics portfolio" },
        { week: 13, topic: "Interview Preparation", description: "Technical interviews and case studies" },
        { week: 14, topic: "Capstone Project", description: "Complete data analytics solution for real business problem" }
      ],
      prerequisites: [
        "Basic mathematics knowledge",
        "Logical thinking",
        "Familiarity with spreadsheets",
        "Curiosity about data"
      ],
      careerOpportunities: [
        { role: "Data Analyst", salary: "₹5-10 LPA" },
        { role: "Business Intelligence Analyst", salary: "₹6-12 LPA" },
        { role: "Data Visualization Specialist", salary: "₹7-14 LPA" },
        { role: "Analytics Consultant", salary: "₹8-15 LPA" },
        { role: "Reporting Analyst", salary: "₹4-8 LPA" }
      ],
      certifications: [
        "Tableau Desktop Specialist",
        "Microsoft Power BI Analyst",
        "Google Data Analytics Certificate",
        "IBM Data Analyst Certificate"
      ],
      fee: "₹40,000",
      batchStart: "April 20, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 14,
      totalSeats: 30,
      availableSeats: 22,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    // Full Stack Development
    "4": {
      id: 4,
      title: "Full Stack Development",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      category: "Development",
      accent: "from-purple-500 to-indigo-600",
      overview: "Become a complete web developer mastering both frontend and backend technologies. Learn React, Node.js, Express, MongoDB, and RESTful API development with modern best practices.",
      longDescription: "This intensive program transforms you into a professional full stack developer. You'll build real-world applications from scratch, learning both frontend aesthetics and backend architecture. The curriculum emphasizes modern development practices including responsive design, state management, and cloud deployment.",
      highlights: [
        "MERN stack expertise",
        "Real-world project portfolio",
        "Responsive and progressive web apps",
        "Cloud deployment and DevOps"
      ],
      curriculum: [
        { week: 1, topic: "HTML5 & CSS3", description: "Semantic HTML, modern CSS, Flexbox, and Grid layouts" },
        { week: 2, topic: "JavaScript Fundamentals", description: "ES6+, DOM manipulation, and async programming" },
        { week: 3, topic: "React.js Basics", description: "Components, props, state, and lifecycle methods" },
        { week: 4, topic: "Advanced React", description: "Hooks, context API, and performance optimization" },
        { week: 5, topic: "State Management", description: "Redux Toolkit and Zustand for complex applications" },
        { week: 6, topic: "Node.js Fundamentals", description: "Event loop, modules, and file system" },
        { week: 7, topic: "Express.js Framework", description: "Routing, middleware, and REST API development" },
        { week: 8, topic: "MongoDB Database", description: "Schema design, aggregation, and Mongoose ODM" },
        { week: 9, topic: "Authentication & Security", description: "JWT, OAuth, and security best practices" },
        { week: 10, topic: "Full Stack Integration", description: "Connecting frontend and backend seamlessly" },
        { week: 11, topic: "Testing & Debugging", description: "Unit tests, integration tests, and debugging tools" },
        { week: 12, topic: "Deployment", description: "Vercel, Netlify, AWS, and environment configuration" },
        { week: 13, topic: "TypeScript", description: "Type safety and better development experience" },
        { week: 14, topic: "Next.js Framework", description: "SSR, SSG, and modern React frameworks" },
        { week: 15, topic: "GraphQL", description: "Apollo Client and Server for efficient data fetching" },
        { week: 16, topic: "Capstone Project", description: "Complete production-ready full stack application" }
      ],
      prerequisites: [
        "Basic computer skills",
        "Logical thinking ability",
        "Problem-solving mindset",
        "Familiarity with any programming language"
      ],
      careerOpportunities: [
        { role: "Full Stack Developer", salary: "₹6-15 LPA" },
        { role: "Frontend Developer", salary: "₹5-12 LPA" },
        { role: "Backend Developer", salary: "₹6-14 LPA" },
        { role: "MERN Stack Developer", salary: "₹7-16 LPA" },
        { role: "Web Application Developer", salary: "₹5-13 LPA" }
      ],
      certifications: [
        "Meta Frontend Developer Certificate",
        "IBM Full Stack Developer Certificate",
        "MongoDB Associate Developer",
        "AWS Certified Developer"
      ],
      fee: "₹55,000",
      batchStart: "April 5, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 16,
      totalSeats: 30,
      availableSeats: 8,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    },
    // Networking
    "5": {
      id: 5,
      title: "Networking",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      category: "Networking",
      accent: "from-blue-600 to-blue-800",
      overview: "Comprehensive networking fundamentals including OSI model, TCP/IP, routing, switching, and network security. Prepare for CCNA certification with hands-on labs and real-world scenarios.",
      longDescription: "This program provides a solid foundation in computer networking, progressing from basic concepts to advanced configuration and troubleshooting. You'll work with real networking equipment and simulators to gain practical experience in designing and managing enterprise networks.",
      highlights: [
        "CCNA certification preparation",
        "Hands-on router/switch configuration",
        "Network security fundamentals",
        "Troubleshooting methodologies"
      ],
      curriculum: [
        { week: 1, topic: "Network Fundamentals", description: "OSI and TCP/IP models, network topologies, and protocols" },
        { week: 2, topic: "IP Addressing", description: "IPv4 and IPv6 addressing, subnetting, and VLSM" },
        { week: 3, topic: "Ethernet & Switching", description: "Switch operations, VLANs, and STP" },
        { week: 4, topic: "Routing Fundamentals", description: "Static routing and dynamic routing protocols" },
        { week: 5, topic: "OSPF Protocol", description: "Open Shortest Path First configuration and troubleshooting" },
        { week: 6, topic: "EIGRP Protocol", description: "Enhanced Interior Gateway Routing Protocol" },
        { week: 7, topic: "BGP Basics", description: "Border Gateway Protocol for enterprise and ISP" },
        { week: 8, topic: "Network Security", description: "ACLs, firewalls, VPNs, and security best practices" },
        { week: 9, topic: "Wireless Networking", description: "WiFi standards, configuration, and security" },
        { week: 10, topic: "Network Automation", description: "Python for network automation and Ansible" },
        { week: 11, topic: "Troubleshooting", description: "Methodologies and tools for network issues" },
        { week: 12, topic: "CCNA Exam Prep", description: "Practice exams and final review" }
      ],
      prerequisites: [
        "Basic computer literacy",
        "Understanding of IP addresses",
        "Interest in infrastructure",
        "Analytical thinking"
      ],
      careerOpportunities: [
        { role: "Network Administrator", salary: "₹4-8 LPA" },
        { role: "Network Engineer", salary: "₹5-12 LPA" },
        { role: "Systems Administrator", salary: "₹4-10 LPA" },
        { role: "Network Security Specialist", salary: "₹6-15 LPA" },
        { role: "Infrastructure Manager", salary: "₹10-20 LPA" }
      ],
      certifications: [
        "Cisco CCNA",
        "CompTIA Network+",
        "Juniper JNCIA",
        "Cisco CCNP (Advanced)"
      ],
      fee: "₹38,000",
      batchStart: "April 12, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 12,
      totalSeats: 25,
      availableSeats: 15,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    },
    // Scrum Master
    "6": {
      id: 6,
      title: "Scrum Master",
      duration: "8 Weeks",
      level: "Intermediate",
      category: "Management",
      accent: "from-yellow-500 to-orange-600",
      overview: "Master Agile methodologies and Scrum framework. Learn to facilitate Scrum events, manage backlogs, and lead high-performing teams. Prepare for CSM certification and transform your career.",
      longDescription: "This program is designed for professionals who want to become effective Scrum Masters and Agile leaders. You'll learn the principles of Agile, the Scrum framework, and how to guide teams toward continuous improvement. The curriculum includes real-world scenarios and practical facilitation techniques.",
      highlights: [
        "CSM certification preparation",
        "Real-world Agile simulations",
        "Team facilitation techniques",
        "Agile metrics and reporting"
      ],
      curriculum: [
        { week: 1, topic: "Agile Principles", description: "Agile Manifesto, values, and principles in practice" },
        { week: 2, topic: "Scrum Framework", description: "Roles, events, and artifacts of Scrum" },
        { week: 3, topic: "Product Backlog Management", description: "User stories, prioritization, and refinement" },
        { week: 4, topic: "Sprint Planning", description: "Capacity planning, sprint goals, and commitment" },
        { week: 5, topic: "Daily Scrum & Facilitation", description: "Effective stand-ups and team facilitation" },
        { week: 6, topic: "Sprint Review & Retrospective", description: "Inspect and adapt techniques for continuous improvement" },
        { week: 7, topic: "Agile Metrics", description: "Velocity, burndown charts, and forecasting" },
        { week: 8, topic: "Scaling Agile", description: "SAFe, LeSS, and multi-team coordination" }
      ],
      prerequisites: [
        "Team collaboration experience",
        "Basic project knowledge",
        "Leadership interest",
        "Communication skills"
      ],
      careerOpportunities: [
        { role: "Scrum Master", salary: "₹8-18 LPA" },
        { role: "Agile Coach", salary: "₹12-25 LPA" },
        { role: "Project Manager", salary: "₹10-22 LPA" },
        { role: "Product Owner", salary: "₹12-24 LPA" },
        { role: "Delivery Manager", salary: "₹15-30 LPA" }
      ],
      certifications: [
        "Certified ScrumMaster (CSM)",
        "Professional Scrum Master (PSM I)",
        "SAFe Agilist",
        "PMI-ACP"
      ],
      fee: "₹32,000",
      batchStart: "April 18, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 8,
      totalSeats: 25,
      availableSeats: 10,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
    },
    // SAP
    "7": {
      id: 7,
      title: "SAP",
      duration: "20 Weeks",
      level: "Beginner to Advanced",
      category: "ERP",
      accent: "from-blue-700 to-indigo-900",
      overview: "Enterprise resource planning with SAP. Learn SAP modules including FICO, MM, SD, and ABAP programming. Master business processes and integration for enterprise success.",
      longDescription: "This comprehensive program covers the most in-demand SAP modules and prepares you for a career as an SAP consultant. You'll learn both functional and technical aspects of SAP, understanding how businesses use SAP to streamline operations and drive growth.",
      highlights: [
        "Multiple SAP module coverage",
        "Real-world implementation scenarios",
        "ABAP programming fundamentals",
        "SAP S/4HANA introduction"
      ],
      curriculum: [
        { week: 1, topic: "SAP Overview", description: "SAP architecture, navigation, and enterprise structure" },
        { week: 2, topic: "SAP FICO - Finance", description: "General ledger, accounts payable/receivable, and asset accounting" },
        { week: 3, topic: "SAP FICO - Controlling", description: "Cost centers, profit centers, and internal orders" },
        { week: 4, topic: "SAP MM - Materials Management", description: "Procurement, inventory management, and invoice verification" },
        { week: 5, topic: "SAP SD - Sales & Distribution", description: "Sales order processing, pricing, and shipping" },
        { week: 6, topic: "SAP PP - Production Planning", description: "BOMs, routing, and production orders" },
        { week: 7, topic: "SAP QM - Quality Management", description: "Quality planning, inspection, and control" },
        { week: 8, topic: "SAP HR - Human Resources", description: "Personnel administration, payroll, and time management" },
        { week: 9, topic: "ABAP Programming Basics", description: "Data dictionary, reports, and module pool programming" },
        { week: 10, topic: "Advanced ABAP", description: "ALV reports, BAPIs, and user exits" },
        { week: 11, topic: "SAP HANA Introduction", description: "In-memory computing and SAP HANA studio" },
        { week: 12, topic: "SAP S/4HANA", description: "Next-generation ERP with Fiori UX" },
        { week: 13, topic: "SAP Integration", description: "IDocs, RFCs, and system integration" },
        { week: 14, topic: "SAP Security", description: "Authorization concepts and user management" },
        { week: 15, topic: "Reporting in SAP", description: "Standard reports and custom reporting" },
        { week: 16, topic: "SAP Implementation", description: "ASAP methodology and project phases" },
        { week: 17, topic: "Industry Best Practices", description: "SAP best practices for various industries" },
        { week: 18, topic: "Case Studies", description: "Real-world SAP implementation scenarios" },
        { week: 19, topic: "Certification Preparation", description: "Practice exams and module-specific prep" },
        { week: 20, topic: "Capstone Project", description: "Complete SAP implementation project" }
      ],
      prerequisites: [
        "Accounting fundamentals (for FICO)",
        "Business process understanding",
        "Basic computer skills",
        "Analytical mindset"
      ],
      careerOpportunities: [
        { role: "SAP Consultant", salary: "₹6-15 LPA" },
        { role: "SAP FICO Specialist", salary: "₹7-18 LPA" },
        { role: "SAP MM Analyst", salary: "₹6-16 LPA" },
        { role: "SAP ABAP Developer", salary: "₹5-14 LPA" },
        { role: "ERP Project Manager", salary: "₹12-25 LPA" }
      ],
      certifications: [
        "SAP Certified Application Associate",
        "SAP FICO Certification",
        "SAP MM Certification",
        "SAP ABAP Certification"
      ],
      fee: "₹65,000",
      batchStart: "April 25, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 20,
      totalSeats: 25,
      availableSeats: 20,
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80"
    },
    // CADD
    "8": {
      id: 8,
      title: "CADD",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      category: "Design",
      accent: "from-red-500 to-pink-600",
      overview: "Computer-Aided Design and Drafting. Master AutoCAD, SolidWorks, and 3D modeling techniques for engineering and architectural applications. Create professional designs and build your portfolio.",
      longDescription: "This hands-on program teaches you industry-standard CAD software and design principles. From 2D drafting to complex 3D modeling, you'll develop the skills needed for careers in engineering, architecture, and product design. The curriculum includes real-world projects and portfolio development.",
      highlights: [
        "Multiple CAD software mastery",
        "2D and 3D modeling expertise",
        "Industry-specific projects",
        "Professional portfolio development"
      ],
      curriculum: [
        { week: 1, topic: "CAD Fundamentals", description: "Design principles, coordinate systems, and interface basics" },
        { week: 2, topic: "AutoCAD 2D Drafting", description: "Drawing tools, modification commands, and layers" },
        { week: 3, topic: "AutoCAD Advanced 2D", description: "Blocks, attributes, and external references" },
        { week: 4, topic: "AutoCAD 3D Modeling", description: "3D primitives, extrusion, and solid editing" },
        { week: 5, topic: "SolidWorks Basics", description: "Sketching, features, and part modeling" },
        { week: 6, topic: "SolidWorks Advanced", description: "Advanced features, configurations, and design tables" },
        { week: 7, topic: "Assembly Modeling", description: "Mates, sub-assemblies, and exploded views" },
        { week: 8, topic: "Surface Modeling", description: "Complex surface creation and editing" },
        { week: 9, topic: "Sheet Metal Design", description: "Sheet metal features and flat patterns" },
        { week: 10, topic: "Rendering & Animation", description: "Visualization techniques and motion studies" },
        { week: 11, topic: "Industry Applications", description: "Architectural, mechanical, and product design" },
        { week: 12, topic: "Portfolio Project", description: "Complete design project for portfolio" }
      ],
      prerequisites: [
        "Basic drawing skills",
        "Spatial visualization",
        "Interest in design",
        "Attention to detail"
      ],
      careerOpportunities: [
        { role: "CAD Designer", salary: "₹3-7 LPA" },
        { role: "Drafting Technician", salary: "₹3-6 LPA" },
        { role: "Product Design Engineer", salary: "₹4-9 LPA" },
        { role: "Architectural Drafter", salary: "₹3-8 LPA" },
        { role: "Mechanical Designer", salary: "₹4-10 LPA" }
      ],
      certifications: [
        "Autodesk Certified Professional",
        "SolidWorks Certified Professional",
        "Dassault Systèmes Certification",
        "AutoCAD Specialist"
      ],
      fee: "₹36,000",
      batchStart: "April 8, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 12,
      totalSeats: 25,
      availableSeats: 14,
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1200&q=80"
    },
    // Tally
    "9": {
      id: 9,
      title: "Tally",
      duration: "8 Weeks",
      level: "Beginner",
      category: "Accounting",
      accent: "from-green-600 to-teal-600",
      overview: "Complete accounting with Tally ERP. Learn financial management, inventory tracking, GST compliance, and payroll management for business operations. Perfect for accounting professionals and business owners.",
      longDescription: "This practical program teaches you to use Tally ERP for all business accounting needs. From basic ledger creation to advanced GST returns and payroll processing, you'll gain hands-on experience with India's most popular accounting software. The curriculum is aligned with current tax regulations and business requirements.",
      highlights: [
        "Complete accounting cycle",
        "GST and tax compliance",
        "Inventory and payroll management",
        "Real business scenarios"
      ],
      curriculum: [
        { week: 1, topic: "Accounting Fundamentals", description: "Basic accounting principles and concepts" },
        { week: 2, topic: "Tally Interface", description: "Company creation, ledgers, and groups" },
        { week: 3, topic: "Voucher Entry", description: "Different voucher types and accounting entries" },
        { week: 4, topic: "Inventory Management", description: "Stock groups, units, and inventory vouchers" },
        { week: 5, topic: "GST Configuration", description: "GST setup, tax rates, and return filing" },
        { week: 6, topic: "TDS & TCS", description: "Tax deduction and collection at source" },
        { week: 7, topic: "Payroll Processing", description: "Salary calculations, PF, and ESI" },
        { week: 8, topic: "Reports & Finalization", description: "Financial statements and year-end closing" }
      ],
      prerequisites: [
        "Basic accounting knowledge",
        "Computer literacy",
        "Numerical ability",
        "Attention to detail"
      ],
      careerOpportunities: [
        { role: "Accountant", salary: "₹2-5 LPA" },
        { role: "Tally Operator", salary: "₹2-4 LPA" },
        { role: "Accounts Executive", salary: "₹3-6 LPA" },
        { role: "Finance Assistant", salary: "₹2-5 LPA" },
        { role: "GST Consultant", salary: "₹3-7 LPA" }
      ],
      certifications: [
        "Tally Certified Professional",
        "Tally ERP Expert",
        "GST Practitioner Certification",
        "Tally Prime Certification"
      ],
      fee: "₹28,000",
      batchStart: "April 22, 2026",
      classMode: "Online & Classroom",
      durationWeeks: 8,
      totalSeats: 30,
      availableSeats: 24,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
    }
  };

  const course = courseDatabase[id as keyof typeof courseDatabase];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEnrollForm(false);
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      qualification: '',
      passingYear: '',
      occupation: '',
      batch: '',
      mode: '',
      source: '',
      comments: ''
    });
  };

  // Error state if ID doesn't exist
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
        <div className="p-12 bg-white rounded-[3rem] shadow-2xl text-center max-w-md border border-slate-100">
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Course Not Found</h2>
          <p className="text-slate-500 mb-8 font-medium">The course catalog has been updated or the link is broken.</p>
          <Link to="/courses" className="inline-flex items-center gap-2 text-[#008bdc] font-black uppercase tracking-widest text-sm hover:underline">
            <HiOutlineArrowLeft /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans">
      
      {/* Enroll Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[2.5rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowEnrollForm(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
            >
              <HiOutlineX className="text-xl" />
            </button>

            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Enroll in Program</h2>
                <p className="text-slate-500">
                  <span className="font-bold text-[#008bdc]">{course.title}</span> - {course.duration}
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 text-lg">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input 
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth</label>
                      <input 
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Educational Background */}
                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 text-lg">Educational Background</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Highest Qualification *</label>
                      <select 
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                        required
                      >
                        <option value="">Select qualification</option>
                        <option value="highschool">High School</option>
                        <option value="diploma">Diploma</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Year of Passing</label>
                      <input 
                        type="number"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                        placeholder="YYYY"
                        min="1990"
                        max="2030"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current/Previous Occupation</label>
                    <input 
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                      placeholder="e.g., Student, Software Developer, Accountant"
                    />
                  </div>
                </div>

                {/* Course Preferences */}
                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 text-lg">Course Preferences</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Batch *</label>
                    <select 
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                      required
                    >
                      <option value="">Select batch</option>
                      <option value="april10">{course.batchStart} (Weekday Morning)</option>
                      <option value="april15">April 15, 2026 (Weekday Evening)</option>
                      <option value="april20">April 20, 2026 (Weekend)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Learning Mode *</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="mode" 
                          value="online"
                          checked={formData.mode === 'online'}
                          onChange={handleInputChange}
                          className="text-[#008bdc]" 
                          required
                        />
                        <span className="text-slate-600">Online</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="mode" 
                          value="classroom"
                          checked={formData.mode === 'classroom'}
                          onChange={handleInputChange}
                          className="text-[#008bdc]" 
                        />
                        <span className="text-slate-600">Classroom</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="mode" 
                          value="hybrid"
                          checked={formData.mode === 'hybrid'}
                          onChange={handleInputChange}
                          className="text-[#008bdc]" 
                        />
                        <span className="text-slate-600">Hybrid</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">How did you hear about us?</label>
                    <select 
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="google">Google Search</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Referral</option>
                      <option value="ad">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="font-black text-slate-900 text-lg">Additional Information</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Questions or Comments</label>
                    <textarea 
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#008bdc] focus:border-transparent"
                      rows={3}
                      placeholder="Any specific questions about the course?"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="terms" className="mt-1" required />
                    <label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the terms and conditions and authorize Master Mind to contact me regarding this enrollment.
                    </label>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#008bdc] hover:bg-blue-600 text-white py-4 rounded-xl font-black text-sm transition-all"
                  >
                    Submit Enrollment
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEnrollForm(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-4 rounded-xl font-black text-sm transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Celebration Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-[2.5rem] max-w-lg w-full relative overflow-hidden">
            {/* Confetti Animation Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {i % 3 === 0 ? '🎉' : i % 3 === 1 ? '✨' : '🎊'}
                </div>
              ))}
            </div>

            {/* Sparkles Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 p-12 text-white text-center">
              {/* Celebration Icons */}
              <div className="flex justify-center gap-4 mb-8">
                <HiOutlineSparkles className="text-5xl animate-bounce" style={{ animationDelay: '0s' }} />
                <HiOutlineGift className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }} />
                <HiOutlineStar className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }} />
                <HiOutlineFire className="text-5xl animate-bounce" style={{ animationDelay: '0.6s' }} />
              </div>

              {/* Thank You Message */}
              <h2 className="text-5xl font-black mb-4 tracking-tighter">
                Thank You!
              </h2>
              
              <p className="text-3xl font-bold mb-6 text-yellow-200">
                {formData.fullName || 'Student'}! 🎓
              </p>

              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-8">
                <p className="text-xl mb-2">You're now enrolled in</p>
                <p className="text-2xl font-black">{course.title}</p>
                <div className="flex justify-center gap-2 mt-4 text-sm">
                  <span className="px-3 py-1 bg-white/30 rounded-full">Batch starts: {course.batchStart}</span>
                </div>
              </div>

              <p className="text-lg mb-8 text-yellow-100">
                🎊 Welcome to the Master Mind family! 🎊
              </p>

              {/* Connect with us */}
              <div className="mb-8">
                <p className="text-sm mb-4 opacity-90">Connect with us on social media</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://wa.me/917676809008" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl hover:scale-110 transition-transform"
                  >
                    <FaWhatsapp />
                  </a>
                  <a 
                    href="https://www.instagram.com/master_mind_learning_solutions/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-2xl hover:scale-110 transition-transform"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeThankYou}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-purple-100 transition-all shadow-xl"
              >
                Continue to Dashboard 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* 1. IMMERSIVE HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900">
        <img 
          src={course.image} 
          alt={course.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-[1200px] mx-auto px-6 w-full">
            <Link to="/courses" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <HiOutlineArrowLeft /> Back to Courses
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight max-w-4xl tracking-tighter">
              {course.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 text-white">
                <HiOutlineClock className="text-xl text-[#f47529]" />
                <span className="font-bold">{course.duration}</span>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 text-white">
                <HiOutlineAcademicCap className="text-xl text-[#f47529]" />
                <span className="font-bold">{course.level}</span>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 text-white">
                <HiOutlineBriefcase className="text-xl text-[#f47529]" />
                <span className="font-bold">{course.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-[1200px] mx-auto px-6 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-24">
        
        {/* LEFT SIDE: DETAILS */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tighter">
               Program Overview
               <div className="h-1 flex-grow bg-slate-50 rounded-full ml-4"></div>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-6">
              {course.overview}
            </p>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {course.longDescription}
            </p>
          </div>

          {/* Program Highlights */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl">
                  <HiOutlineCheckCircle className="text-[#008bdc] text-xl shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Timeline */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Program Curriculum</h2>
            <div className="space-y-6">
              {course.curriculum.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${course.accent} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg`}>
                      {item.week}
                    </div>
                    {index !== course.curriculum.length - 1 && <div className="w-0.5 h-full bg-slate-100 my-2"></div>}
                  </div>
                  <div className="pb-6 flex-1">
                    <h4 className="text-xl font-black text-slate-900 mb-2">{item.topic}</h4>
                    <p className="text-slate-500 font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tighter">
               Prerequisites
               <div className="h-1 flex-grow bg-slate-50 rounded-full ml-4"></div>
            </h2>
            <ul className="space-y-4">
              {course.prerequisites.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#f27324] mt-2"></span>
                  <span className="text-slate-600 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tighter">
               Career Opportunities
               <div className="h-1 flex-grow bg-slate-50 rounded-full ml-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.careerOpportunities.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <span className="font-bold text-slate-900">{item.role}</span>
                  <span className="text-[#008bdc] font-black">{item.salary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: ENROLLMENT SIDEBAR */}
        <div className="relative">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-24">
            
            {/* Pulsing Status Badge */}
            <div className="flex items-center gap-2 mb-6">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-xs font-black uppercase tracking-widest text-slate-400">Enrollment Active</span>
               <span className="ml-auto bg-orange-100 text-[#f27324] text-xs font-black px-3 py-1 rounded-full">
                 {course.availableSeats} seats left
               </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter">Program Fee & Schedule</h3>
            
            {/* Fee Display */}
            <div className="mb-8 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white">
              <p className="text-sm opacity-80 mb-1">Total Program Fee</p>
              <p className="text-4xl font-black">{course.fee}</p>
              <p className="text-xs opacity-60 mt-2">EMI options available starting at ₹3,500/month</p>
            </div>

            {/* Quick Info Grid */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                 <HiOutlineCalendar className="text-2xl text-[#008bdc]" />
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Batch Starts</p>
                   <p className="text-lg font-black text-slate-900">{course.batchStart}</p>
                 </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                 <HiOutlineGlobeAlt className="text-2xl text-[#008bdc]" />
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Class Mode</p>
                   <p className="text-lg font-black text-slate-900">{course.classMode}</p>
                 </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                 <HiOutlineUserGroup className="text-2xl text-[#008bdc]" />
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Batch Size</p>
                   <p className="text-lg font-black text-slate-900">{course.totalSeats} students</p>
                 </div>
              </div>
            </div>

            {/* Certification List */}
            <div className="mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Certifications Included</p>
              <div className="space-y-2">
                {course.certifications.slice(0, 3).map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                    <HiOutlineCheckCircle className="text-green-500" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Enrollment Button */}
            <button
              onClick={() => setShowEnrollForm(true)}
              className="group relative w-full bg-[#f27324] hover:bg-orange-600 text-white py-5 rounded-[1.5rem] font-black transition-all shadow-xl shadow-orange-200 flex justify-center items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Enroll Now</span>
              <HiOutlineCheckCircle className="text-xl relative z-10" />
            </button>

            {/* Guarantee Badges */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 text-center">
                <HiOutlineShieldCheck className="text-[#008bdc] text-xl mx-auto mb-1" />
                <p className="text-[10px] font-black uppercase tracking-widest">Placement Support</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 text-center">
                <HiOutlineLightningBolt className="text-[#f27324] text-xl mx-auto mb-1" />
                <p className="text-[10px] font-black uppercase tracking-widest">Money-back Guarantee</p>
              </div>
            </div>

            <p className="text-center text-[10px] font-bold text-slate-400 mt-6 uppercase tracking-widest">
              Limited seats • Register early
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}