
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center space-y-4 mb-16"
  >
    <h1 className="text-4xl lg:text-6xl font-bold">Get in Touch</h1>
    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      Ready to start your project? Let's discuss your requirements and create something amazing together.
    </p>
  </motion.div>
);

export default ContactHeader;
