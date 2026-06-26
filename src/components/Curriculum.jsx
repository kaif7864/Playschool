import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaBookOpen, FaSmile, FaPalette, FaChartLine, FaHeart, FaGlobe } from 'react-icons/fa';

const Curriculum = () => {
  const petals = [
    { title: "Cognitive Skills", icon: <FaBrain />, desc: "Memory foundations, concentration, and problem-solving.", color: "text-blue-500", bg: "bg-blue-100" },
    { title: "Language Skills", icon: <FaBookOpen />, desc: "Listening, speaking, reading, and writing.", color: "text-indigo-500", bg: "bg-indigo-100" },
    { title: "Socio-Emotional", icon: <FaHeart />, desc: "Emotional intelligence and relationship building.", color: "text-rose-500", bg: "bg-rose-100" },
    { title: "Fine Motor", icon: <FaPalette />, desc: "Precise hand and finger movements for tasks.", color: "text-amber-500", bg: "bg-amber-100" },
    { title: "Gross Motor", icon: <FaChartLine />, desc: "Strength, coordination, and balance.", color: "text-emerald-500", bg: "bg-emerald-100" },
    { title: "Life Skills", icon: <FaSmile />, desc: "Daily living, self-care, and adaptability.", color: "text-purple-500", bg: "bg-purple-100" },
    { title: "Universal Values", icon: <FaGlobe />, desc: "Respect, kindness, honesty, and responsibility.", color: "text-cyan-500", bg: "bg-cyan-100" }
  ];

  return (
    <section id="curriculum" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -right-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading text-gray-900 mb-6"
            >
              The Seven Petal <span className="text-accent">Approach</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 font-medium leading-relaxed"
            >
              A scientifically designed, play-based curriculum. Our proprietary learning method supports holistic development through structured play, ensuring your child learns joyfully every single day.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-accent/5 p-6 rounded-3xl border border-accent/10"
            >
              <p className="text-accent-dark font-bold italic">
                "From storytelling and singing to messy art and mini science labs, our children learn through joy and experience."
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {petals.map((petal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${index === petals.length - 1 ? 'sm:col-span-2 sm:w-1/2 mx-auto' : ''} bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${petal.bg} ${petal.color} group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(petal.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{petal.title}</h4>
                      <p className="text-sm text-gray-500 font-medium">{petal.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
