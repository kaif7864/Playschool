import React from 'react';
import { FaHeart, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-800 pb-12 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FaHeart className="h-8 w-8 text-primary" />
              <span className="font-heading text-2xl font-bold text-white">
                Nirmaniix<span className="text-primary">-School</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              India's fastest growing preschool brand providing safe and stimulating learning spaces for young minds.
            </p>
            <div className="flex gap-4">
              <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors text-sm">Programs</Link></li>
              <li><Link to="/curriculum" className="text-gray-400 hover:text-white transition-colors text-sm">Curriculum</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/franchise" className="text-gray-400 hover:text-white transition-colors text-sm">Franchise</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6">Admissions</h4>
            <ul className="space-y-3">
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors text-sm">Enquiry Form</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-white transition-colors text-sm">Fee Structure</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>1800-123-4567</li>
              <li>info@nirmaniix-school.com</li>
              <li className="leading-relaxed">Level 2, Corporate Tower, Education Hub, Cyber City, India</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nirmaniix-School. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="https://nirmaniix.online" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
