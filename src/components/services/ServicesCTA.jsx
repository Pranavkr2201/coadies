
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-32 bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-primary-foreground"
  >
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl lg:text-5xl font-bold">Ready to Get Started?</h2>
      <p className="text-xl opacity-90">
        Let's discuss your project and find the perfect solution for your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary" className="group">
          <a href="/contact">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
          <a href="/contact">Get Free Quote</a>
        </Button>
      </div>
    </div>
  </motion.div>
);

export default ServicesCTA;
