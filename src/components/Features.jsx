import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
      title: "Safe & Stimulating",
      description: "Learning Spaces designed thoughtfully with child-safe corners to create the perfect environment.",
      color: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: <FaUsers className="w-8 h-8 text-secondary" />,
      title: "Small Groups",
      description: "Personalized care and attention ensuring every milestone shines brightly for your child.",
      color: "bg-secondary/10",
      borderColor: "border-secondary/20"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-accent" />,
      title: "Expert Educators",
      description: "Expertly trained educators nurturing individual growth through personalized attention.",
      color: "bg-accent/10",
      borderColor: "border-accent/20"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-playful-pink" />,
      title: "Parent Involvement",
      description: "Structured parent involvement making the learning journey a collaborative success.",
      color: "bg-playful-pink/10",
      borderColor: "border-playful-pink/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-gray-900 mb-4"
          >
            Why Families <span className="text-primary">Trust Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A trusted space where every milestone shines. We provide a foundation for your child's lifelong journey of learning and discovery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border ${feature.borderColor} bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
