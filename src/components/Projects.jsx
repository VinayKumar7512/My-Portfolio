import React, { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import useInView from '../hooks/useInView';

const Projects = ({ theme }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const filtersRef = useRef(null);
  const projectsRef = useRef(null);
  
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const projectData = [
      {
        id: 1,
        title: "Voice Assistant Chatbot",
        description: "A browser-based voice chatbot powered by Speech-to-Text (STT) and Text-to-Speech (TTS) APIs, integrated with Groq’s ultra-fast LLaMA models for intelligent, real-time conversational responses using web sockets.",
        image: "https://thumbs.dreamstime.com/b/woman-using-voice-assistant-smartphone-ai-chatbot-interface-microphone-icon-digital-background-conceptual-396666775.jpg",
        tags: ["Full Stack", "AI Voice Chatbot", "WebSocket", "Groq Llama", "STT/TTS"],
        demoLink: "https://voice-assistance-chatbot-git-main-vinays-projects-ea533a8b.vercel.app/",
        codeLink: "https://github.com/VinayKumar7512/Voice-Assistant-Chatbot",
      },
      {
        id: 2,
        title: "Task Manager MERN Stack",
        description: "A comprehensive task management application with features for task organization, analytics, progress tracking, and priority management. Built with MERN stack.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        demoLink: "#",
        codeLink: "https://github.com/VinayKumar7512/TaskManager",
      },
      {
        id: 3,
        title: "Medical Assistance Chatbot",
        description: "An ML-based Medical Assistance Chatbot that provides users with preliminary health information based on symptoms and suggests required medicines for cure.",
        image: "https://thumbs.dreamstime.com/b/ai-chatbots-patient-triage-chatbot-assisting-353647134.jpg",
        tags: ["Python", "Machine Learning", "sklearn", "Regression","Random Forest"],
        demoLink: "https://medical-assistance-chatbot.onrender.com/",
        codeLink: "https://github.com/VinayKumar7512/Medical-Assistance-Chatbot",
      },
      {
        id: 4,
        title: "CPU Scheduling GUI",
        description: "Python-based GUI application simulating various CPU scheduling algorithms including FCFS, SRTF, Priority, and Round Robin with Gantt charts.",
        image: "https://miro.medium.com/v2/1*s6Y_KtTgTnlf4yBZr5tfQA.jpeg",
        tags: ["Python", "Tkinter", "GUI", "Algorithms"],
        demoLink: "#",
        codeLink: "https://github.com/VinayKumar7512/Process-Scheduling-GUI",
      },
      {
        id: 5,
        title: "E-Commerce Application",
        description: "Responsive e-commerce application with product listings, cart management, and API integration. Built with React and Tailwind CSS.",
        image: "https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?semt=ais_hybrid&w=740",
        tags: ["React", "Tailwind CSS", "API", "JavaScript"],
        demoLink: "#",
        codeLink: "https://github.com/VinayKumar7512/E-Commerce-React",
      },
      {
        id: 6,
        title: "Interactive Browser Games",
        description: "Collection of browser games including Rock-Paper-Scissors & Tic-Tac-Toe with AI opponent logic and dynamic UI updates.",
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        tags: ["HTML", "CSS", "JavaScript", "Game Development"],
        demoLink: "#",
        codeLink: "https://github.com/VinayKumar7512",
      },
      {
        id: 7,
        title: "Hangman Game",
        description: "Terminal-based Hangman game implemented in Python with random word selection, string manipulation, and visual status display.",
        image: "https://t4.ftcdn.net/jpg/05/11/07/13/360_F_511071324_M9zRvlGjGSsYCbEGIYgWOvhZ5A9xzAU6.jpg",
        tags: ["Python", "Terminal", "Game Development"],
        demoLink: "#",
        codeLink: "https://github.com/VinayKumar7512/Hangman-Game",
      },
      {
        id: 8,
        title: "Text-to-Speech Web Application",
        description: "A full-stack web application that converts user-input text into natural-sounding speech using the Google Cloud Text-to-Speech API. The platform supports 100+ languages.",
        image: "https://images.ctfassets.net/y769453lpkt4/47doSFP2bhd6oWYwffTpIr/58f5f8c551d26863be59723f2a34d569/62b264ced6e2c5184b2ce2d4_The_8_Best_TTS_Voice_Providers.jpg",
        tags: ["Full Stack", "Google TTS API", "Node.js"],
        demoLink: "https://tts-git-main-vinays-projects-ea533a8b.vercel.app/",
        codeLink: "https://github.com/VinayKumar7512/TTS",
      }
    ];
    
    setProjects(projectData);
    setFilteredProjects(projectData);
  }, []);

  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        filtersRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 200);
      setTimeout(() => {
        projectsRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 400);
    }
  }, [isInView]);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter, projects]);

  const filters = ['All', 'React', 'Python', 'JavaScript', 'Machine Learning', 'Game Development'];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 -translate-y-6 transition-all duration-700 ease-out ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          My Projects
        </h2>
        
        <div 
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-200"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 -translate-y-6 transition-all duration-700 ease-out delay-400"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              theme={theme}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;