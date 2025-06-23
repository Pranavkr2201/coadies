
import React from 'react';
import { motion } from 'framer-motion';

const AboutTechnologies = ({ technologies }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20 bg-muted/30 rounded-3xl p-12"
  >
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold">Technologies We Use</h2>
      <p className="text-xl text-muted-foreground">
        Cutting-edge tools and frameworks for modern web development
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="bg-card px-6 py-3 rounded-full border border-border shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="font-medium">{tech}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AboutTechnologies;
