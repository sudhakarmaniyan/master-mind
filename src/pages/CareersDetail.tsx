
import { useParams, Link } from 'react-router-dom';
import { 
  HiOutlineLocationMarker, 
  HiOutlineBriefcase, 
  HiOutlineCurrencyDollar, 
  HiOutlineArrowLeft,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineArrowRight
} from 'react-icons/hi';

export default function CareerDetail() {
  const { id } = useParams();

  // --- 1. UPDATED DATABASE (Now includes Full Stack Development) ---
  const jobDatabase = {
    "1": {
      role: "Senior Data Scientist",
      department: "Data Science",
      location: "Bengaluru (Hybrid)",
      type: "Full-time",
      salary: "18L - 25L PA",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      mission: "We are looking for a data wizard to lead our predictive modeling team. You will be responsible for architecting scalable ML pipelines and mentoring junior developers.",
      responsibilities: [
        "Design and implement end-to-end machine learning pipelines.",
        "Collaborate with product teams to identify high-impact business problems.",
        "Mentor junior data scientists and lead code reviews.",
        "Optimize existing models for better performance and scalability."
      ],
      requirements: [
        "5+ years of experience in Python and Scikit-Learn.",
        "Strong understanding of Deep Learning frameworks (PyTorch/TensorFlow).",
        "Expertise in SQL and Big Data processing.",
        "Prior experience with AWS SageMaker is a major plus."
      ]
    },
    "2": {
      role: "Cloud Solutions Architect",
      department: "Cloud Engineering",
      location: "Remote / Bengaluru",
      type: "Full-time",
      salary: "22L - 30L PA",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      mission: "Join our core infrastructure team to design fault-tolerant, multi-region architectures on AWS. You'll lead migrations and optimize cloud spend for enterprise clients.",
      responsibilities: [
        "Architect scalable and secure multi-tier cloud environments.",
        "Lead large-scale cloud migration projects for enterprise clients.",
        "Implement Infrastructure as Code using Terraform or CloudFormation.",
        "Conduct security audits and performance optimization on AWS."
      ],
      requirements: [
        "AWS Certified Solutions Architect - Professional.",
        "Extensive experience with Kubernetes and Docker.",
        "Strong background in Network Security and IAM.",
        "Proven track record of managing cloud budgets and optimization."
      ]
    },
    "3": {
      role: "Senior Full Stack Developer",
      department: "Product Engineering",
      location: "Remote / Bengaluru",
      type: "Full-time",
      salary: "20L - 28L PA",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      mission: "We are seeking a versatile Full Stack Developer to build high-performance web applications. You will bridge the gap between frontend aesthetics and backend efficiency, creating seamless user experiences using the latest MERN stack.",
      responsibilities: [
        "Develop scalable frontend components using React.js and TypeScript.",
        "Design and implement high-concurrency RESTful or GraphQL APIs with Node.js.",
        "Optimize database performance using MongoDB and Redis.",
        "Ensure high quality through unit testing (Jest/Cypress) and CI/CD integration.",
        "Maintain UI consistency using Tailwind CSS and modern design patterns."
      ],
      requirements: [
        "4+ years of professional experience in Full Stack Development.",
        "Expert knowledge of React, Node.js, and asynchronous programming.",
        "Strong foundation in NoSQL and Relational Database design.",
        "Experience with Redux Toolkit or React Query for state management.",
        "Comfortable working in an Agile/Scrum environment."
      ]
    }
  };

  const job = jobDatabase[id as keyof typeof jobDatabase];

  // --- 2. ERROR STATE (Job Not Found) ---
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-md border border-slate-100">
          <div className="text-6xl mb-6">🔍</div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Job Not Found</h2>
          <p className="text-slate-500 mb-8 font-medium">The position you are looking for might have been filled or the link is incorrect.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 text-[#f27324] font-black uppercase tracking-widest text-sm hover:underline">
            <HiOutlineArrowLeft /> Back to Openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans pb-24">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-slate-900">
        <img 
          src={job.image} 
          alt={job.role} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-[1100px] mx-auto px-6 w-full">
            <Link to="/careers" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors font-bold text-sm uppercase tracking-widest">
              <HiOutlineArrowLeft /> Open Positions
            </Link>
            <span className="text-[#f27324] font-black uppercase tracking-[0.2em] text-xs mb-4 block">{job.department}</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl tracking-tighter">
              {job.role}
            </h1>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-[1100px] mx-auto px-6 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: THE DETAILS */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Section: The Mission */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter flex items-center gap-3">
               The Mission
               <div className="h-1 flex-grow bg-slate-50 rounded-full"></div>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {job.mission}
            </p>
          </div>

          {/* Section: Responsibilities */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Responsibilities</h2>
            <div className="space-y-4">
              {job.responsibilities.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <HiOutlineCheckCircle className="text-2xl text-[#f27324] shrink-0 mt-0.5" />
                  <p className="text-slate-600 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Requirements */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {job.requirements.map((req, index) => (
                <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-bold text-slate-700 text-sm flex items-center gap-3 group hover:bg-slate-900 hover:text-white transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#f27324]"></div>
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY APPLY CARD (Matches Screen 2/3) */}
        <div className="relative">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-24">
            
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-8">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Applications Open</span>
            </div>

            {/* Job Meta Data */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f27324] flex items-center justify-center text-xl"><HiOutlineLocationMarker/></div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="font-bold text-slate-900">{job.location}</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl"><HiOutlineBriefcase/></div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Type</p>
                    <p className="font-bold text-slate-900">{job.type}</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl"><HiOutlineCurrencyDollar/></div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compensation</p>
                    <p className="font-bold text-slate-900">{job.salary}</p>
                 </div>
              </div>
            </div>

            {/* Perks */}
            <div className="space-y-3 mb-10 pt-6 border-t border-slate-50">
               <div className="flex items-center gap-2 text-slate-500 font-medium text-xs">
                  <HiOutlineShieldCheck className="text-lg text-blue-500" /> Medical Insurance Included
               </div>
               <div className="flex items-center gap-2 text-slate-500 font-medium text-xs">
                  <HiOutlineLightningBolt className="text-lg text-orange-400" /> Modern Tech Stack
               </div>
            </div>

            {/* Primary Action Button */}
            <Link 
              to="/enroll" 
              className="group relative w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black hover:bg-[#f27324] transition-all shadow-xl shadow-slate-200 flex justify-center items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Apply Now</span>
              <HiOutlineArrowRight className="text-xl relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-center text-[10px] font-bold text-slate-400 mt-6 uppercase tracking-widest">
              MasterMinds is an Equal Opportunity Employer
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}