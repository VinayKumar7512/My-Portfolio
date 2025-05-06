import React, { useRef, useEffect } from 'react';
import SkillBar from './SkillBar';
import useInView from '../hooks/useInView';

const Skills = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        categoriesRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
    }
  }, [isInView]);

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      name: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      name: "Core Skills",
      skills: [
        { name: "DSA", level: 90 },
        { name: "OOP", level: 85 },
        { name: "Database Management", level: 85 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
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
          Technical Skills
        </h2>
        
        <div 
          ref={categoriesRef}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-200"
        >
          {skillCategories.map((category, index) => (
            <div key={category.name} className={`${
              theme === 'dark' 
                ? 'bg-gray-900 border border-gray-700' 
                : 'bg-gray-50 border border-gray-200'
              } rounded-xl p-6 shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    index={skillIndex}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;