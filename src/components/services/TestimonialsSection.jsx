
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-32"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold">Client Success Stories</h2>
      <p className="text-xl text-muted-foreground">
        See what our clients say about our services
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="bg-card rounded-2xl p-6 shadow-lg border border-border"
        >
          <div className="space-y-4">
            <div className="flex space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-muted-foreground italic">"{testimonial.content}"</p>
            
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              <div className="text-xs text-primary font-medium mt-1">{testimonial.service}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TestimonialsSection;
