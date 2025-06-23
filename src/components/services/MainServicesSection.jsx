
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const MainServicesSection = ({ services, handleFeatureClick }) => (
  <div className="space-y-20">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="space-y-6">
            <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
              <service.icon className="h-8 w-8" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
              <p className="text-lg text-muted-foreground">{service.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button onClick={handleFeatureClick} size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Pricing Plans</h3>
            <div className="space-y-4">
              {service.plans.map((plan, planIdx) => (
                <div
                  key={planIdx}
                  className={`p-4 rounded-lg border transition-all ${
                    plan.popular
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{plan.name}</h4>
                        {plan.popular && (
                          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {plan.price}
                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>
                    <Button 
                      variant={plan.popular ? 'default' : 'outline'} 
                      size="sm"
                      onClick={handleFeatureClick}
                    >
                      Choose Plan
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default MainServicesSection;
