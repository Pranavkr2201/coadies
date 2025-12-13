
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';

const AboutStory = ({ handleFeatureClick, imageSrc, imageAlt }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Coadies.in was born from a simple belief: every business deserves a powerful 
            online presence, regardless of size or budget. Founded in 2019 by a team of 
            experienced developers and designers, we set out to democratize web development 
            and hosting services.
          </p>
          <p>
            What started as a small team working from a garage has grown into a thriving 
            company serving clients worldwide. We've maintained our core values of quality, 
            innovation, and customer satisfaction while scaling our operations to meet 
            growing demand.
          </p>
          <p>
            Today, we're proud to be a trusted partner for hundreds of businesses, from 
            startups to established enterprises, helping them achieve their digital goals 
            with cutting-edge technology and personalized service.
          </p>
        </div>
        <Button onClick={handleFeatureClick} size="lg" className="group">
          Learn More About Our Journey
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      <div className="relative">
        <img  
          className="w-full h-80 object-cover rounded-2xl shadow-lg" 
          alt={imageAlt}
          src={imageSrc} />
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg"
        >
          <TrendingUp className="h-6 w-6" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default AboutStory;
