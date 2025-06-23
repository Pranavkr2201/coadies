import React, { useState } from 'react';
import { PlusCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialFormState = {
  companyName: '',
  industry: '',
  location: '',
  websiteUrl: '',
  description: '',
  contact: '',
  logo: null,
};

const CompanyForm = ({ onSubmit, isSubmitting, isSupabaseConnected, supabaseMessage }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setFormState(prev => ({ ...prev, logo: files[0] }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.companyName || !formState.industry || !formState.location || !formState.description || !formState.contact) {
      alert("Please fill all required company fields.");
      return;
    }
    const success = await onSubmit(formState);
    if (success) {
      setFormState(initialFormState); // Reset form on successful submission
    }
  };

  return (
    <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
      <h2 className="text-2xl font-bold mb-6 text-center">List Your Company for Internships</h2>
      {!isSupabaseConnected && <p className="text-red-500 text-sm text-center mb-4">{supabaseMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" name="companyName" value={formState.companyName} onChange={handleInputChange} placeholder="Your Company Inc." required />
        </div>
        <div>
          <Label htmlFor="industry">Industry/Domain *</Label>
          <Input id="industry" name="industry" value={formState.industry} onChange={handleInputChange} placeholder="e.g., Software Development, Marketing" required />
        </div>
        <div>
          <Label htmlFor="location">Location *</Label>
          <Input id="location" name="location" value={formState.location} onChange={handleInputChange} placeholder="City, Country" required />
        </div>
        <div>
          <Label htmlFor="websiteUrl">Website URL</Label>
          <Input id="websiteUrl" name="websiteUrl" type="url" value={formState.websiteUrl} onChange={handleInputChange} placeholder="https://yourcompany.com" />
        </div>
        <div>
          <Label htmlFor="description">Description *</Label>
          <Textarea id="description" name="description" value={formState.description} onChange={handleInputChange} placeholder="Briefly describe your company and internship roles." required rows={4} />
        </div>
        <div>
          <Label htmlFor="contact">Contact Email or Phone *</Label>
          <Input id="contact" name="contact" value={formState.contact} onChange={handleInputChange} placeholder="careers@yourcompany.com or +91..." required />
        </div>
        <div>
          <Label htmlFor="logo">Company Logo (Optional)</Label>
          <Input id="logo" name="logo" type="file" onChange={handleInputChange} accept="image/*" />
        </div>
        <Button type="submit" className="w-full group" disabled={isSubmitting || !isSupabaseConnected}>
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlusCircle className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />}
          List Internship
        </Button>
      </form>
    </div>
  );
};

export default CompanyForm;