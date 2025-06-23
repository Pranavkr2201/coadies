
import React from 'react';
import { motion } from 'framer-motion';

const AboutStats = ({ stats }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-xl">
            <stat.icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AboutStats;
