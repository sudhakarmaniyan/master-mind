import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaCloud, 
  FaPaintBrush, 
  FaChartLine, 
  FaLaptopHouse, 
  FaUserGraduate,
  FaCheckCircle
} from 'react-icons/fa';

// Organizing your massive list into digestible, beautiful categories
const serviceCategories = [
  {
    title: "Software & App Development",
    icon: <FaCode />,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: ["Full Stack Development", "Java Programming Courses", "Advanced Python Course", "Python Programming Classes", "Android Course", "App Development", "The Web Designing Course", "Software Testing"]
  },
  {
    title: "Cloud & DevOps",
    icon: <FaCloud />,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    items: ["AWS Certification Training", "AWS Course", "Azure Course", "Azure DevOps", "DevOps Training"]
  },
  {
    title: "Design & Multimedia",
    icon: <FaPaintBrush />,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    items: ["Graphic Designing", "2D And 3D Animation", "3D Animation", "Video Editing Courses"]
  },
  {
    title: "Enterprise & Business Tech",
    icon: <FaChartLine />,
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-100",
    items: ["SAP Course", "SAP Training", "SQL Course", "SQL Training", "Tally Training", "Excel Training Programs", "Microsoft Office Course", "For Microsoft Office Training"]
  },
  {
    title: "Training Methodologies",
    icon: <FaLaptopHouse />,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100",
    items: ["Live Classes", "Online Classes", "Online Training Solution", "Class Room Training", "Corporate Training", "Customized Learning", "Personalized Learning"]
  },
  {
    title: "Career & Education",
    icon: <FaUserGraduate />,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    items: ["100% Placement Assistance", "Job Oriented Training", "IT Education", "Secondary Education", "Children School", "Technology Training", "Teaching Software", "Software Training Institutes", "Course Training"]
  }
];

export default function Services() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 bg-slate-900 overflow-hidden text-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008bdc]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f47529]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-[#f47529] font-black uppercase tracking-[0.2em] mb-4 text-sm">What We Provide</h3>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Comprehensive Learning <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#0078d4]">Solutions</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            From 100% Placement Assistance to cutting-edge Full Stack and Cloud Training, we provide everything you need to launch and accelerate your tech career.
          </p>
        </div>
      </section>

      {/* SERVICES GRID SECTION */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 border ${category.border} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 ${category.bg} ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm`}>
                {category.icon}
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                    <FaCheckCircle className={`mt-1 text-sm ${category.color} shrink-0`} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Ready to upgrade your skills?</h2>
          <p className="text-slate-500 text-lg mb-10">Join Master Minds Learning Solutions today and get access to top-tier training, live classes, and absolute placement assistance.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/enroll" className="bg-[#008bdc] hover:bg-[#006bb3] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
              Enroll Now
            </Link>
            <Link to="/contact" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}