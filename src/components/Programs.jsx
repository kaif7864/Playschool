import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      age: "2-3 Years",
      title: "Developing Roots",
      subtitle: "Playgroup",
      description: "Designed to cater to the learning requirements of toddlers. We give special care to help them overcome separation anxiety through fun-filled activities.",
      features: [
        "Overcoming separation anxiety",
        "Sensory and motor development",
        "Introduction to social interactions",
        "Basic language skills through rhymes"
      ],
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop",
      color: "from-primary-light to-primary",
      bgColor: "bg-primary"
    },
    {
      age: "3-4 Years",
      title: "Emerging Wings",
      subtitle: "Nursery",
      description: "Builds a strong base in phonics and reading. Children learn to speak the alphabet in a sequential, rhyming manner and write upper case.",
      features: [
        "Phonics and sequential alphabet learning",
        "Upper case letter writing",
        "Creative expression through art",
        "Introduction to basic numbers"
      ],
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2000&auto=format&fit=crop",
      color: "from-secondary-light to-secondary",
      bgColor: "bg-secondary"
    },
    {
      age: "4-5 Years",
      title: "Ready To Fly I",
      subtitle: "Lower KG",
      description: "Prepares children for next level socio-emotional development. Mastering reading/writing long/short vowels, blending, and comprehension.",
      features: [
        "Vowel blending and reading comprehension",
        "Advanced number concepts",
        "Socio-emotional growth",
        "Environmental awareness"
      ],
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop",
      color: "from-playful-pink to-accent",
      bgColor: "bg-accent"
    },
    {
      age: "5-6 Years",
      title: "Ready To Fly II",
      subtitle: "Upper KG",
      description: "Prepares children for formal schooling. Develops excellent reading skills and introduces basic addition & subtraction concepts.",
      features: [
        "Formal schooling preparation",
        "Basic addition & subtraction",
        "Advanced reading and communication skills",
        "Logical reasoning and problem solving"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
      color: "from-playful-green to-teal-500",
      bgColor: "bg-teal-500"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Age Appropriate Learning
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-gray-900 mt-2 mb-4"
          >
            Our Learning <span className="text-secondary">Programs</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md font-bold text-gray-800">
                {program.age}
              </div>
              <div className="h-64 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} mix-blend-multiply opacity-40 z-10 group-hover:opacity-20 transition-opacity`}></div>
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-8 relative z-20 bg-white -mt-6 rounded-t-3xl flex flex-col justify-between items-start">
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-wider">{program.subtitle}</p>
                  <h3 className="text-2xl font-heading text-gray-900 mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProgram(program)}
                  className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Know More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Program Details */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-gray-800 transition-colors backdrop-blur-md"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="h-48 sm:h-64 relative shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProgram.color} mix-blend-multiply opacity-60`}></div>
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-bold text-gray-800 mb-2">
                    {selectedProgram.age}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-heading text-white">{selectedProgram.title}</h3>
                  <p className="text-white/90 font-medium mt-1">{selectedProgram.subtitle}</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedProgram.description}
                </p>
                
                <h4 className="text-xl font-heading text-gray-900 mb-4">Key Focus Areas</h4>
                <ul className="space-y-4">
                  {selectedProgram.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className={`w-6 h-6 shrink-0 mt-0.5 ${selectedProgram.bgColor.replace('bg-', 'text-')}`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <a href="/admissions" className="btn-primary flex-1 text-center py-3">
                    Enrol Now
                  </a>
                  <button 
                    onClick={() => setSelectedProgram(null)}
                    className="btn-secondary flex-1 py-3"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Programs;
