
import React from 'react';
import { motion } from 'framer-motion';

const AboutTimeline = ({ milestones }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
      <p className="text-xl text-muted-foreground">
        Key milestones in our company's growth
      </p>
    </div>

    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block" />
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } flex-col lg:space-x-8 space-y-4 lg:space-y-0`}
          >
            <div className="flex-1 lg:text-right text-center">
              <div className={`bg-card rounded-2xl p-6 shadow-lg border border-border ${
                index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
              }`}>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block" />
            
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default AboutTimeline;
