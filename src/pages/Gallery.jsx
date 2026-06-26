import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop', alt: 'Kids learning together', category: 'Classroom' },
    { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop', alt: 'Playing blocks', category: 'Activities' },
    { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2000&auto=format&fit=crop', alt: 'Art class', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop', alt: 'Reading books', category: 'Learning' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop', alt: 'Outdoor play', category: 'Activities' },
    { src: 'https://images.unsplash.com/photo-1514059489585-61882ea2e88e?q=80&w=2000&auto=format&fit=crop', alt: 'Drawing and colors', category: 'Classroom' },
    { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2000&auto=format&fit=crop', alt: 'Happy kids', category: 'Events' },
    { src: 'https://images.unsplash.com/photo-1531325082793-cb7ac9ea0aa4?q=80&w=2000&auto=format&fit=crop', alt: 'Toddlers playing', category: 'Learning' },
    { src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2000&auto=format&fit=crop', alt: 'Group activities', category: 'Activities' }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Memories</span>
          <h1 className="text-4xl md:text-5xl font-heading text-gray-900 mt-2 mb-6">Joyful <span className="text-accent">Moments</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Take a glimpse into the vibrant life at Nirmaniix-School, where learning meets joy every single day.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{image.category}</span>
                <h3 className="text-white font-heading text-lg">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl z-10"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 z-20 w-10 h-10 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
              
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
