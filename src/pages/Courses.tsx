import { useState } from 'react';
import { HiOutlineClock, HiArrowNarrowRight, HiOutlineLightningBolt } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// Types for better clarity
interface Course {
  id: number;
  title: string;
  category: 'Data' | 'Cloud' | 'Development' | 'Testing' | 'Networking' | 'Management' | 'ERP' | 'Design' | 'Accounting';
  duration: string;
  level: string;
  description: string;
  image: string;
  accent: string;
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Data', 'Cloud', 'Development', 'Testing', 'Networking', 'Management', 'ERP', 'Design', 'Accounting'];

  const courses: Course[] = [
    // Cloud Computing
    {
      id: 1,
      title: "Cloud Computing",
      category: 'Cloud',
      duration: "10 Weeks",
      level: "Beginner to Advanced",
      description: "Master cloud architecture, deployment models, and services across AWS, Azure, and Google Cloud. Learn virtualization, containerization, and cloud security best practices.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      accent: "from-orange-500 to-red-500"
    },
    // Manual/Automation Testing
    {
      id: 2,
      title: "Manual/Automation Testing",
      category: 'Testing',
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      description: "Comprehensive training in manual testing methodologies and automation tools including Selenium, JUnit, TestNG. Learn test planning, execution, and reporting.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
      accent: "from-green-500 to-emerald-500"
    },
    // Data Analytics
    {
      id: 3,
      title: "Data Analytics",
      category: 'Data',
      duration: "14 Weeks",
      level: "Beginner to Advanced",
      description: "Transform raw data into actionable insights using Python, SQL, Tableau, and Power BI. Master statistical analysis, data visualization, and storytelling with data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      accent: "from-blue-500 to-cyan-500"
    },
    // Full Stack
    {
      id: 4,
      title: "Full Stack Development",
      category: 'Development',
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      description: "Become a complete web developer mastering both frontend and backend technologies. Learn React, Node.js, Express, MongoDB, and RESTful API development.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      accent: "from-purple-500 to-indigo-500"
    },
    // Networking
    {
      id: 5,
      title: "Networking",
      category: 'Networking',
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      description: "Comprehensive networking fundamentals including OSI model, TCP/IP, routing, switching, and network security. Prepare for CCNA certification.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      accent: "from-blue-600 to-blue-800"
    },
    // Scrum Master
    {
      id: 6,
      title: "Scrum Master",
      category: 'Management',
      duration: "8 Weeks",
      level: "Intermediate",
      description: "Master Agile methodologies and Scrum framework. Learn to facilitate Scrum events, manage backlogs, and lead high-performing teams. Prepare for CSM certification.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      accent: "from-yellow-500 to-orange-500"
    },
    // SAP
    {
      id: 7,
      title: "SAP",
      category: 'ERP',
      duration: "20 Weeks",
      level: "Beginner to Advanced",
      description: "Enterprise resource planning with SAP. Learn SAP modules including FICO, MM, SD, and ABAP programming. Master business processes and integration.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      accent: "from-blue-700 to-indigo-900"
    },
    // CADD
    {
      id: 8,
      title: "CADD",
      category: 'Design',
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      description: "Computer-Aided Design and Drafting. Master AutoCAD, SolidWorks, and 3D modeling techniques for engineering and architectural applications.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=800&q=80",
      accent: "from-red-500 to-pink-500"
    },
    // Tally
    {
      id: 9,
      title: "Tally",
      category: 'Accounting',
      duration: "8 Weeks",
      level: "Beginner",
      description: "Complete accounting with Tally ERP. Learn financial management, inventory tracking, GST compliance, and payroll management for business operations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      accent: "from-green-600 to-teal-600"
    }
  ];

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-20 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-left">
          <span className="text-[#008bdc] font-bold tracking-widest uppercase text-sm">Our Curriculum</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
            Skill up with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008bdc] to-[#00c6ff]">Master Minds</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-xl text-lg">
            Our curriculum is carefully designed to align with current industry standards and technological advancements. We combine strong foundational concepts with hands-on practical training to ensure students gain both theoretical knowledge and real-world expertise.

Each program includes live projects, case studies, assessments, and mentorship to prepare students for successful careers in the technology industry.
            
            <span className="block mt-4 font-bold text-[#f27324]">
              🎓 100% Placement Training & Assistance Provided
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Side Navigation (Unique Sticky Filter) */}
          <aside className="lg:w-1/4 h-fit sticky top-24">
            <div className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 flex lg:flex-col flex-row gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-4 rounded-2xl text-sm font-bold transition-all flex items-center justify-between group ${
                    activeTab === tab 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'bg-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-[#008bdc] animate-pulse"></div>}
                </button>
              ))}
            </div>
            
            {/* Placement Highlight Badge */}
            <div className="mt-6 bg-gradient-to-r from-[#f27324] to-orange-400 p-6 rounded-3xl text-white hidden lg:block">
              <h3 className="font-black text-lg mb-2">🎯 Placement Training</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Dedicated placement training including resume building, mock interviews, and industry connect programs.
              </p>
            </div>
          </aside>

          {/* Main Course Grid */}
          <main className="lg:w-3/4 space-y-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#008bdc]/10 transition-all duration-500 flex flex-col md:flex-row"
              >
                {/* Visual Side */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Pill Over Image */}
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm text-xs font-black uppercase tracking-tighter text-slate-800`}>
                    {course.category}
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-between bg-white relative">
                  
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase">
                            <HiOutlineClock className="text-lg text-[#008bdc]" />
                            {course.duration}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase">
                            <HiOutlineLightningBolt className="text-lg text-orange-400" />
                            {course.level}
                        </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#008bdc] transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-500 text-md leading-relaxed mb-8 line-clamp-3 font-medium">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <Link 
                      to={`/courses/${course.id}`}
                      className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm overflow-hidden transition-all hover:pr-12"
                    >
                      <span className="relative z-10">Enroll Program</span>
                      <HiArrowNarrowRight className="absolute right-4 opacity-0 group-hover/btn:opacity-100 transition-all text-xl" />
                    </Link>
                    
                    <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="student" />
                            </div>
                        ))}
                        <div className="text-[10px] pl-5 font-bold text-slate-400 self-center uppercase tracking-widest">Join 500+</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
            
            {/* Placement Training Banner - Mobile View */}
            <div className="bg-gradient-to-r from-[#f27324] to-orange-400 p-6 rounded-[2.5rem] text-white lg:hidden">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <span>🎯</span> Placement Training Included
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                All courses include dedicated placement training with resume building, mock interviews, and industry connect programs.
              </p>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}