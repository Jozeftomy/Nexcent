import React from 'react';
import logo from '../assets/images/FooterLogo.png';
import Social0 from '../assets/images/Social0.png';
import Social1 from '../assets/images/Social1.png';
import Social2 from '../assets/images/Social2.png';
import Social3 from '../assets/images/Social3.png';

const socialLogos = [Social0, Social1, Social2, Social3];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-6 md:px-20 pb-0 mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src={logo}
              alt="Logo" 
              className="w-[154.49px] h-[24px] hover:cursor-pointer"
            />
          </div>
          <p className="text-sm text-gray-400">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-sm text-gray-400 mb-2">All rights reserved</p>

          <div className="flex gap-3 mt-2">
            {socialLogos.map((icon, index) => (
              <div key={index} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <img src={icon} alt={`Social ${index}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400 hover:cursor-pointer">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400 hover:cursor-pointer">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Stay up to date</h3>
          <div className="flex bg-gray-700 rounded-md overflow-hidden w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-4 py-2 w-full text-sm text-white placeholder-gray-400 outline-none"
            />
            <button className="px-3 flex items-center justify-center text-white">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
