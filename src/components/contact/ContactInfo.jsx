
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ContactInfo = ({ contactInfoItems, onLiveChatClick }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    className="space-y-8"
  >
    <div className="space-y-4">
      {contactInfoItems.map((info, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-6 shadow-lg border border-border"
        >
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <info.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{info.title}</h3>
              <p className="text-primary font-medium">{info.content}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MessageCircle className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Need Instant Help?</h3>
        </div>
        <p className="text-green-100">
          Chat with our support team for immediate assistance with your questions.
        </p>
        <Button 
          variant="secondary" 
          size="sm" 
          className="w-full"
          onClick={onLiveChatClick}
        >
          Start Live Chat
        </Button>
      </div>
    </div>
  </motion.div>
);

export default ContactInfo;
