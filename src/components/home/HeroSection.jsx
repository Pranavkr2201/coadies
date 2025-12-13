import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ mainImage, floatingElements, stats }) => {
  return (
    <section className="relative overflow-hidden hero-gradient tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                <Zap className="h-4 w-4 mr-2" />
                Professional Web Solutions
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Build Your Digital
                <span className="gradient-text block">Presence Today</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional web hosting, stunning website design, and powerful development services 
                for developers, freelancers, and growing startups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl animate-float" 
                alt="Modern web development workspace with multiple screens showing code and designs"
                src={mainImage} />
            </div>
            
            {floatingElements.map((el, index) => (
              <motion.div
                key={index}
                animate={el.animationProps}
                transition={{ duration: 3 + index, repeat: Infinity }}
                className={`absolute ${el.position} ${el.color} text-white p-4 rounded-xl shadow-lg`}
              >
                <el.icon className="h-6 w-6" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;