import React, { useState, useEffect } from 'react';
import { HiOutlineClock, HiArrowNarrowRight, HiOutlineLightningBolt, HiOutlineChip } from 'react-icons/hi';
import { Link } from 'react-router-dom';

// Types for better clarity
interface Course {
  id: number;
  title: string;
  category: 'Data' | 'Cloud' | 'Development';
  duration: string;
  level: string;
  description: string;
  image: string;
  accent: string;
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Data', 'Cloud', 'Development'];

  const courses: Course[] = [
    {
      id: 1,
      title: "AWS Cloud Engineering Program",
      category: 'Cloud',
      duration: "12 Weeks",
      level: "Intermediate",
      description: "Prepare for AWS Solutions Architect certification with deep-dives into VPC, EC2, and Serverless architectures.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      accent: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Data Science Professional",
      category: 'Data',
      duration: "16 Weeks",
      level: "Advanced",
      description: "From Python fundamentals to Neural Networks. Master the art of storytelling with data and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      accent: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: ".NET Full Stack Academy",
        category: 'Development',
        duration: "14 Weeks",
        level: "Beginner",
        description: "Build robust enterprise applications using C#, .NET Core, and React. Focus on Clean Architecture.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        accent: "from-purple-500 to-indigo-500"
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
            Every course is integrated with real-world capstone projects and guided by industry mentors.
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
          </main>

        </div>
      </div>
    </div>
  );
}