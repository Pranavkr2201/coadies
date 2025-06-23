
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const AboutTeam = ({ teamMembers }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
      <p className="text-xl text-muted-foreground">
        The talented people behind Coadies.in
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border text-center"
        >
          <div className="space-y-4">
            <img  
              className="w-24 h-24 rounded-full mx-auto object-cover" 
              alt={`${member.name} - ${member.role} at Coadies.in`}
              src={member.image} />
            
            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.expertise}</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium">{member.experience}</span>
              </div>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default AboutTeam;
