
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-32 bg-muted/30 rounded-3xl p-12"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold">Why Choose Coadies.in?</h2>
      <p className="text-xl text-muted-foreground">
        We're committed to delivering exceptional results for every project
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-xl">
            <item.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default WhyChooseUsSection;
