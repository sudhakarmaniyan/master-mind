import { useEffect, useState } from 'react';
import { 
  FaCode, 
  FaCloud, 
  FaDatabase, 
  FaChalkboardTeacher, 
  FaHandshake, 
  FaRocket, 
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight,
  FaMicrosoft,
  FaLaptopCode,
  FaUserGraduate, 
  FaBriefcase, 
  FaAward, 
  FaBuilding,
  FaPaperPlane,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- Success Stories Data ---
const SUCCESS_STORIES = [
  { 
    name: "Priya Sharma", role: ".NET Developer", co: "Infosys", 
    accentColor: "text-blue-600", bgColor: "bg-blue-50", icon: <FaMicrosoft />,
    quote: "I had a career gap of 3 years. The mock interviews and C# deep dive gave me the confidence to crack the Infosys interview." 
  },
  { 
    name: "Mike Ross", role: "Cloud Architect", co: "AWS", 
    accentColor: "text-orange-500", bgColor: "bg-orange-50", icon: <FaCloud />,
    quote: "The hands-on labs were a game changer. I wasn't just watching videos; I was building real infrastructure on AWS." 
  },
  { 
    name: "David Kim", role: "Data Analyst", co: "Deloitte", 
    accentColor: "text-purple-600", bgColor: "bg-purple-50", icon: <FaDatabase />,
    quote: "Coming from a non-tech background, the mentorship was crucial. They started from scratch and built me up step by step." 
  },
  { 
    name: "Sarah Jenkins", role: "Software Engineer", co: "Microsoft", 
    accentColor: "text-indigo-600", bgColor: "bg-indigo-50", icon: <FaCode />,
    quote: "The focus on Clean Architecture and Design Patterns set this course apart. I use what I learned every single day at work." 
  },
  { 
    name: "Rahul V.", role: "Backend Dev", co: "Zoho", 
    accentColor: "text-green-600", bgColor: "bg-green-50", icon: <FaDatabase />,
    quote: "Best decision of my life. The placement team didn't rest until I had an offer letter in hand. Truly grateful." 
  },
  { 
    name: "Anita Raj", role: "Full Stack Dev", co: "TCS", 
    accentColor: "text-pink-600", bgColor: "bg-pink-50", icon: <FaRocket />,
    quote: "A perfect blend of theory and practice. The C# module is world-class and the projects look great on a resume." 
  }
];

// --- Courses Data (Updated Specialized Tracks) ---
const COURSES = [
  { 
    id: 1, title: "Cloud Computing", desc: "Master AWS, Azure, and Google Cloud infrastructure and deployments.", 
    icon: <FaCloud />, color: "text-blue-500", bg: "bg-blue-50", border: "group-hover:border-blue-200", btn: "text-blue-500"
  },
  { 
    id: 2, title: "Manual/Auto Testing", desc: "Learn QA fundamentals, Selenium, Cypress, and robust automation frameworks.", 
    icon: <FaCheckCircle />, color: "text-green-500", bg: "bg-green-50", border: "group-hover:border-green-200", btn: "text-green-500"
  },
  { 
    id: 3, title: "Data Analytics", desc: "Extract actionable insights using Python, SQL, PowerBI, and Tableau.", 
    icon: <FaDatabase />, color: "text-purple-600", bg: "bg-purple-50", border: "group-hover:border-purple-200", btn: "text-purple-600"
  },
  { 
    id: 4, title: "Full Stack", desc: "End-to-end web development with modern frontend and backend frameworks.", 
    icon: <FaLaptopCode />, color: "text-indigo-500", bg: "bg-indigo-50", border: "group-hover:border-indigo-200", btn: "text-indigo-500"
  },
  { 
    id: 5, title: "Networking", desc: "Master network architecture, routing, switching, and security fundamentals.", 
    icon: <FaCode />, color: "text-red-500", bg: "bg-red-50", border: "group-hover:border-red-200", btn: "text-red-500" 
  },
  { 
    id: 6, title: "Scrum Master", desc: "Lead teams effectively with Agile methodologies and sprint planning.", 
    icon: <FaHandshake />, color: "text-orange-500", bg: "bg-orange-50", border: "group-hover:border-orange-200", btn: "text-orange-500"
  },
  { 
    id: 7, title: "SAP", desc: "Gain expertise in enterprise resource planning and core business operations.", 
    icon: <FaBuilding />, color: "text-cyan-600", bg: "bg-cyan-50", border: "group-hover:border-cyan-200", btn: "text-cyan-600"
  },
  { 
    id: 8, title: "CADD", desc: "Professional computer-aided design and drafting for modern engineering.", 
    icon: <FaChalkboardTeacher />, color: "text-teal-600", bg: "bg-teal-50", border: "group-hover:border-teal-200", btn: "text-teal-600"
  },
  { 
    id: 9, title: "Tally", desc: "Master accounting, inventory management, and financial compliance.", 
    icon: <FaAward />, color: "text-pink-600", bg: "bg-pink-50", border: "group-hover:border-pink-200", btn: "text-pink-600"
  }
];

// --- Campus Images for Slider ---
const CAMPUS_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Modern Classrooms",
    desc: "State-of-the-art learning environment"
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Collaborative Learning",
    desc: "Work together on real projects"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Hackathons",
    desc: "24-hour coding challenges"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Placement Drives",
    desc: "Direct interviews with top companies"
  }
];

