import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">About <span className="text-primary">Nirmaniix-School</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            We are dedicated to providing a safe, nurturing, and scientifically designed learning environment for young minds to bloom. Our mission is to build strong foundations for a lifetime of learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Kids playing" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted preschool network in India by empowering children with skills that make them confident, creative, and compassionate individuals.
            </p>
            <h3 className="text-3xl font-heading text-gray-900 mt-8">Our Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe that every child is unique and has an infinite potential to learn. Our proprietary Seven Petal Approach ensures holistic development through structured play.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
