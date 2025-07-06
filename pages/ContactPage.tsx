
import React, { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Your message has been sent. We will get back to you shortly.');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-300">
            Ready to build the future? We'd love to hear about your project. Fill out the form below or reach out to us directly.
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-5 gap-12">
          <AnimatedElement className="md:col-span-3">
            <div className="bg-charcoal p-8 rounded-xl border border-slate-800">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-plasma-violet focus:outline-none transition" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-plasma-violet focus:outline-none transition" />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company (Optional)</label>
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-plasma-violet focus:outline-none transition" />
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-plasma-violet focus:outline-none transition"></textarea>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-plasma-violet text-white font-bold py-3 px-8 rounded-lg hover:bg-plasma-violet-dark transition-all duration-300 shadow-lg shadow-plasma-violet/20 hover:shadow-plasma-violet/40">
                    Send Message
                  </button>
                </div>
                {status && <p className="mt-4 text-center text-slate-300">{status}</p>}
              </form>
            </div>
          </AnimatedElement>
          <AnimatedElement delay="delay-200" className="md:col-span-2 space-y-8">
            <div className="bg-charcoal p-8 rounded-xl border border-slate-800">
              <h3 className="text-xl font-display font-semibold text-white mb-4">Contact Details</h3>
              <div className="space-y-3 text-slate-300">
                <p><strong>Email:</strong><br/><a href="mailto:contact@folvix.com" className="text-plasma-violet hover:underline">contact@folvix.com</a></p>
                <p><strong>Address:</strong><br/>123 Innovation Drive,<br/>Tech City, TX 75001, USA</p>
              </div>
            </div>
            <div className="bg-charcoal p-8 rounded-xl border border-slate-800">
              <h3 className="text-xl font-display font-semibold text-white mb-4">Our Commitment</h3>
              <p className="text-slate-400">We are dedicated to providing responsive and transparent communication. Your vision is our priority, and we look forward to discussing how we can bring it to life.</p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
