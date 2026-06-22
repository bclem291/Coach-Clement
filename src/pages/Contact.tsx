import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Coach Clement,

I would like to make an enquiry.

Full Name: ${formData.name}

Phone Number: ${formData.phone}

Email Address: ${formData.email}

Course Interested In: ${formData.course}

Message:
${formData.message}

Please contact me. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2347033325827?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({ name: '', phone: '', email: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    { q: 'How do I enroll in a training?', a: 'You can enroll by selecting a course in the Training page, or by contacting us directly via WhatsApp for swift registration details.' },
    { q: 'Are all trainings online?', a: 'Yes, our courses are perfectly structured for online learning. You can learn from anywhere using just your smartphone or laptop.' },
    { q: 'Will I receive support after training?', a: 'Absolutely. We pride ourselves on providing ongoing support and mentorship to ensure you successfully apply what you learn.' },
    { q: 'Can beginners join?', a: 'Definitely! Most of our courses are designed specifically with beginners in mind, taking you step-by-step to mastery.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#0A2342] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Contact <span className="text-[#4DA6FF]">Coach Clement</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your future? Reach out today to start your digital skill journey.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & direct channels */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-8 font-medium">Need Help Choosing a Course? Chat with Coach Clement on WhatsApp. All enquiries should be directed to WhatsApp for faster response.</p>
              
              <div className="space-y-6 mb-12">
                <a href="https://wa.me/2347033325827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-2xl bg-green-50 border border-green-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp Phone: 07033325827</h3>
                    <p className="text-green-700 font-medium">Chat with Coach Clement (Primary Contact)</p>
                  </div>
                </a>

                <a href="mailto:bclem291@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-[#4DA6FF] rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email Support</h3>
                    <p className="text-blue-700 font-medium">bclem291@gmail.com</p>
                  </div>
                </a>

                {/* Map Placeholder */}
                <div className="rounded-2xl border flex items-center justify-center border-gray-200 bg-gray-100 h-64 relative overflow-hidden">
                   <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                      <MapPin className="h-10 w-10 mb-3 text-gray-400" />
                      <span className="font-medium">Google Map Placeholder</span>
                      <span className="text-sm">Lagos, Nigeria</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0A2342] rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DA6FF] rounded-bl-full opacity-10" />
              <h2 className="text-2xl font-bold text-white mb-2 relative z-10">Send a Message</h2>
              <p className="text-gray-400 mb-8 relative z-10">Fill out the form below. It will automatically be sent to Coach Clement on WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#11315c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#11315c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      placeholder="+234 XXX XXXX"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#11315c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Course Interested In</label>
                  <select 
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-[#11315c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] appearance-none"
                  >
                    <option value="" disabled>Select a Training Program...</option>
                    <option value="Smartphone Graphics Design">Smartphone Graphics Design</option>
                    <option value="Ebook Creation & Publishing">Ebook Creation & Publishing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Facebook Ads Training">Facebook Ads Training</option>
                    <option value="Affiliate Marketing">Affiliate Marketing</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#11315c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#1fad53] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4"
                >
                  <Send className="h-5 w-5" /> Submit to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to questions you may have.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2342] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
