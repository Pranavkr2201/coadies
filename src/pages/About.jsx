import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Code,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import AboutHeader from '@/components/about/AboutHeader';
import AboutHeroImage from '@/components/about/AboutHeroImage';
import AboutStats from '@/components/about/AboutStats';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutTechnologies from '@/components/about/AboutTechnologies';
import AboutCTA from '@/components/about/AboutCTA';

const About = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const statsData = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Code },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const valuesData = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to helping businesses succeed in the digital world with innovative solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We build lasting relationships through exceptional service.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions for our clients.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized expertise.'
    }
  ];

  const teamData = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      expertise: 'Full-Stack Development',
      experience: '8+ years',
      description: 'Passionate about creating scalable web solutions and leading innovative projects.',
      image: "https://images.unsplash.com/photo-1657663119025-71c8cd9d6539"
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Designer',
      expertise: 'UI/UX Design',
      experience: '6+ years',
      description: 'Specializes in creating beautiful, user-friendly interfaces that convert.',
      image: "https://images.unsplash.com/photo-1657663119025-71c8cd9d6539"
    },
    {
      name: 'Amit Patel',
      role: 'DevOps Engineer',
      expertise: 'Cloud Infrastructure',
      experience: '7+ years',
      description: 'Ensures our hosting infrastructure is fast, secure, and always available.',
      image: "https://images.unsplash.com/photo-1657663119025-71c8cd9d6539"
    },
    {
      name: 'Sneha Gupta',
      role: 'Marketing Head',
      expertise: 'Digital Marketing',
      experience: '5+ years',
      description: 'Helps businesses grow their online presence through strategic marketing.',
      image: "https://images.unsplash.com/photo-1657663119025-71c8cd9d6539"
    }
  ];

  const milestonesData = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to democratize web development for small businesses.'
    },
    {
      year: '2020',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone during the challenging pandemic year.'
    },
    {
      year: '2021',
      title: 'Service Expansion',
      description: 'Added mobile app development and advanced hosting solutions.'
    },
    {
      year: '2022',
      title: 'International Growth',
      description: 'Expanded services globally with clients across multiple countries.'
    },
    {
      year: '2023',
      title: '500+ Projects',
      description: 'Completed over 500 successful projects with 99% client satisfaction.'
    },
    {
      year: '2024',
      title: 'Innovation Focus',
      description: 'Launched AI-powered development tools and advanced security features.'
    }
  ];

  const technologiesData = [
    'React', 'Next.js', 'Node.js', 'Python', 'PHP', 'WordPress',
    'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeader />
        <AboutHeroImage src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" alt="Coadies.in team working together" />
        <AboutStats stats={statsData} />
        <AboutStory 
          handleFeatureClick={handleFeatureClick} 
          imageSrc="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" 
          imageAlt="Coadies.in founders" 
        />
        <AboutValues values={valuesData} />
        <AboutTeam teamMembers={teamData} />
        <AboutTimeline milestones={milestonesData} />
        <AboutTechnologies technologies={technologiesData} />
        <AboutCTA />
      </div>
    </div>
  );
};

export default About;
