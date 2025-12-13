import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

const initialFormState = {
  name: '',
  email: '',
  mobile: '',
  resume: null,
  linkedin: '',
  coverLetter: '',
};

const ApplicantFormModal = ({ isOpen, onOpenChange, internship, onSubmit, isSubmitting, isSupabaseConnected, supabaseMessage }) => {
  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormState(prev => ({ ...prev, resume: files[0] }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.mobile || !formState.resume || !formState.coverLetter) {
      alert("Please fill all required fields and upload resume.");
      return;
    }
    const success = await onSubmit(formState);
    if (success) {
      setFormState(initialFormState); // Reset form on successful submission
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Apply for Internship at {internship?.company_name}</DialogTitle>
          <DialogDescription>
            Fill in your details to apply for the internship.
            {!isSupabaseConnected && <p className="text-red-500 text-sm mt-2">{supabaseMessage}</p>}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <Label htmlFor="applicantName">Full Name *</Label>
            <Input id="applicantName" name="name" value={formState.name} onChange={handleInputChange} placeholder="Your Full Name" required />
          </div>
          <div>
            <Label htmlFor="applicantEmail">Email Address *</Label>
            <Input id="applicantEmail" name="email" type="email" value={formState.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
          </div>
          <div>
            <Label htmlFor="applicantMobile">Mobile Number *</Label>
            <Input id="applicantMobile" name="mobile" type="tel" value={formState.mobile} onChange={handleInputChange} placeholder="+91 98765 43210" required />
          </div>
          <div>
            <Label htmlFor="resume">Resume (PDF, DOC, DOCX) *</Label>
            <Input id="resume" name="resume" type="file" onChange={handleInputChange} accept=".pdf,.doc,.docx" required />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input id="linkedin" name="linkedin" type="url" value={formState.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" />
          </div>
          <div>
            <Label htmlFor="coverLetter">Short Cover Letter or Message *</Label>
            <Textarea id="coverLetter" name="coverLetter" value={formState.coverLetter} onChange={handleInputChange} placeholder="Why are you interested in this internship?" required rows={4} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="group" disabled={isSubmitting || !isSupabaseConnected}>
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              Submit Application
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicantFormModal;