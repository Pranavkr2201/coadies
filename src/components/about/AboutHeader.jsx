
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center space-y-6 mb-20"
  >
    <h1 className="text-4xl lg:text-6xl font-bold">About Coadies.in</h1>
    <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
      We're a passionate team of developers, designers, and digital strategists dedicated to 
      helping businesses thrive in the digital world. Since 2019, we've been building 
      exceptional web solutions that drive growth and success.
    </p>
  </motion.div>
);

export default AboutHeader;
