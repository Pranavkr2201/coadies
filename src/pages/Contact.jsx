
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Globe,
  Users,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFeatures from '@/components/contact/ContactFeatures';
import ContactFAQ from '@/components/contact/ContactFAQ';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    projectType: 'new'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('contact-submissions') || '[]');
    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    submissions.push(newSubmission);
    localStorage.setItem('contact-submissions', JSON.stringify(submissions));

    toast({
      title: "Message sent successfully! 🎉",
      description: "We'll get back to you within 24 hours. Thank you for choosing Coadies.in!"
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      projectType: 'new'
    });
  };

  const contactInfoData = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@coadies.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'India',
      description: 'Remote-first company'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday'
    }
  ];

  const servicesData = [
    'Web Hosting', 'Website Design', 'Web Development', 'SEO Optimization',
    'Mobile App Development', 'E-commerce Solutions', 'Digital Marketing', 'Other'
  ];

  const budgetRangesData = [
    'Under ₹10,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000', 'Above ₹1,00,000', 'Let\'s discuss'
  ];

  const featuresData = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 2 hours during business hours'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Get advice from our experienced developers and designers'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve clients worldwide with 24/7 support'
    }
  ];

  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "Typically 2-4 weeks for a standard website, depending on complexity and requirements."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support and maintenance packages for all our hosting and development services."
    },
    {
      question: "Can you help with SEO optimization?",
      answer: "Absolutely! We include basic SEO optimization in all our websites and offer advanced SEO services."
    },
    {
      question: "What's included in hosting plans?",
      answer: "All plans include SSD storage, SSL certificates, daily backups, and 24/7 technical support."
    }
  ];

  const handleLiveChatClick = () => {
    toast({
      title: "🚧 Live chat isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            services={servicesData}
            budgetRanges={budgetRangesData}
          />
          <ContactInfo 
            contactInfoItems={contactInfoData} 
            onLiveChatClick={handleLiveChatClick} 
          />
        </div>

        <ContactFeatures features={featuresData} />
        <ContactFAQ faqs={faqData} />
      </div>
    </div>
  );
};

export default Contact;
