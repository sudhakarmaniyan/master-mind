import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar, HiOutlineArrowRight,} from 'react-icons/hi';

interface JobOpening {
  id: number;
  role: string;
  department: 'Cloud' | 'Data' | 'Development';
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  image: string;
}
// Replace these with the actual words you use for your tabs
type FilterTab = 'All' | 'Cloud' | 'Data' | 'Development';


const Careers: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cloud' | 'Data' | 'Development'>('All');

  const openings: JobOpening[] = [
    {
      id: 1,
      role: "Senior Data Scientist",
      department: 'Data',
      location: "Bengaluru (Hybrid)",
      type: "Full-time",
      salary: "18L - 25L PA",
      description: "We are looking for a data wizard to lead our predictive modeling team. You will be responsible for architecting scalable ML pipelines and mentored junior developers.",
      requirements: ["5+ Years Python", "PyTorch/TensorFlow", "SQL Expert", "AWS SageMaker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      role: "Cloud Solutions Architect",
      department: 'Cloud',      location: "Remote / Bengaluru",
      type: "Full-time",
      salary: "22L - 30L PA",
      description: "Join our core infrastructure team to design fault-tolerant, multi-region architectures on AWS. You'll lead migrations and optimize cloud spend for enterprise clients.",
      requirements: ["AWS Certified Pro", "Terraform", "Kubernetes", "Security Expert"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      role: "Full Stack .NET Developer",
      department: 'Development',
      location: "Bengaluru (In-office)",
      type: "Full-time",
      salary: "12L - 18L PA",
      description: "Build the future of our learning platform. You will work across the entire stack using .NET 8, React, and PostgreSQL to deliver high-performance user experiences.",
      requirements: [".NET Core 8", "React/TypeScript", "Microservices", "Docker"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    }
  ];

  const filteredJobs = filter === 'All' 
    ? openings 
    : openings.filter(job => job.department === filter);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-20 font-sans selection:bg-[#f27324] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-[#f27324] font-black uppercase tracking-[0.2em] text-xs">Join the Mission</span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-tight">
              Shape the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27324] to-orange-400">Tech Education</span>
            </h1>
            <p className="text-slate-500 mt-6 text-lg font-medium leading-relaxed">
              We're looking for passionate engineers, mentors, and visionaries to help us build India's most practical tech bootcamp.
            </p>
          </div>

          {/* Department Filter */}
          <div className="mt-10 md:mt-0 flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto no-scrollbar">
            {['All', 'Cloud', 'Data', 'Development'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as FilterTab)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  filter === tab 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Job Openings Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="group relative h-[620px] bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Overlay Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={job.image} 
                  alt={job.role} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[100%] group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-8 left-8">
                 <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-white text-xs font-black uppercase tracking-widest">Hiring Now</span>
                 </div>
              </div>

              {/* Content Panel */}
              <div className="mt-auto relative p-8 md:p-12 z-10">
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
                        <HiOutlineLocationMarker className="text-lg" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider">
                        <HiOutlineCurrencyDollar className="text-lg text-green-500" /> {job.salary}
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tighter">
                    {job.role}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                  {job.description}
                </p>

                {/* Skill Requirements Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {job.requirements.map((req, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-black text-white uppercase"
                    >
                      {req}
                    </span>
                  ))}
                </div>

                {/* --- 2. UPDATED BUTTON: Links to CareerDetail page --- */}
                <Link 
                  to={`/careers/${job.id}`} 
                  className="flex items-center justify-center gap-3 w-full py-5 bg-[#f27324] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all group/btn shadow-xl shadow-orange-500/20"
                >
                  <span>Apply for this role</span>
                  <HiOutlineArrowRight className="text-xl transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Why Join Us Section --- */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Remote-First", desc: "Work from anywhere in the world or join our hubs in Bengaluru." },
                { title: "Tech Allowance", desc: "Get the latest MacBook and gear needed for your engineering setup." },
                { title: "Growth & Equity", desc: "Competitive salary with ESOPs in a fast-growing EdTech startup." }
            ].map((benefit, i) => (
                <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="w-12 h-1.5 bg-[#f27324] mb-6 rounded-full"></div>
                    <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{benefit.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
            ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-2xl">
            <div className="relative z-10">
                <h3 className="text-white text-3xl font-black mb-2">Don't see a fit?</h3>
                <p className="text-slate-400 font-medium text-lg">Send us your resume anyway—we're always looking for geniuses.</p>
            </div>
            {/* General application can also link to the generic enroll form */}
            <Link 
                to="/enroll"
                className="relative z-10 mt-8 md:mt-0 px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-[#f27324] hover:text-white transition-all uppercase tracking-widest text-sm text-center"
            >
                General Application
            </Link>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27324]/10 rounded-full blur-[80px]"></div>
        </div>

      </div>
    </div>
  );
};

export default Careers;