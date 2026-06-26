import React from 'react';
import { motion } from 'framer-motion';

const Franchise = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Partner With Us</span>
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mt-2 mb-6">Start Your Own <span className="text-accent">Preschool</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Join the Nirmaniix-School family and build a profitable, purpose-driven business in the education sector.
          </p>
        </motion.div>

        <div className="bg-playful-yellow/10 rounded-3xl p-8 md:p-12 border border-playful-yellow/20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-heading text-gray-900 mb-6">Why Franchise with us?</h3>
            <ul className="space-y-4">
              {[
                "Proven Business Model with High ROI",
                "Comprehensive Training & Ongoing Support",
                "Scientifically Designed Curriculum",
                "Marketing & Branding Assistance",
                "Setup & Operational Guidance"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">✓</div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-heading mb-6">Request Franchise Details</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              <input type="text" placeholder="Preferred City" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              <button type="button" className="btn-primary w-full text-lg mt-2">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