export default function LandingPage() {
  
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // --- Effects ---
  useEffect(() => {
    // 1. Scroll Reveal with improved threshold
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Add staggered animation for children
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('stagger-active');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. Carousel Timer with pause on hover
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentStoryIndex((prev) => (prev + 3) >= SUCCESS_STORIES.length ? 0 : prev + 3);
        setCurrentCourseIndex((prev) => (prev + 3) >= COURSES.length ? 0 : prev + 3);
      }
    }, 4000); 

    // 3. Image Slider Timer
    const imageInterval = setInterval(() => {
      if (!isHovering) {
        setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
    };
  }, [isHovering]); 

  // Slice data for views
  const visibleStories = SUCCESS_STORIES.slice(currentStoryIndex, currentStoryIndex + 3);
  const visibleCourses = COURSES.slice(currentCourseIndex, currentCourseIndex + 3);

  // Handle manual image navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAMPUS_IMAGES.length) % CAMPUS_IMAGES.length);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#0078d4] selection:text-white">
      
      {/* --- STYLES --- */}
      <style>{`
        /* FIXED SCROLLING ISSUES */
        html, body { 
          overflow-x: visible !important;
          scroll-behavior: smooth; 
          width: 100%;
          position: relative;
          margin: 0;
          padding: 0;
        }

        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .reveal { 
          opacity: 0; 
          transform: translateY(30px); 
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal.active { 
          opacity: 1; 
          transform: translateY(0); 
        }

        /* Stagger animation for children */
        .stagger-child {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.5, 0, 0, 1);
        }
        .stagger-child.stagger-active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        /* Hover animations */
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        
        .hover-glow {
          transition: box-shadow 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(0,120,212,0.3);
        }
        
        /* Image slider transitions */
        .slider-enter {
          opacity: 0;
          transform: scale(1.1);
        }
        .slider-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 500ms, transform 500ms;
        }
        .slider-exit {
          opacity: 1;
          transform: scale(1);
        }
        .slider-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 500ms, transform 500ms;
        }
      `}</style>

      {/* --- SINGLE NAVBAR (MasterMinds only) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          </div>
        </div>
      </nav>

      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* --- 1. HERO with enhanced animations (Updated Padding) --- */}
        <section className="relative w-full pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-30"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left reveal stagger-child">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-[#0078d4] text-xs md:text-sm font-bold tracking-wide backdrop-blur-md shadow-sm animate-pulse-slow">
                <span className="w-2 h-2 rounded-full bg-[#0078d4] animate-pulse"></span>
                New Batch Starts Nov 24
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight drop-shadow-sm stagger-child">
                Architect Your <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078d4] to-[#00bcf2] animate-float inline-block">Future in Tech.</span>
              </h1>
              <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 stagger-child">
                Master <strong>C# .NET</strong>, Cloud Architecture, and Enterprise Development. We don't just teach coding; we build industry-ready software engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 justify-center lg:justify-start stagger-child">
                <Link 
                  to="/courses" 
                  className="w-full sm:w-auto px-6 py-4 bg-[#0078d4] text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:bg-[#0063b1] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Explore Courses <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#success"
                  className="w-full sm:w-auto px-6 py-4 bg-white/90 text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-white transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-sm hover:shadow-md"
                >
                  View Success Stories
                </a>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0 animate-float">
              <div className="relative z-10 bg-slate-900/90 rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-4 shadow-2xl md:rotate-2 hover:rotate-0 transition-all duration-700 backdrop-blur-md hover:shadow-2xl">
                <div className="bg-slate-800 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden border border-slate-700">
                  <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Coding" className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* --- NEW: Campus Image Slider --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 reveal" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Campus <span className="text-[#0078d4]">Life</span></h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Campus life at Master Mind Learning Solutions is vibrant, dynamic, and career-oriented. We believe learning should be interactive and inspiring. Students participate in coding challenges, tech seminars, hackathons, group discussions, and live project sessions.

Our supportive mentors and collaborative atmosphere help students build confidence, communication skills, and technical expertise.</p>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden group shadow-2xl">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                {CAMPUS_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transform transition-transform duration-700 translate-y-0">
                      <h3 className="text-2xl md:text-4xl font-bold mb-2">{image.title}</h3>
                      <p className="text-base md:text-lg text-white/80">{image.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
              >
                →
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {CAMPUS_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    } rounded-full`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {CAMPUS_IMAGES.length}
              </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="flex justify-center gap-2 mt-4">
              {CAMPUS_IMAGES.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-4 ring-[#0078d4] scale-110' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. ABOUT COMPANY with enhanced animations --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 reveal">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-white/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#0078d4] to-[#00bcf2] rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-4 md:space-y-6 text-center lg:text-left">
                <h3 className="text-[#0078d4] font-bold text-xs md:text-sm tracking-widest uppercase stagger-child">Who We Are</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight stagger-child">Bridging the Gap Between <br className="hidden md:block"/> Academia & Industry</h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed stagger-child">
  Master Mind Learning Solutions is a career-focused training institute dedicated to empowering students with real-world technical skills. We combine academic knowledge with practical industry exposure to help learners become job-ready professionals. Our expert mentors, hands-on projects, and structured programs ensure every student gains confidence and competence.</p>
                <ul className="space-y-3 md:space-y-4 pt-4 text-left inline-block lg:block">
                  {["Curriculum designed by Microsoft MVPs", "Focus on Enterprise Architecture", "Agile Methodology Implementation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm md:text-base font-medium stagger-child">
                      <FaCheckCircle className="text-[#0078d4] shrink-0 animate-pulse-slow" /> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FOUNDER with female photo and signature in bottom right --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 reveal">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/60 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row min-h-auto lg:min-h-[500px]">
              <div className="w-full lg:w-2/5 relative h-[300px] sm:h-[400px] lg:h-auto group">
                {/* Female Founder Image */}
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Nisha Mahesh - Founder" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-[#0078d4]/10 mix-blend-multiply group-hover:bg-[#0078d4]/20 transition-all"></div>
              </div>
              <div className="w-full lg:w-3/5 p-8 sm:p-10 md:p-16 flex flex-col justify-center text-center lg:text-left relative">
                <FaQuoteLeft className="text-4xl md:text-5xl text-blue-100 mb-6 mx-auto lg:mx-0 animate-bounce-slow" />
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"> Nisha Mahesh</h3>
                <p className="text-[#0078d4] font-bold tracking-wide uppercase text-xs md:text-sm mb-6 md:mb-8">Founder & Lead Architect</p>
                <p className="text-slate-600 italic text-lg md:text-xl leading-relaxed mb-8 md:mb-10">"A passionate entrepreneur dedicated to equipping students with industry-relevant skills, practical experience, and career guidance to help them become job-ready professionals."</p>
                
                {/* Signature at bottom right */}
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                    alt="Nisha Mahesh Signature" 
                    className="h-8 md:h-12 opacity-30 hover:opacity-60 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. STATS with enhanced animations --- */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden reveal">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#0078d4]">Real Careers</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                We don't just teach technology; we build careers. Here is the data behind our success stories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <FaBriefcase />, num: "94%", label: "Placement Rate", sub: "Avg time to hire: 45 days", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaAward />, num: "12 LPA", label: "Highest Package", sub: "Average Package: 6 LPA", color: "text-[#0078d4]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaBuilding />, num: "500+", label: "Hiring Partners", sub: "From Startups to MNCs", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaUserGraduate />, num: "2500+", label: "Alumni Network", sub: "Working across 12 countries", color: "text-[#0078d4]", bg: "bg-blue-500/10", border: "border-blue-500/20" }
              ].map((stat, i) => (
                <div key={i} className={`relative group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border ${stat.border} bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform group-hover:rotate-3`}>{stat.icon}</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight group-hover:scale-105 transition-transform inline-block">{stat.num}</div>
                  <div className="text-base md:text-lg font-bold text-slate-300 mb-4">{stat.label}</div>
                  <div className="w-10 md:w-12 h-1 bg-slate-700 rounded-full mb-4 group-hover:w-16 transition-all"></div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium bg-slate-900/50 inline-block px-3 py-1 rounded-full border border-slate-700/50">{stat.sub}</p>
                  <div className={`absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color === 'text-[#f47529]' ? 'from-orange-500/10' : 'from-blue-500/10'} to-transparent rounded-tr-[1.5rem] md:rounded-tr-[2rem] rounded-bl-[1.5rem] md:rounded-bl-[2rem] -z-10`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. COURSES with enhanced animations --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto reveal">
          <div className="text-center mb-10 md:mb-16 bg-white/70 p-6 md:p-8 rounded-[2rem] md:rounded-3xl backdrop-blur-md border border-white/40 block w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Specialized <span className="text-[#0078d4]">Tracks</span></h2>
            <p className="mt-3 md:mt-4 text-slate-600 text-sm md:text-base font-medium">Our specialized tracks are carefully designed to provide in-depth knowledge and hands-on experience in high-demand technologies. Each track focuses on practical learning, real-world projects, and industry-aligned curriculum to ensure students gain expertise in their chosen domain.

  We offer structured learning paths that guide students from fundamentals to advanced concepts, preparing them for successful careers.</p>
          </div>

          <div className="relative min-h-[350px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleCourses.map((course, i) => (
                <div key={`${currentCourseIndex}-${i}`} className={`group bg-white/90 backdrop-blur-xl rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-in-right ${course.border} border-2 border-transparent hover:border-current`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${course.bg} ${course.color} rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-5 md:mb-6 shadow-sm group-hover:scale-110 transition-transform group-hover:rotate-3`}>{course.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{course.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 mb-5 md:mb-6 leading-relaxed">{course.desc}</p>
                  <Link to={`/courses/${course.id}`} className={`${course.btn} font-bold text-sm md:text-base inline-flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer`}>
                    View Curriculum <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-8 md:mt-12">
              {Array.from({ length: Math.ceil(COURSES.length / 3) }).map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentCourseIndex(idx * 3)} 
                  className={`transition-all duration-300 ${
                    Math.floor(currentCourseIndex / 3) === idx 
                      ? 'bg-[#0078d4] w-6 md:w-8 h-2.5 md:h-3' 
                      : 'bg-slate-300 w-2.5 h-2.5 md:w-3 md:h-3 hover:bg-slate-400'
                  } rounded-full`} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. THE ADVANTAGE with enhanced animations --- */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-slate-900/90 backdrop-blur-md text-white rounded-[2rem] md:rounded-[3rem] mx-4 lg:mx-12 reveal overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#00bcf2]/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 border-b border-white/10 pb-6 md:pb-8">
              <div className="text-center lg:text-left w-full lg:w-auto">
                <h3 className="text-[#00bcf2] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mb-2 md:mb-3 text-xs md:text-sm">Our Secret Sauce</h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  Why we are <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">different.</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-md mt-4 lg:mt-0 text-base md:text-lg font-medium text-center lg:text-right mx-auto lg:mx-0">
                Most bootcamps sell content. We sell <span className="text-white underline decoration-[#0078d4] decoration-2 md:decoration-4 underline-offset-4">outcomes</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { id: "01", icon: <FaChalkboardTeacher/>, title: "Live Mentorship", desc: "Learn from industry experts in real-time.", tag: "Interactive", color: "text-blue-400", border: "group-hover:border-blue-500/50" },
                { id: "02", icon: <FaCode/>, title: "Code Reviews", desc: "Get your PRs reviewed by senior engineers.", tag: "Best Practices", color: "text-purple-400", border: "group-hover:border-purple-500/50" },
                { id: "03", icon: <FaHandshake/>, title: "Mock Interviews", desc: "Simulate real technical rounds to prep you.", tag: "Career Prep", color: "text-blue-400", border: "group-hover:border-blue-500/50" },
                { id: "04", icon: <FaRocket/>, title: "Capstone Projects", desc: "Build a production-ready application.", tag: "Portfolio", color: "text-green-400", border: "group-hover:border-green-500/50" }
              ].map((item, i) => (
                <div key={i} className={`group relative bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 ${item.border} transition-all duration-500 hover:bg-white/10 overflow-hidden flex flex-col min-h-[280px] md:min-h-[320px] hover:scale-105`}>
                  <div className="absolute -right-4 -top-4 text-[6rem] md:text-[8rem] font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 group-hover:scale-110 transition-all">{item.id}</div>
                  <div className="relative z-10 flex justify-between items-start mb-auto">
                    <div className={`text-3xl md:text-4xl ${item.color} bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10 group-hover:rotate-6 transition-transform`}>{item.icon}</div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 md:px-3 py-1 rounded-full text-slate-300 group-hover:bg-white/20 transition-all">{item.tag}</span>
                  </div>
                  <div className="relative z-10 mt-6 md:mt-8">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PARTNERS with enhanced animations --- */}
         <section className="py-16 md:py-20 bg-white/80 backdrop-blur-xl border-y border-white/50 overflow-hidden reveal">
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">TRUSTED PARTNERS</h2>
             <div className="w-20 md:w-24 h-1.5 bg-[#0078d4] mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>

          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

            <div className="flex w-[200%] animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex justify-around w-full items-center px-4">
                   {[
                     { name: 'Microsoft', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s' },
                     { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png' },
                     { name: 'Google', url: 'https://cdn.worldvectorlogo.com/logos/google-1-1.svg' },
                     { name: 'Deloitte', url: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
                     { name: 'Accenture', url: 'https://cdn.worldvectorlogo.com/logos/accenture-6.svg' },
                     { name: 'IBM', url: 'https://cdn.worldvectorlogo.com/logos/ibm.svg' },
                     { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
                     { name: 'Cisco', url: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' },
                     { name: 'Infosys', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG_3bMJuX8n06ogX1ES2JYOg35VYX8Y_6Ng&s' },
                     { name: 'TCS', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hk-cCmmtCp1D7LPyaZeJPruelynAA9KP3A&s' }
                   ].map((company, i) => (
                     <div key={i} className="mx-6 md:mx-12 flex items-center justify-center min-w-[80px] md:min-w-[120px] opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                       <img 
                        src={company.url} 
                        alt={company.name} 
                        className="h-8 md:h-14 w-auto object-contain"
                       />
                     </div>
                   ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. SUCCESS STORIES with enhanced animations --- */}
        <section id="success" className="py-16 md:py-24 px-4 md:px-6 reveal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 relative z-10">Wall of <span className="text-[#0078d4]">Success</span></h2>
                <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-[#0078d4]/20 -skew-x-12"></div>
              </div>
            </div>

            <div className="relative min-h-[350px] md:min-h-[400px] mb-10 md:mb-12">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {visibleStories.map((story, i) => (
                    <div key={`${currentStoryIndex}-${i}`} className="relative group bg-white/80 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white shadow-lg animate-slide-in-right hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        <div className="absolute top-4 md:top-6 right-4 md:right-6 text-4xl md:text-6xl text-slate-100 -z-10 transform rotate-12 group-hover:rotate-6 group-hover:text-slate-200 transition-all"><FaQuoteLeft /></div>
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                          <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${story.bgColor} ${story.accentColor} flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform group-hover:rotate-3`}>{story.icon}</div>
                          <div className="flex text-yellow-400 text-xs md:text-sm gap-0.5">★★★★★</div>
                        </div>
                        <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed mb-6 md:mb-8 relative z-10 min-h-[80px] md:min-h-[100px]">"{story.quote}"</p>
                        <div className="w-full h-px bg-gradient-to-r from-slate-200 to-transparent mb-4 md:mb-6"></div>
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform`}>{story.name.charAt(0)}</div>
                            <div>
                               <h4 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">{story.name} <FaCheckCircle className="text-blue-400 text-[10px] md:text-xs"/></h4>
                               <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">{story.role} @ <span className={`font-extrabold ${story.accentColor}`}>{story.co}</span></p>
                            </div>
                        </div>
                    </div>
                  ))}
               </div>
               <div className="flex justify-center gap-2 mt-8 md:mt-10">
                  {Array.from({ length: Math.ceil(SUCCESS_STORIES.length / 3) }).map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentStoryIndex(idx * 3)} 
                      className={`transition-all duration-300 ${
                        Math.floor(currentStoryIndex / 3) === idx 
                          ? 'bg-[#0078d4] w-6 md:w-8 h-2.5 md:h-3' 
                          : 'bg-slate-300 w-2.5 h-2.5 md:w-3 md:h-3 hover:bg-slate-400'
                      } rounded-full`} 
                    />
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- 9. CONTACT with enhanced animations --- */}
        <section id="contact" className="py-16 md:py-24 px-4 md:px-6 reveal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4">Start Your <span className="text-[#0078d4]">Journey</span></h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">Take the first step toward a successful career in technology.
  Join Master Mind Learning Solutions and transform your skills into real-world opportunities.

  👉 Enroll Today. Build Your Future.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
              <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-[#0078d4]/10 to-[#00bcf2]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 text-[#0078d4] flex items-center justify-center text-xs md:text-sm group-hover:rotate-12 transition-transform"><FaPaperPlane/></span>
                  Send us a message
                </h3>
                <form className="space-y-4 md:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                      <input type="text" className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white/50 focus:border-[#0078d4] focus:ring-4 outline-none text-sm md:text-base transition-all focus:scale-105" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white/50 focus:border-[#0078d4] focus:ring-4 outline-none text-sm md:text-base transition-all focus:scale-105" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 bg-white/50 focus:border-[#0078d4] focus:ring-4 outline-none text-sm md:text-base transition-all focus:scale-105" placeholder="john@example.com" />
                  </div>
                  <button className="w-full py-4 md:py-5 bg-gradient-to-r from-[#0078d4] to-[#00bcf2] text-white font-bold rounded-xl md:rounded-2xl shadow-lg hover:-translate-y-1 transition-all text-base md:text-lg flex items-center justify-center gap-2 group">
                    Book Free Counseling <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6 h-full">
                <div className="flex-1 bg-slate-200 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border border-white relative min-h-[250px] md:min-h-[300px] group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1306473489817!2d77.67679071015431!3d12.834833117810781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d1c3868b67d%3A0x32ec955bf9ca2e2d!2sMaster%20Mind%20Learning%20Solutions!5e0!3m2!1sen!2sin!4v1771595608773!5m2!1sen!2sin" width="100%" height="100%" style={{border:0, filter: 'grayscale(100%) contrast(1.2)'}} className="absolute inset-0 group-hover:filter group-hover:grayscale-50 transition-all duration-700"></iframe>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:scale-105 transition-transform">
                     <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-sm md:text-base"><FaMapMarkedAlt/></div>
                        <div>
                          <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Headquarters</p>
                          <p className="font-bold text-slate-900 text-xs md:text-sm">Silicon Valley, CA</p>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="bg-[#0f172a] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
                   <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-tl from-[#00bcf2]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                   <div className="space-y-4 md:space-y-6 relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 group/item">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#00bcf2] group-hover/item:scale-110 transition-transform"><FaPhoneAlt/></div>
                         <div>
                           <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Call Us</p>
                           <p className="text-base md:text-lg font-bold">+91 76768 09008</p>
                         </div>
                      </div>
                      <div className="w-full h-px bg-white/10"></div>
                      <div className="flex items-center gap-3 md:gap-4 group/item">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#0078d4] group-hover/item:scale-110 transition-transform"><FaEnvelope/></div>
                         <div>
                           <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">Email Us</p>
                           <p className="text-base md:text-lg font-bold">blrelectroniccity@gmail.com</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}