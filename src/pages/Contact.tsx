import React from 'react';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineClock,
  HiOutlinePaperAirplane,
  HiOutlineGlobeAlt
} from 'react-icons/hi';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-[#f27324] selection:text-white">
      
      {/* --- 1. HERO HEADER --- */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#f27324] font-black uppercase tracking-[0.3em] text-xs">Connection</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-tight tracking-tighter">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f27324] to-orange-400">Success Story</span>
          </h1>
          <p className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Have questions about our curriculum or placement process? Our team is ready to guide you to the right path.
          </p>
        </div>
        {/* Background Blur Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent -z-10"></div>
      </section>

      {/* --- 2. CONTACT BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: INFO STACK (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Contact Cards */}
          {[
            { icon: <HiOutlinePhone />, label: "Call Us", val: "+91 76768 09008", link: "tel:+917676809008", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: <HiOutlineMail />, label: "Email Support", val: "blrelectroniccity@gmail.com", link: "mailto:blrelectroniccity@gmail.com", color: "text-[#f27324]", bg: "bg-orange-50" },
            { icon: <FaWhatsapp />, label: "WhatsApp", val: "Chat with us", link: "https://wa.me/917676809008?partnertoken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3dhLm1lLzkxNzY3NjgwOTAwOCIsImlzcyI6Ikdvb2dsZSIsImV4cCI6MTc3MTUxNTM5MywiaWF0IjoxNzcxNTE1MDkzfQ.2ROgr6gPABhUy_LdE0H4GtfyoLYQuokoQahV40NCVwwuxIEytUtzLRCMNLFtEySMz57Pm0RgIE7FhP5XZxbpAg", color: "text-green-500", bg: "bg-green-50" },
            { icon: <HiOutlineClock />, label: "Working Hours", val: "Mon - Sat: 9 AM - 7 PM", color: "text-purple-500", bg: "bg-purple-50" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group flex items-center gap-5">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                {item.link ? (
                  <a 
                    href={item.link}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="text-slate-900 font-bold text-lg hover:text-[#f27324] transition-colors"
                  >
                    {item.val}
                  </a>
                ) : (
                  <p className="text-slate-900 font-bold text-lg">{item.val}</p>
                )}
              </div>
            </div>
          ))}

          {/* Instagram Card */}
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-[2rem] p-6 text-white shadow-lg hover:shadow-xl transition-all group">
            <a 
              href="https://www.instagram.com/master_mind_learning_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                <FaInstagram />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/80 mb-1">Follow Us</p>
                <p className="font-bold text-lg">@master_mind_learning_solutions</p>
              </div>
            </a>
          </div>

          {/* Location Block with Mini Map */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <HiOutlineLocationMarker className="text-[#f27324]" />
                Our Campus
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium mb-8">
                395, 48, Hosur Rd,<br /> 
                Electronic City, Bengaluru,<br /> 
                Karnataka 560100
              </p>
              <a 
                href="https://maps.google.com/?q=395+48+Hosur+Rd+Electronic+City+Bengaluru" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#f27324] font-black uppercase text-xs tracking-widest hover:text-white transition-colors"
              >
                Get Directions <HiOutlineGlobeAlt className="text-lg" />
              </a>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </div>

        {/* CENTER: THE FORM (8 Columns) */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-900">Message Us Directly</h2>
            <p className="text-slate-400 font-medium mt-2">Fill in your details and we will reach out shortly.</p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-orange-500/10 transition-all font-bold text-slate-900 placeholder:text-slate-300" 
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-orange-500/10 transition-all font-bold text-slate-900 placeholder:text-slate-300" 
                />
              </div>
            </div>

            <div className="relative group">
              <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-orange-500/10 transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                <option className="text-slate-300">Choose a Course of Interest</option>
                <option>AWS Cloud Engineering</option>
                <option>Data Science Professional</option>
                <option>Full Stack Development</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                 ▼
              </div>
            </div>

            <div className="relative group">
              <textarea 
                placeholder="How can we help you?" 
                rows={4}
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-5 outline-none focus:ring-4 focus:ring-orange-500/10 transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
              ></textarea>
            </div>

            <button className="w-full group flex items-center justify-center gap-4 bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#f27324] transition-all shadow-xl shadow-slate-200">
              <span>Send Message</span>
              <HiOutlinePaperAirplane className="text-xl rotate-45 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </section>

      {/* --- 3. FULL WIDTH MAP SECTION --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1306473489817!2d77.67679071015431!3d12.834833117810781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d1c3868b67d%3A0x32ec955bf9ca2e2d!2sMaster%20Mind%20Learning%20Solutions!5e0!3m2!1sen!2sin!4v1771595608773!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) invert(0.05)' }} 
            allowFullScreen 
            loading="lazy"
            title="Office Location"
          ></iframe>
          {/* Overlay Tag */}
          <div className="absolute top-8 left-8 bg-white p-4 px-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
             <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Visit our HQ</span>
          </div>
        </div>
      </section>

      {/* --- 4. SOCIAL FOOTER CONNECT --- */}
      <section className="bg-white border-t border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
           <h4 className="text-2xl font-black text-slate-900">Follow our <span className="text-blue-500">Journey</span></h4>
           <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/master_mind_learning_solutions/", color: "hover:bg-pink-500" },
                { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/917676809008?partnertoken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3dhLm1lLzkxNzY3NjgwOTAwOCIsImlzcyI6Ikdvb2dsZSIsImV4cCI6MTc3MTUxNTM5MywiaWF0IjoxNzcxNTE1MDkzfQ.2ROgr6gPABhUy_LdE0H4GtfyoLYQuokoQahV40NCVwwuxIEytUtzLRCMNLFtEySMz57Pm0RgIE7FhP5XZxbpAg", color: "hover:bg-green-600" },
                { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://www.linkedin.com", color: "hover:bg-blue-700" },
                { icon: <FaTwitter />, label: "Twitter", link: "https://twitter.com", color: "hover:bg-sky-500" },
                { icon: <FaYoutube />, label: "YouTube", link: "https://www.youtube.com", color: "hover:bg-red-600" }
              ].map((soc, i) => (
                <a 
                  key={i}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-xl text-slate-400 transition-all ${soc.color} hover:text-white hover:-translate-y-1`}
                >
                  {soc.icon}
                </a>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;