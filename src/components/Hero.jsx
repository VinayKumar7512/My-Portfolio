import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = ({ theme }) => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef =useRef(null);

  useEffect(() => {
    // Animate elements in sequence
    const animateElements = () => {
      if (nameRef.current) {
        nameRef.current.classList.add('opacity-100', 'translate-y-0');
      }
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 300);
      setTimeout(() => {
        if (descRef.current) {
          descRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 600);
      setTimeout(() => {
        if (socialRef.current) {
          socialRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 900);
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 1200);
    };

    animateElements();
  }, []);

  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-16 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div 
        className="absolute inset-0 overflow-hidden z-0"
        style={{ 
          background: theme === 'dark' 
            ? 'radial-gradient(circle at 20% 30%, #1e3a8a55 0%, transparent 40%), radial-gradient(circle at 80% 70%, #0369a155 0%, transparent 30%)' 
            : 'radial-gradient(circle at 20% 30%, #dbeafe 0%, transparent 40%), radial-gradient(circle at 80% 70%, #eff6ff 0%, transparent 30%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <span 
            ref={nameRef}
            className="text-lg md:text-xl font-medium inline-block mb-2 opacity-0 -translate-y-4 transition-all duration-700 ease-out text-blue-500"
          >
            Hello, I'm
          </span>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-100"
          >
            <span className="block">Vinay Kumar Bathula</span>
            <span className={`block mt-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Full Stack Developer
            </span>
          </h1>
          
          <p 
            ref={descRef}
            className={`text-lg md:text-xl max-w-2xl mb-8 opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            I'm a passionate Full Stack Developer and DSA Problem Solver, specializing in building
            modern web applications with cutting-edge technologies. Let's create something amazing together.
          </p>
          
          <div 
            ref={socialRef}
            className="flex space-x-6 mb-12 opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-300"
          >
            <a 
              href="https://github.com/VinayKumar7512" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform hover:-translate-y-1 hover:text-blue-500 transition-all ${
                theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'
              }`}
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vinay-bathula75" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform hover:-translate-y-1 hover:text-blue-500 transition-all ${
                theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:bathulavinaykumar75@gmail.com" 
              className={`transform hover:-translate-y-1 hover:text-blue-500 transition-all ${
                theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'
              }`}
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div 
            ref={ctaRef}
            className="opacity-0 -translate-y-4 transition-all duration-700 ease-out delay-400"
          >
            <a 
              href="#about" 
              className={`flex items-center justify-center w-10 h-10 mx-auto rounded-full animate-bounce mt-20 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              aria-label="Scroll down"
            >
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;