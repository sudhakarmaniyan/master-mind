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
  FaUser,
  FaWhatsapp
} from 'react-icons/fa';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineBookOpen, HiOutlineCheckCircle, HiOutlinePaperAirplane } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// --- Success Stories Data (Indian Names and Companies) ---
const SUCCESS_STORIES = [
  { 
    name: "Priya Sharma", role: ".NET Developer", co: "Infosys", 
    accentColor: "text-blue-600", bgColor: "bg-blue-50", icon: <FaMicrosoft />,
    quote: "I had a career gap of 3 years. The mock interviews and C# deep dive gave me the confidence to crack the Infosys interview." 
  },
  { 
    name: "Rajesh Kumar", role: "Cloud Architect", co: "TCS", 
    accentColor: "text-orange-500", bgColor: "bg-orange-50", icon: <FaCloud />,
    quote: "The hands-on labs were a game changer. I wasn't just watching videos; I was building real infrastructure on AWS." 
  },
  { 
    name: "Anjali Desai", role: "Data Analyst", co: "Deloitte", 
    accentColor: "text-purple-600", bgColor: "bg-purple-50", icon: <FaDatabase />,
    quote: "Coming from a non-tech background, the mentorship was crucial. They started from scratch and built me up step by step." 
  },
  { 
    name: "Vikram Mehta", role: "Software Engineer", co: "Microsoft", 
    accentColor: "text-indigo-600", bgColor: "bg-indigo-50", icon: <FaCode />,
    quote: "The focus on Clean Architecture and Design Patterns set this course apart. I use what I learned every single day at work." 
  },
  { 
    name: "Rahul Verma", role: "Backend Dev", co: "Zoho", 
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

// --- Campus Images for Slider (Indian Classroom/Campus Images) ---
const CAMPUS_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Modern Classrooms",
    desc: "State-of-the-art learning environment with Indian students"
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Collaborative Learning",
    desc: "Indian students working together on real projects"
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Hackathons",
    desc: "24-hour coding challenges with Indian tech enthusiasts"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Placement Drives",
    desc: "Direct interviews with top Indian companies"
  }
];

// Company WhatsApp number
const COMPANY_WHATSAPP = "917676809008";

