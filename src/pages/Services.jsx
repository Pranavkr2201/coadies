
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Palette, 
  Code, 
  Shield, 
  Search,
  Smartphone,
  Database,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ServicesHeader from '@/components/services/ServicesHeader';
import MainServicesSection from '@/components/services/MainServicesSection';
import AdditionalServicesSection from '@/components/services/AdditionalServicesSection';
import WhyChooseUsSection from '@/components/services/WhyChooseUsSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const mainServicesData = [
    {
      icon: Server,
      title: 'Web Hosting',
      description: 'Lightning-fast, secure hosting solutions with 99.9% uptime guarantee and 24/7 support.',
      features: [
        'SSD Storage', 'Free SSL Certificate', 'Daily Backups', 
        '24/7 Technical Support', 'One-Click WordPress Install', 'Email Hosting Included'
      ],
      plans: [
        { name: 'Starter', price: '₹199', period: '/month', popular: false },
        { name: 'Professional', price: '₹499', period: '/month', popular: true },
        { name: 'Enterprise', price: '₹999', period: '/month', popular: false }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Modern, responsive designs that convert visitors into customers with stunning visual appeal.',
      features: [
        'Mobile-First Design', 'SEO Optimized', 'Custom Graphics', 
        'Fast Loading Speed', 'User Experience Focus', 'Brand Integration'
      ],
      plans: [
        { name: 'Basic', price: '₹15,000', period: '/project', popular: false },
        { name: 'Premium', price: '₹35,000', period: '/project', popular: true },
        { name: 'Enterprise', price: '₹75,000', period: '/project', popular: false }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with cutting-edge technologies and scalable architecture.',
      features: [
        'React/Next.js Development', 'Node.js Backend', 'Database Design', 
        'API Integration', 'Performance Optimization', 'Maintenance & Support'
      ],
      plans: [
        { name: 'Standard', price: '₹25,000', period: '/project', popular: false },
        { name: 'Advanced', price: '₹50,000', period: '/project', popular: true },
        { name: 'Custom', price: 'Quote', period: '/project', popular: false }
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const additionalServicesData = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: Shield,
      title: 'Website Security',
      description: 'Comprehensive security solutions to protect your website and data.',
      features: ['SSL Certificates', 'Malware Protection', 'Security Monitoring', 'Backup Solutions']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    }
  ];

  const testimonialsData = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      content: 'Coadies.in delivered an exceptional website that exceeded our expectations. The hosting is incredibly fast and reliable.',
      rating: 5,
      service: 'Web Development'
    },
    {
      name: 'Priya Sharma',
      company: 'Digital Marketing Pro',
      content: 'Their design team created a stunning website that perfectly represents our brand. Highly recommended!',
      rating: 5,
      service: 'Website Design'
    },
    {
      name: 'Amit Patel',
      company: 'E-commerce Plus',
      content: 'Outstanding hosting service with excellent uptime. Our online store has never been faster.',
      rating: 5,
      service: 'Web Hosting'
    }
  ];

  const whyChooseUsData = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Experienced developers and designers with proven track records'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance for all projects'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesHeader />
        <MainServicesSection services={mainServicesData} handleFeatureClick={handleFeatureClick} />
        <AdditionalServicesSection services={additionalServicesData} handleFeatureClick={handleFeatureClick} />
        <WhyChooseUsSection items={whyChooseUsData} />
        <TestimonialsSection testimonials={testimonialsData} />
        <ServicesCTA />
      </div>
    </div>
  );
};

export default Services;
