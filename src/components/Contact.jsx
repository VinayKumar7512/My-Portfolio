import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import useInView from '../hooks/useInView';

const Contact = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        infoRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
      setTimeout(() => {
        formRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 400);
    }
  }, [isInView]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold mb-16 text-center opacity-0 -translate-y-6 transition-all duration-700 ease-out ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div 
            ref={infoRef}
            className={`${
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            } p-8 rounded-2xl shadow-lg opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-200`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <MapPin className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Location</h4>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Hyderabad, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Phone className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Phone</h4>
                  <a 
                    href="tel:+917396153478" 
                    className={`${
                      theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    } transition-colors duration-300`}
                  >
                    +91 7396153478
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Mail className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Email</h4>
                  <a 
                    href="mailto:bathulavinaykumar75@gmail.com" 
                    className={`${
                      theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    } transition-colors duration-300`}
                  >
                    bathulavinaykumar75@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/VinayKumar7512" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-800 hover:bg-blue-900 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600'
                  }`}
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/vinay-bathula75" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    theme === 'dark' ? 'bg-gray-800 hover:bg-blue-900 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-blue-100 text-gray-700 hover:text-blue-600'
                  }`}
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Certifications</h4>
              <div className="space-y-4">
                <a 
                  href="https://drive.google.com/file/d/1hsFgsly8AXf81rBME1sKp8Nfv8XcbMX9/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block hover:underline ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  AICTE Full Stack Development Virtual Internship
                </a>
                <a 
                  href="https://drive.google.com/file/d/10IYvD53SlbYpQPYjAyvGYAH0gQ-Ar6u1/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block hover:underline ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Introduction to Generative AI (Microsoft Learn)
                </a>
                <a 
                  href="https://drive.google.com/file/d/1hENFJmps5WB4JTFT5AQKTowg7T_jMrIv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block hover:underline ${
                    theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  English Communication Skills (Pearson MePro)
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef}
            className="opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-400"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-400'
                  }`}
                  placeholder="Name"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-400'
                  }`}
                  placeholder="example@gmail.com"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-400'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg outline-none focus:ring-2 transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-900 border border-gray-700 text-white focus:ring-blue-500' 
                      : 'bg-white border border-gray-300 text-gray-900 focus:ring-blue-400'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-800 rounded-lg">
                  Thank you for your message! Please use the contact information above to get in touch directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;