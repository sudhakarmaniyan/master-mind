
import { useParams, Link } from 'react-router-dom';
import { 
  HiOutlineClock, 
  HiOutlineAcademicCap, 
  HiOutlineCheckCircle, 
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineArrowLeft
} from 'react-icons/hi';

export default function CourseDetail() {
  const { id } = useParams();

  // Updated Database to include ID "3" for Full Stack Development
  const courseDatabase = {
    "1": {
      title: "AWS Cloud Engineering Program",
      duration: "3 months",
      level: "Beginner to Advanced",
      accent: "from-orange-500 to-red-600",
      overview: "This comprehensive AWS Cloud Engineering program is designed to take you from a foundational understanding of cloud concepts to advanced deployment and architecture strategies.",
      curriculum: [
        { topic: "Infrastructure as Code", detail: "Master Terraform and CloudFormation." },
        { topic: "Serverless Computing", detail: "Deep dive into AWS Lambda and API Gateway." },
        { topic: "Cloud Security", detail: "Implementing IAM, VPC Security Groups, and KMS." },
        { topic: "Storage Architecture", detail: "Scaling with S3, EFS, and RDS." }
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    },
    "2": {
      title: "Data Science Professional Program",
      duration: "3 months",
      level: "Intermediate",
      accent: "from-blue-600 to-cyan-500",
      overview: "Dive deep into the world of Data Science. This program covers everything from data manipulation to advanced machine learning algorithms using industry-standard tools.",
      curriculum: [
        { topic: "Advanced Python", detail: "Pandas, NumPy and high-performance computing." },
        { topic: "Predictive Modeling", detail: "Regression, Classification, and Clustering." },
        { topic: "Big Data Tools", detail: "Introduction to Spark and SQL at scale." },
        { topic: "Data Storytelling", detail: "Visualization with Tableau and Seaborn." }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    "3": {
      title: ".NET Full Stack Academy",
      duration: "3.5 months",
      level: "Beginner",
      accent: "from-purple-600 to-indigo-500",
      overview: "Master the art of building scalable enterprise applications. This program bridges the gap between sleek frontend interfaces and robust backend systems using the power of .NET and React.",
      curriculum: [
        { topic: "Frontend Mastery", detail: "Advanced React hooks, TypeScript, and Tailwind CSS." },
        { topic: "Backend Architecture", detail: "Building RESTful APIs with C# and .NET Core 8." },
        { topic: "Database Design", detail: "Entity Framework Core and SQL Server optimization." },
        { topic: "DevOps & Deployment", detail: "CI/CD pipelines and Azure App Service hosting." }
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    }
  };

  const course = courseDatabase[id as keyof typeof courseDatabase];

  // Error state if ID doesn't exist (Matches your screenshot requirements)
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
               Overview
               <div className="h-1 flex-grow bg-slate-50 rounded-full ml-4"></div>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium">
              {course.overview}
            </p>
          </div>

          {/* Curriculum Timeline */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Program Roadmap</h2>
            <div className="space-y-8">
              {course.curriculum.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg group-hover:bg-[#008bdc] transition-colors">
                      {index + 1}
                    </div>
                    {index !== course.curriculum.length - 1 && <div className="w-0.5 h-full bg-slate-100 my-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-black text-slate-900 mb-2">{item.topic}</h4>
                    <p className="text-slate-500 font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: ENROLLMENT SIDEBAR */}
        <div className="relative">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-24">
            
            {/* Pulsing Status Badge */}
            <div className="flex items-center gap-2 mb-8">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
               </span>
               <span className="text-xs font-black uppercase tracking-widest text-slate-400">Enrollment Active</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter">Ready to Master this Skill?</h3>
            
            <div className="space-y-4 mb-10">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                 <HiOutlineShieldCheck className="text-2xl text-[#008bdc]" />
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Guarantee</p>
                   <p className="text-sm font-black text-slate-900">100% Placement Support</p>
                 </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                 <HiOutlineLightningBolt className="text-2xl text-orange-500" />
                 <div>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Batch Start</p>
                   <p className="text-sm font-black text-slate-900">Upcoming Monday</p>
                 </div>
              </div>
            </div>

            {/* Application Button */}
            <Link 
              to="/enroll" 
              className="group relative w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black hover:bg-[#008bdc] transition-all shadow-xl shadow-slate-200 flex justify-center items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Secure Your Seat</span>
              <HiOutlineCheckCircle className="text-xl relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <p className="text-center text-[10px] font-bold text-slate-400 mt-6 uppercase tracking-widest">
              Flexible EMI options available
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}