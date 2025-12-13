
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ContactForm = ({ formData, handleInputChange, handleSubmit, services, budgetRanges }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
    className="lg:col-span-2"
  >
    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Project Type</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="projectType"
                  value="new"
                  checked={formData.projectType === 'new'}
                  onChange={handleInputChange}
                  className="text-primary focus:ring-primary"
                />
                <span>New Project</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="projectType"
                  value="existing"
                  checked={formData.projectType === 'existing'}
                  onChange={handleInputChange}
                  className="text-primary focus:ring-primary"
                />
                <span>Existing Project</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full group">
            Send Message
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  </motion.div>
);

export default ContactForm;
