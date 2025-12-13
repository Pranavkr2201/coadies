import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Globe, Mail, Phone, Send, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InternshipCard = ({ internship, onApplyClick, isSupabaseConnected }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border flex flex-col justify-between"
  >
    <div>
      <div className="flex items-start space-x-4 mb-4">
        {internship.logo_url ? (
          <img src={internship.logo_url} alt={`${internship.company_name} logo`} className="h-16 w-16 rounded-lg object-contain border border-border p-1" />
        ) : (
          <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
            <Building className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        <div>
          <h2 className="text-xl font-bold text-primary">{internship.company_name}</h2>
          <p className="text-sm text-muted-foreground">{internship.industry}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-1 line-clamp-3 flex items-center">
        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" /> {internship.location}
      </p>
      {internship.website_url && (
        <a href={internship.website_url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline mb-3 flex items-center break-all">
          <Globe className="h-4 w-4 mr-2 flex-shrink-0" /> {internship.website_url}
        </a>
      )}
      <p className="text-sm text-muted-foreground mt-2 mb-4 line-clamp-4">{internship.description}</p>
      <p className="text-sm text-muted-foreground mb-1 flex items-center">
        {internship.contact && internship.contact.includes('@') ? <Mail className="h-4 w-4 mr-2 flex-shrink-0" /> : <Phone className="h-4 w-4 mr-2 flex-shrink-0" />}
        {internship.contact}
      </p>
    </div>
    <Button onClick={() => onApplyClick(internship)} className="w-full mt-4 group" disabled={!isSupabaseConnected}>
      Apply Now <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </motion.div>
);

const InternshipListings = ({ internships, onApplyClick, isSupabaseConnected, supabaseMessage }) => {
  if (internships.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((internship) => (
          <InternshipCard key={internship.id} internship={internship} onApplyClick={onApplyClick} isSupabaseConnected={isSupabaseConnected} />
        ))}
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <Briefcase className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
      <p className="text-xl text-muted-foreground">No internships match your criteria or Supabase is not connected.</p>
      {!isSupabaseConnected && <p className="text-red-500 text-sm mt-2">{supabaseMessage}</p>}
    </div>
  );
};

export default InternshipListings;