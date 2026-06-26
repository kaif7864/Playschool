import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">Admissions <span className="text-secondary">Enquiry</span></h1>
          <p className="text-lg text-gray-600 font-medium">Take the first big step. Fill out the form below and our counselors will get in touch with you shortly.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Parent's Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter child's name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Child's Age (in years) *</label>
                <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="E.g. 3" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter mobile number" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter email address" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">City/Location *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter your city" />
              </div>
            </div>
            <div className="pt-4 text-center">
              <button type="button" className="btn-secondary w-full md:w-auto px-12 text-lg">Submit Enquiry</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Admissions;
