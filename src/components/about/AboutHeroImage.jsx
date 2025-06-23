
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroImage = ({ src, alt }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
    className="mb-20"
  >
    <img  
      className="w-full h-64 lg:h-96 object-cover rounded-3xl shadow-2xl" 
      alt={alt}
      src={src} />
  </motion.div>
);

export default AboutHeroImage;
