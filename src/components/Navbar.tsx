import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        /* --- Navbar Styles --- */
        .navbar-glass {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        /* --- Logo Animation (Non-Inverted 3D Flip) --- */
        @keyframes flip-glimmer {
          0% { transform: perspective(1000px) rotateY(0deg); filter: drop-shadow(0 0 2px rgba(251,191,36,0.3)); }
          50% { transform: perspective(1000px) rotateY(90deg); }
          100% { transform: perspective(1000px) rotateY(0deg); filter: drop-shadow(0 0 8px rgba(251,191,36,0.8)); }
        }
        
        .logo-flip {
          animation: flip-glimmer 4s linear infinite alternate;
          backface-visibility: hidden;
        }

        /* --- Nav Links Unique Hover & Click --- */
        .nav-item {
          position: relative;
          color: #334155;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s ease, transform 0.1s ease;
        }

        .nav-item:hover { color: #f47529; }

        .nav-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #f47529;
          transition: width 0.3s ease-in-out;
          border-radius: 2px;
        }

        .nav-item:hover::after { width: 100%; }
        .nav-item:active { transform: scale(0.95); }
        .nav-item.active { color: #f47529; }
        .nav-item.active::after { width: 100%; }

        /* --- Enroll Button --- */
        .btn-enroll {
          background: linear-gradient(135deg, #0078d4 0%, #00bcf2 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 120, 212, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: inline-block;
          text-align: center;
        }

        .btn-enroll:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 120, 212, 0.4); }
        .btn-enroll:active { transform: translateY(0); }
      `}</style>

      <nav className="navbar-glass sticky top-0 z-[1000] w-full px-4 md:px-8 py-3 lg:py-0">
        <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center h-[70px]">
          
          <Link to="/" className="flex items-center gap-3 decoration-none z-50">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="logo-flip h-12 md:h-[70px] w-auto" 
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x40/transparent/0078d4?text=LOGO' }}
            />
          </Link>

          <ul className="hidden lg:flex gap-[2.5rem] list-none items-center m-0 p-0">
            <li><a href="/#home" className="nav-item">Home</a></li>
            <li><Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
            <li><Link to="/courses" className={`nav-item ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Link></li>
            {/* NEW SERVICES LINK ADDED HERE */}
            <li><Link to="/services" className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
            <li><Link to="/careers" className={`nav-item ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link></li>
            <li><Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link></li>
            <li>
              <Link to="/enroll" className="btn-enroll">Enroll Now</Link>
            </li>
          </ul>

          <button 
            className="lg:hidden text-slate-700 p-2 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl flex flex-col py-6 px-6 gap-6 animate-fade-in z-40">
            <a href="/#home" onClick={() => setIsOpen(false)} className="nav-item text-lg border-b border-slate-100 pb-2">Home</a>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`nav-item text-lg border-b border-slate-100 pb-2 ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className={`nav-item text-lg border-b border-slate-100 pb-2 ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Link>
            {/* NEW SERVICES LINK ADDED HERE FOR MOBILE */}
            <Link to="/services" onClick={() => setIsOpen(false)} className={`nav-item text-lg border-b border-slate-100 pb-2 ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className={`nav-item text-lg border-b border-slate-100 pb-2 ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`nav-item text-lg border-b border-slate-100 pb-2 ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
            <Link to="/enroll" onClick={() => setIsOpen(false)} className="btn-enroll w-full mt-2">Enroll Now</Link>
          </div>
        )}
      </nav>
    </>
  );
}