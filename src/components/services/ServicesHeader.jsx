
import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center space-y-4 mb-16"
  >
    <h1 className="text-4xl lg:text-6xl font-bold">Our Services</h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      Comprehensive web solutions designed to help your business thrive in the digital world. 
      From hosting to development, we've got you covered.
    </p>
  </motion.div>
);

export default ServicesHeader;
