import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = ({ services, handleFeatureClick }) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business thrive in the digital world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border"
            >
              <div className="space-y-6">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={handleFeatureClick}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;