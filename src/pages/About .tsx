import React, { useEffect, useState, useRef } from 'react';
import { 
  FaBriefcase, 
  FaVolumeMute, 
  FaVolumeUp, 
  FaStepForward,
  FaAward,
  FaBuilding,
  FaUserGraduate,
  FaExpand, 
  FaHeart, 
  FaCamera,
  FaArrowRight
} from 'react-icons/fa';

// --- Mixed Playlist (YouTube + MP4) ---
const CAMPUS_VIDEOS = [
  "https://youtu.be/1J3ImpkUkto?si=tH1naSgn7vv6XqfX", // YouTube Link
  "https://youtu.be/pJTj9hinSFI?si=VW2o1jvnQbujBGAQ", 
  "https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-modern-office-4919-large.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-university-hallway-4796-large.mp4"
];

// --- Mock Data ---
const MENTORS = [
  { name: "Jake Nackos", role: "Cloud Engineer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
  { name: "Sarah Martin", role: "Sr. Data Analyst", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
  { name: "Raj Mardani", role: "AWS Architect", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
  { name: "Viola Davis", role: "Full Stack Dev", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
];



const GALLERY_ITEMS = [
  { 
    id: 1,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    category: "Event",
    title: "Annual Tech Summit",
    size: "md:col-span-2 md:row-span-2" // Large Hero
  },
  { 
    id: 2,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Classroom",
    title: "Collaborative Coding",
    size: "md:col-span-1 md:row-span-1" // Standard
  },
  { 
    id: 3,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "Workshop",
    title: "Design Thinking",
    size: "md:col-span-1 md:row-span-2" // Tall Portrait
  },
  { 
    id: 4,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    category: "Community",
    title: "Group Discussions",
    size: "md:col-span-1 md:row-span-1" // Standard
  },
  { 
    id: 5,
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
    category: "Career",
    title: "Placement Drive",
    size: "md:col-span-2 md:row-span-1" // Wide
  }
];

// --- Helper to extract YouTube ID ---
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function About() {
  
  // --- Video State ---
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // --- Scroll Reveal Effect ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  // --- Auto-shuffle Video ---
  useEffect(() => {
    const interval = setInterval(() => {
      
    }, 8000); // Switch every 8s (gave a bit more time for YouTube load)
    return () => clearInterval(interval);
  }, [currentVideoIndex]);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % CAMPUS_VIDEOS.length);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Determine current video type
  const currentVideoUrl = CAMPUS_VIDEOS[currentVideoIndex];
  const youtubeID = getYouTubeID(currentVideoUrl);

  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden selection:bg-[#f47529] selection:text-white">
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      {/* 1. HERO: About Mastermind */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal opacity-0 translate-y-10 transition-all duration-1000">
            <div className="inline-block px-4 py-2 bg-orange-50 text-[#f47529] font-bold rounded-full text-sm tracking-widest uppercase border border-orange-100">
              Who We Are
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              We Are <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f47529] to-[#ff9f5a]">Master Minds.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
              Master Mind Learning Solutions is built on the vision of transforming education through practical innovation. Our mission is to create a dynamic learning ecosystem where students gain technical expertise, industry exposure, and career guidance.</p>
            <div className="pl-6 border-l-4 border-[#f47529]">
                <p className="text-xl text-slate-800 italic font-serif">
                  "Stop studying, start engineering."
                </p>
            </div>
          </div>
          
          <div className="relative reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <div className="absolute inset-0 bg-[#f47529] rounded-[3rem] rotate-6 opacity-10"></div>
            <img 
              src="https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80 " 
              alt="About Us Hero" 
              className="relative z-10 w-full rounded-[3rem] shadow-2xl transform hover:-rotate-2 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 2. ACHIEVEMENTS (Stats) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Real Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcf2] to-[#0078d4]">Real Careers</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We don't just teach technology; we build careers. Here is the data behind our success stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaBriefcase />, num: "94%", label: "Placement Rate", sub: "Avg time to hire: 45 days", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { icon: <FaAward />, num: "12 LPA", label: "Highest Package", sub: "Average Package: 6 LPA", color: "text-[#f47529]", bg: "bg-orange-500/10", border: "border-orange-500/20" },
              { icon: <FaBuilding />, num: "500+", label: "Hiring Partners", sub: "From Startups to MNCs", color: "text-[#00bcf2]", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { icon: <FaUserGraduate />, num: "2500+", label: "Alumni Network", sub: "Working across 12 countries", color: "text-[#f47529]", bg: "bg-orange-500/10", border: "border-orange-500/20" }
            ].map((stat, i) => (
              <div key={i} className={`relative group p-8 rounded-[2rem] border ${stat.border} bg-slate-800/40 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2`}>
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.num}</div>
                <div className="text-lg font-bold text-slate-300 mb-4">{stat.label}</div>
                <div className="w-12 h-1 bg-slate-700 rounded-full mb-4"></div>
                <p className="text-sm text-slate-500 font-medium bg-slate-900/50 inline-block px-3 py-1 rounded-full border border-slate-700/50">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIDEO SECTION (YouTube & MP4 Supported) */}
      <section className="py-24 px-6 relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">See Life at <span className="text-[#f47529]">Master Minds</span></h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Experience a vibrant and inspiring learning environment where innovation meets collaboration. At Master Mind Learning Solutions, students engage in hands-on projects, technical workshops, group discussions, and mentorship sessions that shape both their skills and confidence.

From interactive classrooms to career-focused events, life at Master Minds is designed to prepare you for real-world success.
          </p>

          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-800 bg-black aspect-video md:h-[500px]">
            
            {/* Conditional Rendering: YouTube vs MP4 */}
            {youtubeID ? (
              <iframe
                key={youtubeID} // Force re-render on change
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${youtubeID}`}
                className="w-full h-full object-cover animate-fade-in"
                allow="autoplay; encrypted-media"
                title="Campus Video"
              />
            ) : (
              <video
                key={currentVideoUrl}
                ref={videoRef}
                src={currentVideoUrl}
                className="w-full h-full object-cover animate-fade-in"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />
            )}

            {/* Gradient Overlay (Only for aesthetics, careful not to block Youtube interaction if needed) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none"></div>

            {/* Live Badge */}
            <div className="absolute top-8 left-8 flex items-center gap-3 z-10">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-white/90 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Live Campus Feed
              </span>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end z-20">
              <div className="text-left">
                <span className="bg-[#f47529] px-3 py-1 text-xs font-bold rounded uppercase text-white inline-block mb-2">Now Playing</span>
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {youtubeID ? "Featured YouTube Event" : "Campus Moments"}
                </h3>
              </div>
              <div className="flex gap-4">
                {/* Note: Mute toggle forces YouTube iframe reload, best for MP4s or accept reload */}
                <button onClick={toggleMute} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white">
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <button onClick={handleNextVideo} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all text-white group-active:scale-95">
                  <FaStepForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078d4] to-[#00bcf2]">Gallery</span>
                <FaCamera className="text-[#0078d4] text-2xl opacity-50" />
              </h2>
              <p className="text-slate-500 text-lg">
                Explore the vibrant moments that define life at Master Mind Learning Solutions. From interactive classroom sessions and technical workshops to project presentations and career development programs, our campus reflects a culture of learning, collaboration, and growth.
              </p>
            </div>
            {/* Optional 'View All' Button */}
            <button className="hidden md:flex items-center gap-2 text-slate-600 font-bold hover:text-[#f47529] transition-colors mt-6 md:mt-0">
              View All Photos <FaArrowRight className="text-sm"/>
            </button>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div 
                key={item.id} 
                className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${item.size} reveal opacity-0 translate-y-10`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Top Right: Like Button */}
                <div className="absolute top-4 right-4 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                    <FaHeart />
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-[#f47529] text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Explore this moment
                      </p>
                    </div>
                    <button className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <FaExpand className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile 'View All' Button (only visible on small screens) */}
          <div className="mt-8 text-center md:hidden">
             <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl shadow-sm">
                View All Photos
             </button>
          </div>

        </div>
      </section>

      {/* 5. TEAM / MENTORS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
            Meet the <span className="text-[#f47529]">Mentors</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENTORS.map((mentor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal opacity-0 translate-y-10 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner group-hover:border-[#f47529]/20 transition-colors">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{mentor.name}</h4>
                <p className="text-[#0078d4] font-medium text-sm mt-1 uppercase tracking-wide">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}