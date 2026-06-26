import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">Get in <span className="text-playful-pink">Touch</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We'd love to hear from you. Reach out to us for any queries, support, or feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow border border-slate-100">
            <div className="w-16 h-16 bg-primary/10 text-primary mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              <FaPhone />
            </div>
            <h3 className="font-heading text-xl mb-2">Phone</h3>
            <p className="text-gray-600">1800-123-4567<br/>Mon - Fri, 9am - 6pm</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow border border-slate-100">
            <div className="w-16 h-16 bg-secondary/10 text-secondary mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              <FaEnvelope />
            </div>
            <h3 className="font-heading text-xl mb-2">Email</h3>
            <p className="text-gray-600">info@nirmaniix-school.com<br/>support@nirmaniix-school.com</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow border border-slate-100">
            <div className="w-16 h-16 bg-accent/10 text-accent mx-auto rounded-full flex items-center justify-center mb-4 text-2xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-heading text-xl mb-2">Head Office</h3>
            <p className="text-gray-600">Level 2, Corporate Tower<br/>Education Hub, Cyber City, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
