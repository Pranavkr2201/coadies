import { supabase } from '@/lib/supabaseClient';

export const fetchInternships = async () => {
  const { data, error } = await supabase
    .from('internships')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

export const addInternship = async (companyFormData) => {
  let logoPath = null;
  if (companyFormData.logo) {
    const fileExt = companyFormData.logo.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `public/${fileName}`;
    const { error: uploadError } = await supabase.storage.from('internship-logos').upload(filePath, companyFormData.logo);
    if (uploadError) throw uploadError;
    const { data: publicUrlData } = supabase.storage.from('internship-logos').getPublicUrl(filePath);
    logoPath = publicUrlData.publicUrl;
  }

  const newInternshipData = {
    company_name: companyFormData.companyName,
    industry: companyFormData.industry,
    location: companyFormData.location,
    website_url: companyFormData.websiteUrl,
    description: companyFormData.description,
    contact: companyFormData.contact,
    logo_url: logoPath,
  };

  const { error } = await supabase.from('internships').insert([newInternshipData]);
  if (error) throw error;
};

export const addApplication = async (applicantFormData) => {
  let resumePath = null;
  if (applicantFormData.resume) {
    const fileExt = applicantFormData.resume.name.split('.').pop();
    const fileName = `${applicantFormData.name.replace(/\s+/g, '_')}_${Date.now()}.${fileExt}`;
    const filePath = `public/${fileName}`;
    const { error: uploadError } = await supabase.storage.from('internship-resumes').upload(filePath, applicantFormData.resume);
    if (uploadError) throw uploadError;
    const { data: publicUrlData } = supabase.storage.from('internship-resumes').getPublicUrl(filePath);
    resumePath = publicUrlData.publicUrl;
  }

  const newApplicationData = {
    name: applicantFormData.name,
    email: applicantFormData.email,
    mobile: applicantFormData.mobile,
    linkedin_url: applicantFormData.linkedin,
    cover_letter: applicantFormData.coverLetter,
    resume_url: resumePath,
    internship_id: applicantFormData.internship_id,
  };

  const { error } = await supabase.from('internship_applications').insert([newApplicationData]);
  if (error) throw error;
};