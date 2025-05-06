import React, { useEffect, useRef } from 'react';
import useInView from '../hooks/useInView';

const About = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        contentRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
      setTimeout(() => {
        imageRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 400);
    }
  }, [isInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 -translate-y-6 transition-all duration-700 ease-out ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            ref={contentRef}
            className="md:w-1/2 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-200"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Who I Am
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm Vinay Kumar Bathula, a passionate Full Stack Developer and DSA Problem Solver. With a strong foundation
              in both frontend and backend technologies, I specialize in creating robust and scalable web applications
              using modern tech stacks like MERN (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              My expertise spans across multiple programming languages and frameworks, including Python, Java, JavaScript,
              and React.js. I'm particularly enthusiastic about solving complex problems through Data Structures and
              Algorithms, and I apply these problem-solving skills in creating efficient software solutions.
            </p>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm certified in Full Stack Development through AICTE and have completed certifications in Generative AI
              from Microsoft Learn, showcasing my commitment to staying current with emerging technologies.
            </p>
            
            <a 
              href="#contact" 
              className={`inline-block px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Let's Connect
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className="md:w-1/2 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-400"
          >
            <div className={`relative overflow-hidden rounded-lg shadow-xl ${
              theme === 'dark' ? 'shadow-blue-500/10' : 'shadow-blue-500/20'
            }`}>
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 p-6 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-gray-900 to-transparent'
                  : 'bg-gradient-to-t from-white to-transparent'
              }`}>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React.js', 'Node.js', 'Java', 'DSA'].map((skill) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-blue-900/70 text-blue-200'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;