import React, { useRef, useEffect } from 'react';

const ProjectCard = ({ project, index, theme, isVisible }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        cardRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, index * 200);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);
  
  return (
    <div 
      ref={cardRef}
      className={`group h-full flex flex-col overflow-hidden rounded-xl shadow-lg transform opacity-0 translate-y-8 transition-all duration-700 ease-out ${
        theme === 'dark' 
          ? 'bg-gray-900 border border-gray-800 hover:border-blue-600' 
          : 'bg-white border border-gray-200 hover:border-blue-400'
      }`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        }`}>
          <a 
            href={project.demoLink} 
            target="_blank"
            rel="noopener noreferrer" 
            className={`px-4 py-2 rounded-md font-medium text-sm transform hover:-translate-y-1 transition-all ${
              theme === 'dark' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Live Demo
          </a>
          
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-md font-medium text-sm transform hover:-translate-y-1 transition-all ${
              theme === 'dark' 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            View Code
          </a>
        </div>
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <h3 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        
        <p className={`mb-4 text-sm flex-grow ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'dark' 
                  ? 'bg-gray-800 text-blue-300 border border-gray-700'
                  : 'bg-gray-100 text-blue-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;