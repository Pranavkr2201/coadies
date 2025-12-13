
import React from 'react';
import { motion } from 'framer-motion';

const AboutValues = ({ values }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
      <p className="text-xl text-muted-foreground">
        The principles that guide everything we do
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border text-center"
        >
          <div className="space-y-4">
            <div className="inline-flex p-4 bg-primary/10 rounded-xl">
              <value.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AboutValues;
