import React, { useEffect, useRef } from 'react';

const SkillBar = ({ name, level, index, theme }) => {
  const barRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    // Animate skill bar with delay based on index
    const timer = setTimeout(() => {
      if (progressRef.current) {
        progressRef.current.style.width = `${level}%`;
        progressRef.current.style.opacity = '1';
      }
    }, 300 + (index * 100));

    return () => clearTimeout(timer);
  }, [level, index]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {name}
        </span>
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {level}%
        </span>
      </div>
      <div 
        ref={barRef}
        className={`h-2 rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        }`}
      >
        <div 
          ref={progressRef}
          className={`h-full rounded-full transition-all duration-1000 ease-out opacity-0 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;