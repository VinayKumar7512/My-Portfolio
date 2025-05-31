import React, { useRef, useEffect } from 'react';
import useInView from '../hooks/useInView';
import { Award } from 'lucide-react';

const Certifications = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        cardsRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
    }
  }, [isInView]);

  const certifications = [
    {
      title: "AICTE Full Stack Development Virtual Internship",
      link: "https://drive.google.com/file/d/1hsFgsly8AXf81rBME1sKp8Nfv8XcbMX9/view",
      description: "Comprehensive training in full-stack development technologies and best practices"
    },
    {
      title: "Introduction to Generative AI (Microsoft Learn)",
      link: "https://drive.google.com/file/d/10IYvD53SlbYpQPYjAyvGYAH0gQ-Ar6u1/view",
      description: "Understanding the fundamentals of Generative AI and its applications"
    },
    {
      title: "English Communication Skills (Pearson MePro)",
      link: "https://drive.google.com/file/d/1hENFJmps5WB4JTFT5AQKTowg7T_jMrIv/view",
      description: "Professional English communication and business writing skills"
    }
  ];

  return (
    <section 
      id="certifications" 
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
          Certifications
        </h2>
        
        <div 
          ref={cardsRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-200"
        >
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-900 hover:bg-gray-800' 
                  : 'bg-gray-50 hover:bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <Award className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {cert.title}
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {cert.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 