export default function LandingPage() {
  
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get course display name
      const courseDisplay = formData.course === 'cloud' ? 'Cloud Computing' :
                           formData.course === 'testing' ? 'Manual/Automation Testing' :
                           formData.course === 'data' ? 'Data Analytics' :
                           formData.course === 'fullstack' ? 'Full Stack Development' :
                           formData.course === 'networking' ? 'Networking' :
                           formData.course === 'scrum' ? 'Scrum Master' :
                           formData.course === 'sap' ? 'SAP' :
                           formData.course === 'cadd' ? 'CADD' :
                           formData.course === 'tally' ? 'Tally' : 'Not selected';

      // Format the WhatsApp message
      const message = `*New Enrollment Application*%0A%0A` +
        `*Student Details:*%0A` +
        `👤 *Name:* ${formData.fullName}%0A` +
        `📧 *Email:* ${formData.email}%0A` +
        `📞 *Phone:* ${formData.phone}%0A` +
        `📚 *Course:* ${courseDisplay}%0A` +
        `🕐 *Applied:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

      // Create WhatsApp URL and open in new tab
      const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${message}`;
      window.open(whatsappUrl, '_blank');

      // Show thank you message
      setShowThankYou(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({ fullName: '', email: '', phone: '', course: '' });
      }, 3000);

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      alert('There was an error submitting your request. Please try again or contact support directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        /* Reduced grid sizes */
        .grid-courses {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .grid-success {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card-compact {
          padding: 1.5rem !important;
        }

        .card-compact img {
          height: 180px !important;
        }

        .card-compact h3 {
          font-size: 1.25rem !important;
        }

        .card-compact p {
          font-size: 0.875rem !important;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }
      `}</style>

      {/* --- SINGLE NAVBAR (MasterMinds only) --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Navbar content can go here */}
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
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Indian students coding" className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* --- NEW: Campus Image Slider (Reduced Size) --- */}
        <section className="py-12 md:py-16 px-4 md:px-6 reveal" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Campus <span className="text-[#0078d4]">Life</span></h2>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">Campus life at Master Mind Learning Solutions is vibrant, dynamic, and career-oriented. We believe learning should be interactive and inspiring. Students participate in coding challenges, tech seminars, hackathons, group discussions, and live project sessions.</p>
            </div>

            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group shadow-xl">
              {/* Main Image */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
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
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform transition-transform duration-700 translate-y-0">
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{image.title}</h3>
                      <p className="text-sm md:text-base text-white/80">{image.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 text-sm md:text-base"
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 text-sm md:text-base"
              >
                →
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {CAMPUS_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-6 h-1.5 bg-white' 
                        : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                    } rounded-full`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Preview (Reduced Size) */}
            <div className="flex justify-center gap-1.5 mt-3">
              {CAMPUS_IMAGES.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-[#0078d4] scale-105' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. ABOUT COMPANY with enhanced animations (Reduced Size) --- */}
        <section className="py-12 md:py-16 px-4 md:px-6 reveal">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Indian students learning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#0078d4] to-[#00bcf2] rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-3 md:space-y-4 text-center lg:text-left">
                <h3 className="text-[#0078d4] font-bold text-xs md:text-sm tracking-widest uppercase stagger-child">Who We Are</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight stagger-child">Bridging the Gap Between <br className="hidden md:block"/> Academia & Industry</h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed stagger-child">
                  Master Mind Learning Solutions is a career-focused training institute dedicated to empowering students with real-world technical skills. We combine academic knowledge with practical industry exposure to help learners become job-ready professionals. Our expert mentors, hands-on projects, and structured programs ensure every student gains confidence and competence.
                </p>
                <ul className="space-y-2 md:space-y-3 pt-3 text-left inline-block lg:block">
                  {["Curriculum designed by Microsoft MVPs", "Focus on Enterprise Architecture", "Agile Methodology Implementation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm md:text-base font-medium stagger-child">
                      <FaCheckCircle className="text-[#0078d4] shrink-0 animate-pulse-slow text-sm" /> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FOUNDER with Indian female photo and custom signature --- */}
        <section className="py-12 md:py-16 px-4 md:px-6 reveal">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-xl border border-white/60 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row min-h-auto lg:min-h-[400px]">
              <div className="w-full lg:w-2/5 relative h-[250px] sm:h-[300px] lg:h-auto group">
                {/* Indian Female Founder Image - Updated with professional Indian businesswoman */}
                <img 
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Nisha Mahesh - Founder" 
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-[#0078d4]/10 mix-blend-multiply group-hover:bg-[#0078d4]/20 transition-all"></div>
              </div>
              <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center text-center lg:text-left relative">
                <FaQuoteLeft className="text-3xl md:text-4xl text-blue-100 mb-4 mx-auto lg:mx-0 animate-bounce-slow" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Nisha Mahesh</h3>
                <p className="text-[#0078d4] font-bold tracking-wide uppercase text-xs md:text-sm mb-4 md:mb-6">Founder & Lead Architect</p>
                <p className="text-slate-600 italic text-base md:text-lg leading-relaxed mb-6 md:mb-8">"A passionate entrepreneur dedicated to equipping students with industry-relevant skills, practical experience, and career guidance to help them become job-ready professionals."</p>
                
                {/* Custom Dummy Signature for Nisha Mahesh */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                  <svg width="120" height="50" viewBox="0 0 200 60" className="opacity-40 hover:opacity-70 transition-opacity duration-300">
                    <path 
                      d="M20,35 C30,25 40,20 55,25 C70,30 80,40 95,35 C110,30 120,15 135,20 C150,25 160,40 175,35" 
                      stroke="#0078d4" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                    <path 
                      d="M30,45 C40,40 50,38 65,42 C80,46 90,52 105,48 C120,44 130,35 145,40 C160,45 170,52 180,48" 
                      stroke="#0078d4" 
                      strokeWidth="1.5" 
                      fill="none" 
                      opacity="0.6"
                      strokeLinecap="round"
                    />
                    <text x="140" y="30" fontFamily="cursive" fontSize="14" fill="#0078d4" opacity="0.8">N. Mahesh</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. STATS with enhanced animations (Reduced Size) --- */}
        <section className="py-12 md:py-16 bg-slate-900 text-white relative overflow-hidden reveal">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#0078d4]">Real Careers</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                We don't just teach technology; we build careers. Here is the data behind our success stories.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: <FaBriefcase />, num: "94%", label: "Placement Rate", sub: "Avg time: 45 days", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaAward />, num: "12 LPA", label: "Highest Package", sub: "Avg: 6 LPA", color: "text-[#0078d4]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaBuilding />, num: "500+", label: "Hiring Partners", sub: "Startups to MNCs", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: <FaUserGraduate />, num: "2500+", label: "Alumni Network", sub: "Across 12 countries", color: "text-[#0078d4]", bg: "bg-blue-500/10", border: "border-blue-500/20" }
              ].map((stat, i) => (
                <div key={i} className={`relative group p-4 md:p-5 rounded-xl md:rounded-2xl border ${stat.border} bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center text-sm md:text-base mb-2 md:mb-3 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform group-hover:rotate-3`}>{stat.icon}</div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform inline-block">{stat.num}</div>
                  <div className="text-sm md:text-base font-bold text-slate-300 mb-2">{stat.label}</div>
                  <div className="w-6 md:w-8 h-0.5 bg-slate-700 rounded-full mb-2 group-hover:w-10 transition-all"></div>
                  <p className="text-xs text-slate-500 font-medium bg-slate-900/50 inline-block px-2 py-0.5 rounded-full border border-slate-700/50">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. COURSES with enhanced animations (Reduced Size) --- */}
        <section className="py-12 md:py-16 px-4 md:px-6 max-w-6xl mx-auto reveal">
          <div className="text-center mb-8 md:mb-12 bg-white/70 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md border border-white/40 block w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Specialized <span className="text-[#0078d4]">Tracks</span></h2>
            <p className="mt-2 text-slate-600 text-sm md:text-base font-medium">Our specialized tracks are carefully designed to provide in-depth knowledge and hands-on experience in high-demand technologies. Each track focuses on practical learning, real-world projects, and industry-aligned curriculum to ensure students gain expertise in their chosen domain.</p>
          </div>

          <div className="relative min-h-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {visibleCourses.map((course, i) => (
                <div key={`${currentCourseIndex}-${i}`} className={`group bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-slide-in-right ${course.border} border-2 border-transparent hover:border-current`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 ${course.bg} ${course.color} rounded-lg flex items-center justify-center text-lg md:text-xl mb-3 md:mb-4 shadow-sm group-hover:scale-110 transition-transform group-hover:rotate-3`}>{course.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{course.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 mb-3 md:mb-4 leading-relaxed">{course.desc}</p>
                  <Link to={`/courses/${course.id}`} className={`${course.btn} font-bold text-xs md:text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer`}>
                    View Curriculum <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs"/>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-5 md:mt-6">
              {Array.from({ length: Math.ceil(COURSES.length / 3) }).map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentCourseIndex(idx * 3)} 
                  className={`transition-all duration-300 ${
                    Math.floor(currentCourseIndex / 3) === idx 
                      ? 'bg-[#0078d4] w-5 md:w-6 h-2 md:h-2.5' 
                      : 'bg-slate-300 w-2 h-2 hover:bg-slate-400'
                  } rounded-full`} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. THE ADVANTAGE with enhanced animations (Reduced Size) --- */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-slate-900/90 backdrop-blur-md text-white rounded-xl md:rounded-2xl mx-4 lg:mx-6 reveal overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#00bcf2]/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-12 border-b border-white/10 pb-4 md:pb-5">
              <div className="text-center lg:text-left w-full lg:w-auto">
                <h3 className="text-[#00bcf2] font-bold uppercase tracking-[0.1em] md:tracking-[0.15em] mb-1 md:mb-2 text-xs md:text-sm">Our Secret Sauce</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  Why we are <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">different.</span>
                </h2>
              </div>
              <p className="text-slate-400 max-w-md mt-3 lg:mt-0 text-sm md:text-base font-medium text-center lg:text-right mx-auto lg:mx-0">
                Most bootcamps sell content. We sell <span className="text-white underline decoration-[#0078d4] decoration-2 underline-offset-4">outcomes</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { id: "01", icon: <FaChalkboardTeacher/>, title: "Live Mentorship", desc: "Learn from industry experts in real-time.", tag: "Interactive", color: "text-blue-400", border: "group-hover:border-blue-500/50" },
                { id: "02", icon: <FaCode/>, title: "Code Reviews", desc: "Get your PRs reviewed by senior engineers.", tag: "Best Practices", color: "text-purple-400", border: "group-hover:border-purple-500/50" },
                { id: "03", icon: <FaHandshake/>, title: "Mock Interviews", desc: "Simulate real technical rounds to prep you.", tag: "Career Prep", color: "text-blue-400", border: "group-hover:border-blue-500/50" },
                { id: "04", icon: <FaRocket/>, title: "Capstone Projects", desc: "Build a production-ready application.", tag: "Portfolio", color: "text-green-400", border: "group-hover:border-green-500/50" }
              ].map((item, i) => (
                <div key={i} className={`group relative bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 ${item.border} transition-all duration-500 hover:bg-white/10 overflow-hidden flex flex-col min-h-[220px] md:min-h-[250px] hover:scale-105`}>
                  <div className="absolute -right-2 -top-2 text-4xl md:text-5xl font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 group-hover:scale-110 transition-all">{item.id}</div>
                  <div className="relative z-10 flex justify-between items-start mb-auto">
                    <div className={`text-xl md:text-2xl ${item.color} bg-white/5 p-2 md:p-3 rounded-lg border border-white/10 group-hover:rotate-6 transition-transform`}>{item.icon}</div>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider bg-white/10 px-1.5 md:px-2 py-0.5 rounded-full text-slate-300 group-hover:bg-white/20 transition-all">{item.tag}</span>
                  </div>
                  <div className="relative z-10 mt-3 md:mt-4">
                    <h4 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 7. PARTNERS with enhanced animations (Reduced Size) --- */}
         <section className="py-12 md:py-16 bg-white/80 backdrop-blur-xl border-y border-white/50 overflow-hidden reveal">
          <div className="text-center mb-6 md:mb-8">
             <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">TRUSTED PARTNERS</h2>
             <div className="w-16 md:w-20 h-1 bg-[#0078d4] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

            <div className="flex w-[200%] animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex justify-around w-full items-center px-2">
                   {[
                     { name: 'Infosys', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIG_3bMJuX8n06ogX1ES2JYOg35VYX8Y_6Ng&s' },
                     { name: 'TCS', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hk-cCmmtCp1D7LPyaZeJPruelynAA9KP3A&s' },
                     { name: 'Wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
                     { name: 'HCL', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/HCL_Technologies_logo.svg' },
                     { name: 'Tech Mahindra', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Tech_Mahindra_Logo.svg' },
                     { name: 'Accenture', url: 'https://cdn.worldvectorlogo.com/logos/accenture-6.svg' },
                     { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
                     { name: 'Deloitte', url: 'https://cdn.worldvectorlogo.com/logos/deloitte-2.svg' },
                     { name: 'Microsoft', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBu0cnozmDr454aSmHhedZltGVgU8fTfZwA&s' },
                     { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/3840px-Amazon_logo.svg.png' }
                   ].map((company, i) => (
                     <div key={i} className="mx-3 md:mx-4 flex items-center justify-center min-w-[60px] md:min-w-[80px] opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110 cursor-pointer">
                       <img 
                        src={company.url} 
                        alt={company.name} 
                        className="h-6 md:h-8 w-auto object-contain"
                       />
                     </div>
                   ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. SUCCESS STORIES with enhanced animations (Reduced Size) --- */}
        <section id="success" className="py-12 md:py-16 px-4 md:px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 relative z-10">Wall of <span className="text-[#0078d4]">Success</span></h2>
                <div className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#0078d4]/20 -skew-x-12"></div>
              </div>
            </div>

            <div className="relative min-h-[300px] md:min-h-[350px] mb-6 md:mb-8">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {visibleStories.map((story, i) => (
                    <div key={`${currentStoryIndex}-${i}`} className="relative group bg-white/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-5 border border-white shadow-md animate-slide-in-right hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-2 right-2 text-3xl md:text-4xl text-slate-100 -z-10 transform rotate-12 group-hover:rotate-6 group-hover:text-slate-200 transition-all"><FaQuoteLeft /></div>
                        <div className="flex justify-between items-start mb-2 md:mb-3">
                          <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${story.bgColor} ${story.accentColor} flex items-center justify-center text-sm md:text-base group-hover:scale-110 transition-transform group-hover:rotate-3`}>{story.icon}</div>
                          <div className="flex text-yellow-400 text-xs gap-0.5">★★★★★</div>
                        </div>
                        <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed mb-3 md:mb-4 relative z-10 min-h-[60px] md:min-h-[70px]">"{story.quote}"</p>
                        <div className="w-full h-px bg-gradient-to-r from-slate-200 to-transparent mb-2 md:mb-3"></div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform`}>{story.name.charAt(0)}</div>
                            <div>
                               <h4 className="font-bold text-slate-900 text-xs md:text-sm flex items-center gap-1">{story.name} <FaCheckCircle className="text-blue-400 text-[8px] md:text-[10px]"/></h4>
                               <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-400">{story.role} @ <span className={`font-extrabold ${story.accentColor}`}>{story.co}</span></p>
                            </div>
                        </div>
                    </div>
                  ))}
               </div>
               <div className="flex justify-center gap-1.5 mt-4 md:mt-5">
                  {Array.from({ length: Math.ceil(SUCCESS_STORIES.length / 3) }).map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentStoryIndex(idx * 3)} 
                      className={`transition-all duration-300 ${
                        Math.floor(currentStoryIndex / 3) === idx 
                          ? 'bg-[#0078d4] w-5 md:w-6 h-2 md:h-2.5' 
                          : 'bg-slate-300 w-2 h-2 hover:bg-slate-400'
                      } rounded-full`} 
                    />
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* --- 9. CONTACT with enhanced animations - EXACTLY MATCHING SCREENSHOT --- */}
        <section id="contact" className="py-12 md:py-16 px-4 md:px-6 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Start Your <span className="text-[#0078d4]">Journey</span></h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">Take the first step toward a successful career in technology. Join Master Mind Learning Solutions and transform your skills into real-world opportunities. 👉 Enroll Today. Build Your Future.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[450px]">
              {/* ENROLLMENT FORM - EXACTLY LIKE SCREENSHOT */}
              <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 border border-gray-200 shadow-lg flex flex-col justify-center relative overflow-hidden">
                {/* Background Blobs - subtle */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                  <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[60px]"></div>
                  <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-orange-100 rounded-full blur-[60px]"></div>
                </div>

                {/* Header with paper plane icon */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 text-[#0078d4] flex items-center justify-center text-sm group-hover:rotate-12 transition-transform">
                    <FaPaperPlane />
                  </span>
                
                </h3>

                {/* Success Message */}
                {showThankYou && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-in">
                    <p className="text-green-600 text-sm font-medium">✓ Message sent successfully!</p>
                  </div>
                )}

                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                  {/* Full Name Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#0078d4] focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#0078d4] focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      placeholder="+91 98765 43210"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#0078d4] focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Course Selection Field - Added to match screenshot exactly */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Your Course</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-[#0078d4] focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select Your Course</option>
                      <option value="cloud">Cloud Computing</option>
                      <option value="testing">Manual/Automation Testing</option>
                      <option value="data">Data Analytics</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="networking">Networking</option>
                      <option value="scrum">Scrum Master</option>
                      <option value="sap">SAP</option>
                      <option value="cadd">CADD</option>
                      <option value="tally">Tally</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#0078d4] to-[#00bcf2] text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-base flex items-center justify-center gap-2 group mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>SUBMITTING...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Free Counseling</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Support Link */}
                <p className="text-center text-xs font-medium text-slate-500 mt-6">
                  NEED HELP?{' '}
                  <a 
                    href={`https://wa.me/${COMPANY_WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20enrollment`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f47529] font-bold hover:underline"
                  >
                    CONTACT SUPPORT
                  </a>
                </p>
              </div>

              {/* Map and Contact Info - Unchanged */}
              <div className="flex flex-col gap-3 h-full">
                <div className="flex-1 bg-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-white relative min-h-[200px] md:min-h-[220px] group">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1306473489817!2d77.67679071015431!3d12.834833117810781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d1c3868b67d%3A0x32ec955bf9ca2e2d!2sMaster%20Mind%20Learning%20Solutions!5e0!3m2!1sen!2sin!4v1771595608773!5m2!1sen!2sin" width="100%" height="100%" style={{border:0, filter: 'grayscale(100%) contrast(1.2)'}} className="absolute inset-0 group-hover:filter group-hover:grayscale-50 transition-all duration-700"></iframe>
                  <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                     <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xs"><FaMapMarkedAlt/></div>
                        <div>
                          <p className="text-[8px] font-bold text-slate-400 uppercase">Headquarters</p>
                          <p className="font-bold text-slate-900 text-xs">Electronic City, Bangalore</p>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="bg-[#0f172a] rounded-xl md:rounded-2xl p-4 md:p-5 text-white shadow-md flex flex-col justify-center relative overflow-hidden group">
                   <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-gradient-to-tl from-[#00bcf2]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                   <div className="space-y-2 md:space-y-3 relative z-10">
                      <div className="flex items-center gap-2 group/item">
                         <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center text-[#00bcf2] group-hover/item:scale-110 transition-transform text-xs md:text-sm"><FaPhoneAlt/></div>
                         <div>
                           <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Call Us</p>
                           <p className="text-sm md:text-base font-bold">+91 76768 09008</p>
                         </div>
                      </div>
                      <div className="w-full h-px bg-white/10"></div>
                      <div className="flex items-center gap-2 group/item">
                         <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center text-[#0078d4] group-hover/item:scale-110 transition-transform text-xs md:text-sm"><FaEnvelope/></div>
                         <div>
                           <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">Email Us</p>
                           <p className="text-sm md:text-base font-bold">blrelectroniccity@gmail.com</p>
                         </div>
                      </div>
                      <div className="w-full h-px bg-white/10"></div>
                      <div className="flex items-center gap-2 group/item">
                         <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-lg flex items-center justify-center text-green-400 group-hover/item:scale-110 transition-transform text-xs md:text-sm"><FaWhatsapp/></div>
                         <div>
                           <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase">WhatsApp</p>
                           <p className="text-sm md:text-base font-bold">+91 76768 09008</p>
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