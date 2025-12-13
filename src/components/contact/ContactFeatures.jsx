
import React from 'react';
import { motion } from 'framer-motion';

const ContactFeatures = ({ features }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold">Why Contact Us?</h2>
      <p className="text-muted-foreground">
        We're here to help you succeed with professional support and expertise
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex p-4 bg-primary/10 rounded-xl">
            <feature.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ContactFeatures;
