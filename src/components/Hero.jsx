import React from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen flex items-center pt-24 lg:pt-32">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-playful-pink rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-playful-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-light rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-semibold mb-6">
              <FaMagic className="w-5 h-5 text-playful-yellow" />
              <span>India's Fastest Growing Preschool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading text-gray-900 leading-tight mb-6">
              Take The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-playful-pink">First Big Step</span> <br /> Towards Joyful Learning
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Why thousands of families trust Nirmaniix-School. A trusted space where every milestone shines through our scientifically designed play-based curriculum.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/admissions" className="btn-primary w-full sm:w-auto gap-2">
                Enquire Now <FaArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary w-full sm:w-auto gap-2">
                <FaPlay className="w-5 h-5" /> Virtual Tour
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div>
                <h3 className="text-3xl font-heading text-primary">900+</h3>
                <p className="text-gray-500 text-sm font-semibold">Preschools</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading text-secondary">175+</h3>
                <p className="text-gray-500 text-sm font-semibold">Cities</p>
              </div>
              <div>
                <h3 className="text-3xl font-heading text-accent">200K+</h3>
                <p className="text-gray-500 text-sm font-semibold">Happy Children</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            {/* Hero Image / Composition */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-light to-primary-light rounded-full shadow-2xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden transform -rotate-3 border-4 border-white z-10 glass-card">
                 <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop" alt="Happy kids learning" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-playful-green/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Play-Based</p>
                  <p className="text-xs text-gray-500">Learning</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-playful-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Safe Space</p>
                  <p className="text-xs text-gray-500">For Kids</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
