
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AdditionalServicesSection = ({ services, handleFeatureClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-32"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold">Additional Services</h2>
      <p className="text-xl text-muted-foreground">
        Expand your digital presence with our specialized services
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border"
        >
          <div className="space-y-4">
            <div className="inline-flex p-3 bg-primary/10 rounded-xl">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>

            <ul className="space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-xs">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" size="sm" className="w-full" onClick={handleFeatureClick}>
              Learn More
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AdditionalServicesSection;
