import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-10 ${
      theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home"
              className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Portfolio
            </a>
            <p className="mt-2 text-sm">
              Full Stack Developer | Problem Solver
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home"
              className={`mb-4 p-3 rounded-full bg-opacity-20 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-blue-500 bg-opacity-20 hover:bg-opacity-30 text-blue-400'
                  : 'bg-blue-500 bg-opacity-10 hover:bg-opacity-20 text-blue-600'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            
            <p className="text-sm">
              &copy; {currentYear} Vinay Kumar Bathula . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;