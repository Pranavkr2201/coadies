import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ListChecks, PlusCircle, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase, SUPABASE_INTEGRATION_MESSAGE } from '@/lib/supabaseClient';
import InternshipListings from '@/components/internship/InternshipListings';
import InternshipFilters from '@/components/internship/InternshipFilters';
import CompanyForm from '@/components/internship/CompanyForm';
import ApplicantFormModal from '@/components/internship/ApplicantFormModal';
import { fetchInternships as apiFetchInternships, addInternship as apiAddInternship, addApplication as apiAddApplication } from '@/services/internshipService';

const InternshipPage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    domain: '',
  });

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const loadInternships = useCallback(async () => {
    if (!supabase) {
      toast({ title: "Supabase Error", description: SUPABASE_INTEGRATION_MESSAGE, variant: "destructive" });
      setInternships([]);
      return;
    }
    setIsLoading(true);
    try {
      const data = await apiFetchInternships();
      setInternships(data || []);
    } catch (error) {
      toast({ title: "Error fetching internships", description: error.message, variant: "destructive" });
      setInternships([]);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  useEffect(() => {
    loadInternships();
  }, [loadInternships]);

  const handleCompanySubmit = async (companyFormData) => {
    if (!supabase) {
      toast({ title: "Supabase Error", description: SUPABASE_INTEGRATION_MESSAGE, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await apiAddInternship(companyFormData);
      toast({ title: "Success", description: "Internship listed successfully!" });
      loadInternships(); // Refresh the list
      return true; // Indicate success for form reset
    } catch (error) {
      toast({ title: "Error listing internship", description: error.message, variant: "destructive" });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplicantSubmit = async (applicantFormData) => {
     if (!supabase) {
      toast({ title: "Supabase Error", description: SUPABASE_INTEGRATION_MESSAGE, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await apiAddApplication({ ...applicantFormData, internship_id: selectedInternship.id });
      toast({ title: "Success", description: `Applied successfully to ${selectedInternship.company_name}!` });
      setIsApplyModalOpen(false);
      setSelectedInternship(null);
      return true; // Indicate success for form reset
    } catch (error) {
      toast({ title: "Error submitting application", description: error.message, variant: "destructive" });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const openApplyModal = (internship) => {
    setSelectedInternship(internship);
    setIsApplyModalOpen(true);
  };

  const filteredInternships = internships.filter(internship => {
    const companyName = internship.company_name || '';
    const industry = internship.industry || '';
    const description = internship.description || '';
    const location = internship.location || '';

    const matchesSearch = companyName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         industry.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                         description.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesLocation = filters.location ? location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const matchesDomain = filters.domain ? industry.toLowerCase().includes(filters.domain.toLowerCase()) : true;
    return matchesSearch && matchesLocation && matchesDomain;
  });

  const uniqueLocations = [...new Set(internships.map(i => i.location).filter(Boolean))];
  const uniqueDomains = [...new Set(internships.map(i => i.industry).filter(Boolean))];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <Briefcase className="mx-auto h-16 w-16 text-primary" />
          <h1 className="text-4xl lg:text-6xl font-bold">Internship Opportunities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with companies or find your next internship.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto mb-10">
            <TabsTrigger value="browse" className="flex items-center gap-2"><ListChecks className="h-4 w-4"/> Browse Internships</TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-2"><PlusCircle className="h-4 w-4"/> List an Internship</TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <InternshipFilters
                filters={filters}
                onFilterChange={setFilters}
                uniqueLocations={uniqueLocations}
                uniqueDomains={uniqueDomains}
              />
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              ) : (
                <InternshipListings
                  internships={filteredInternships}
                  onApplyClick={openApplyModal}
                  isSupabaseConnected={!!supabase}
                  supabaseMessage={SUPABASE_INTEGRATION_MESSAGE}
                />
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="list">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl mx-auto">
              <CompanyForm
                onSubmit={handleCompanySubmit}
                isSubmitting={isSubmitting}
                isSupabaseConnected={!!supabase}
                supabaseMessage={SUPABASE_INTEGRATION_MESSAGE}
              />
            </motion.div>
          </TabsContent>
        </Tabs>

        {selectedInternship && (
          <ApplicantFormModal
            isOpen={isApplyModalOpen}
            onOpenChange={setIsApplyModalOpen}
            internship={selectedInternship}
            onSubmit={handleApplicantSubmit}
            isSubmitting={isSubmitting}
            isSupabaseConnected={!!supabase}
            supabaseMessage={SUPABASE_INTEGRATION_MESSAGE}
          />
        )}
      </div>
    </div>
  );
};

export default InternshipPage;