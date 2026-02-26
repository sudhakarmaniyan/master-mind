import React, { useState } from 'react';
import { HiOutlineUser, HiOutlineMail, HiOutlinePhone, HiOutlineBookOpen, HiX, HiOutlineCheckCircle } from 'react-icons/hi';

// 👇 1. THIS IS THE FIX: The random math is calculated ONCE outside the component
const confettiCSS = [...Array(20)].map((_, i) => `
  .confetti-${i} {
    left: ${Math.random() * 100}%;
    background-color: ${['#f47529', '#008bdc', '#22c55e', '#f59e0b', '#ec4899'][i % 5]};
    width: ${Math.random() * 8 + 4}px;
    height: ${Math.random() * 8 + 4}px;
    animation: confetti-fall ${2 + Math.random() * 3}s linear infinite;
    animation-delay: ${Math.random() * 2}s;
  }
`).join('');

// Company WhatsApp number (format: country code + number without +)
const COMPANY_WHATSAPP = "917676809008"; // Replace with your actual number

// --- PROPS INTERFACE ---
interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get course display name
      const courseDisplay = formData.course === 'AWS' ? 'AWS Cloud Engineering' :
                           formData.course === 'DataScience' ? 'Data Science Professional' :
                           formData.course === 'FullStack' ? 'Full Stack Development' : formData.course;

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

      // Show celebration
      setShowCelebration(true);
      console.log("Form Submitted:", formData);

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      alert('There was an error submitting your application. Please try again or contact support directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseEverything = () => {
    setShowCelebration(false);
    setFormData({ fullName: '', email: '', phone: '', course: '' }); 
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
                    Your application has been submitted! Our team will contact you shortly via WhatsApp.
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                    disabled={isSubmitting}
                    className={`w-full group flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#008bdc] transition-all shadow-xl shadow-slate-200 mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <span>Submit Application</span>
                            <HiOutlineCheckCircle className="text-xl group-hover:scale-125 transition-transform" />
                        </>
                    )}
                </button>
            </form>

            <p className="text-center text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-widest">
                Need help?{' '}
                <a 
                    href={`https://wa.me/${COMPANY_WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20enrollment`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f47529] hover:underline"
                >
                    Contact Support
                </a>
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
        
        /* 👇 2. Injecting the confetti styles here! */
        ${confettiCSS}

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