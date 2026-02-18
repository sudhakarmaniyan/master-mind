import React, { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineBookOpen, HiX, HiCheckCircle, HiOutlineCheckCircle } from 'react-icons/hi';

// --- PROPS INTERFACE ---
interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send data to backend would go here
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setShowCelebration(true);
  };

  const handleCloseEverything = () => {
    setShowCelebration(false);
    setIsSubmitted(false);
    setFormData({ fullName: '', email: '', phone: '', course: '' }); // Optional: Clear form on close
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    // --- MODAL OVERLAY ---
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleCloseEverything} 
      ></div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative w-full max-w-[500px] z-[1010] animate-scale-up">
        
        {/* Close Button */}
        <button 
            onClick={handleCloseEverything}
            className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors"
        >
            <HiX className="text-3xl" />
        </button>

        {/* --- CELEBRATION OVERLAY (Success State) --- */}
        {showCelebration && (
            <div className="absolute inset-0 z-[2000] bg-white rounded-[3rem] flex items-center justify-center p-8 animate-fade-in border border-slate-100 shadow-2xl overflow-hidden">
            <div className="text-center relative w-full h-full flex flex-col items-center justify-center z-10">
                
                {/* Background Confetti Animation */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`confetti-piece confetti-${i} absolute w-2 h-2 rounded-full`}></div>
                    ))}
                </div>

                {/* Rocket Icon */}
                <div className="w-24 h-24 bg-orange-50 text-[#f47529] rounded-[2rem] flex items-center justify-center text-5xl mb-6 shadow-inner mx-auto animate-bounce-slow z-10">
                    🚀
                </div>

                {/* Dynamic Welcome Message */}
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase z-10">
                    Welcome <br/>
                    <span className="text-[#008bdc]">{formData.fullName}!</span>
                </h2>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 z-10 max-w-[80%]">
                    You've taken the first step. We will contact you shortly!
                </p>

                <button 
                    onClick={handleCloseEverything}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#f47529] transition-all shadow-lg z-10"
                >
                    Close
                </button>
            </div>
            </div>
        )}

        {/* --- ENROLLMENT FORM CARD --- */}
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/20 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-50">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#008bdc]/10 rounded-full blur-[60px]"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#f47529]/10 rounded-full blur-[60px]"></div>
            </div>

            <div className="text-center mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f47529]">Enrollment 2026</span>
                <h1 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter uppercase">Apply Now</h1>
                <div className="w-10 h-1.5 bg-[#008bdc] mx-auto mt-3 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#008bdc] transition-colors">
                        <HiOutlineUser className="text-xl" />
                    </div>
                    <input 
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-300 font-bold outline-none border-b-2 border-slate-100 focus:border-[#008bdc] transition-all bg-transparent" 
                    />
                </div>

                <div className="relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#008bdc] transition-colors">
                        <HiOutlineMail className="text-xl" />
                    </div>
                    <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-300 font-bold outline-none border-b-2 border-slate-100 focus:border-[#008bdc] transition-all bg-transparent" 
                    />
                </div>

                <div className="relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#008bdc] transition-colors">
                        <HiOutlinePhone className="text-xl" />
                    </div>
                    <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full pl-10 pr-4 py-3 text-slate-900 placeholder:text-slate-300 font-bold outline-none border-b-2 border-slate-100 focus:border-[#008bdc] transition-all bg-transparent" 
                    />
                </div>

                <div className="relative group">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#008bdc] transition-colors">
                        <HiOutlineBookOpen className="text-xl" />
                    </div>
                    <select 
                        required
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full pl-10 pr-8 py-3 text-slate-900 font-bold outline-none border-b-2 border-slate-100 focus:border-[#008bdc] transition-all bg-transparent appearance-none cursor-pointer"
                    >
                        <option value="">Select Your Course</option>
                        <option value="AWS">AWS Cloud Engineering</option>
                        <option value="DataScience">Data Science Professional</option>
                        <option value="FullStack">Full Stack Development</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                </div>

                <button 
                    type="submit" 
                    className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#008bdc] transition-all shadow-xl shadow-slate-200 mt-2"
                >
                    <span>Submit Application</span>
                    <HiOutlineCheckCircle className="text-xl group-hover:scale-125 transition-transform" />
                </button>
            </form>

            <p className="text-center text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-widest">
                Need help? <a href="#" className="text-[#f47529] hover:underline">Contact Support</a>
            </p>
        </div>
      </div>

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        @keyframes scaleUp { 
          from { opacity: 0; transform: scale(0.9) translateY(20px); } 
          to { opacity: 1; transform: scale(1) translateY(0); } 
        }

        @keyframes bounceSlow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
        }
        
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        .animate-scale-up { animation: scaleUp 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards; }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }

        .confetti-piece { position: absolute; top: -20px; z-index: 1; }
        
        ${[...Array(20)].map((_, i) => `
          .confetti-${i} {
            left: ${Math.random() * 100}%;
            background-color: ${['#f47529', '#008bdc', '#22c55e', '#f59e0b', '#ec4899'][i % 5]};
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            animation: confetti-fall ${2 + Math.random() * 3}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
          }
        `).join('')}

        @keyframes confetti-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(450px) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ExampleLandingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Build Your <span className="text-[#008bdc]">Future.</span>
        </h1>
        <p className="text-slate-500 text-lg mb-10 max-w-lg">
            Join the cohort of 2026. Master Full Stack, AWS, or Data Science with industry experts.
        </p>
        
        <button 
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-[#f47529] hover:bg-[#d6621f] text-white rounded-full font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-orange-200 transform hover:-translate-y-1"
        >
            Start Enrollment
        </button>

        <EnrollmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ExampleLandingPage;