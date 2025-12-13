
import React from 'react';
import { motion } from 'framer-motion';

const ContactFAQ = ({ faqs }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-muted/30 rounded-3xl p-12"
  >
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
      <p className="text-muted-foreground">
        Quick answers to common questions about our services
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-semibold text-lg">{faq.question}</h3>
          <p className="text-muted-foreground">{faq.answer}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ContactFAQ;
