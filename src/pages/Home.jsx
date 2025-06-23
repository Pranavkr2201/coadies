import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Server, 
  Palette, 
  Code, 
  Zap, 
  Star,
  Globe,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CtaSection from '@/components/home/CtaSection';

const Home = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const services = [
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Lightning-fast, secure hosting solutions with 99.9% uptime guarantee.',
      features: ['SSD Storage', '24/7 Support', 'Free SSL', 'Daily Backups']
    },
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Modern, responsive designs that convert visitors into customers.',
      features: ['Mobile-First', 'SEO Optimized', 'Custom Design', 'Fast Loading']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js', 'Database Design', 'API Integration']
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Startup Founder',
      content: 'Coadies.in transformed our vision into a stunning website. Their hosting is incredibly fast!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Freelance Designer',
      content: 'Best hosting service I\'ve used. The support team is amazing and always helpful.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'E-commerce Owner',
      content: 'Our online store has never been faster. Highly recommend their development services!',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Top 10 Web Development Trends in 2024',
      excerpt: 'Discover the latest trends shaping the future of web development...',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development',
      image: "https://images.unsplash.com/photo-1687603827201-922149337146"
    },
    {
      title: 'How to Choose the Right Hosting Plan',
      excerpt: 'A comprehensive guide to selecting the perfect hosting solution...',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Hosting',
      image: "https://images.unsplash.com/photo-1687603827201-922149337146"
    },
    {
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'Boost your website\'s visibility with these proven SEO strategies...',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'SEO',
      image: "https://images.unsplash.com/photo-1687603827201-922149337146"
    }
  ];

  const heroData = {
    mainImage: "https://images.unsplash.com/photo-1698945298361-365595d400eb",
    floatingElements: [
      { icon: Globe, animationProps: { y: [0, -10, 0] }, position: "-top-4 -right-4", color: "bg-green-500" },
      { icon: Smartphone, animationProps: { y: [0, 10, 0] }, position: "-bottom-4 -left-4", color: "bg-blue-500" }
    ],
    stats: stats.slice(0, 2)
  };

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      <ServicesSection services={services} handleFeatureClick={handleFeatureClick} />
      <StatsSection stats={stats} />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection blogPosts={blogPosts} handleFeatureClick={handleFeatureClick} />
      <CtaSection />
    </div>
  );
};

export default Home;