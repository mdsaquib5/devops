import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  purpose: string;
  agreed: boolean;
}

interface UseContactFormReturn {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    purpose: '',
    agreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      purpose: '',
      agreed: false,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // ===============================
      // 1️⃣ SAVE LEAD TO CLOUDFARE D1 (FIRST)
      // ===============================
      try {
        const d1Response = await fetch('https://leads-api.fza884.workers.dev', {
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json',
            'X-Source': 'switchtodevops',
          },
          body: JSON.stringify({
            name: formData.name,
            whatsapp: `${formData.countryCode}${formData.phone}`,
          }),
        });

        const d1Result = await d1Response.json();
        console.log('D1 RESULT:', d1Result);
      } catch (d1Error) {
        console.error('❌ D1 Worker error:', d1Error);
      }

      // ===============================
      // 2️⃣ SEND EMAIL VIA CLOUDFLARE WORKER
      // ===============================
      try {
        const cloudflareResponse = await fetch('https://email-sd.fza884.workers.dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            mobile: `${formData.countryCode}${formData.phone}`,
            email: formData.email,
            course: 'Complete DevOps & AWS Cloud Certification Training'
          }),
        });

        const result = await cloudflareResponse.json();
        if (result.success) {
          console.log('✅ Email notification sent:', result.enrollmentId);
        } else {
          console.error('⚠️ Email notification failed:', result.message);
        }
      } catch (cloudflareError) {
        console.error('⚠️ Cloudflare Worker error:', cloudflareError);
      }

      // Track form submission in GTM
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'form_submit' });
      }

      alert('Thank you! We will contact you shortly.');
      
      // Reset form
      resetForm();
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  };
};
