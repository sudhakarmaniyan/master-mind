import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// Added Heroicons for the outline location and phone icons
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import logoImg from '../../public/Master Mind Logo.png';


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eef7ff] py-16 px-6 md:px-12 w-full mt-auto font-sans">
      {/* Custom grid to match the wide first column and grouped links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-8 text-left items-start">
        
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col space-y-6 lg:pr-10">
          {/* Logo Setup */}
          <img src={logoImg} alt="Master Mind" className="h-16 w-auto object-contain self-start" />
          
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            Empowering the next generation of tech leaders with practical skills and industry-ready training.
          </p>
          <div className="pt-2">
            <p className="text-[#f27324] font-medium text-sm mb-4">Follow us on :</p>
            <div className="flex gap-5 text-gray-500 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-[#008bdc] transition-colors" />
              {/* Note: If you want the exact 'X' logo, use FaXTwitter from 'react-icons/fa6' */}
              <FaTwitter className="cursor-pointer hover:text-[#008bdc] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#008bdc] transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#008bdc] transition-colors" />
              <FaYoutube className="cursor-pointer hover:text-[#008bdc] transition-colors" />
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col">
          <h4 className="text-[#008bdc] font-medium text-lg mb-6">Quick Links</h4>
          <ul className="flex flex-col space-y-4 text-gray-500 text-sm list-none p-0 m-0">
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">Blogs</li>
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">Portfolio</li>
          </ul>
        </div>

        {/* Column 3: Programs */}
        <div className="flex flex-col">
          <h4 className="text-[#008bdc] font-medium text-lg mb-6">Programs</h4>
          <ul className="flex flex-col space-y-4 text-gray-500 text-sm list-none p-0 m-0">
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">AWS</li>
            <li className="hover:text-[#008bdc] cursor-pointer transition-colors">Data Science</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col">
          <h4 className="text-[#008bdc] font-medium text-lg mb-6">Contact</h4>
          <div className="flex flex-col space-y-5 text-sm text-gray-500">
            <div className="flex gap-3 items-start">
              <HiOutlineLocationMarker className="text-gray-400 text-xl shrink-0 mt-0.5" />
              <p className="leading-relaxed">395, 48, Hosur Rd, Dadi Reddy Layout, Veer Sandra, Electronic City, Bengaluru, Karnataka 560100</p>
            </div>
            <div className="flex gap-3 items-center">
              <HiOutlinePhone className="text-gray-400 text-xl shrink-0" />
              <p>076788 09008</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;