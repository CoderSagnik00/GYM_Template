/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect, useRef } from 'react';

interface ServicesSectionProps {
  id: string;
}

const services = [
  { 
    title: "Personal Training", 
    description: "One-on-one sessions tailored to your specific goals and needs.",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  { 
    title: "Group Classes", 
    description: "High-energy workouts in a motivating group environment.",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  { 
    title: "Nutrition Coaching", 
    description: "Expert guidance on fueling your body for optimal performance.",
    iconPath: "M21 15.9A11.971 11.971 0 0012 4.5C7.858 4.5 4.5 7.858 4.5 12c0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5M18 12h-1.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H18M6 12h1.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H6m6 6v-4.5m-3-3l3-3 3 3"
  },
  { 
    title: "Strength Training", 
    description: "Build muscle, increase strength, and improve your physique.",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  },
  { 
    title: "Recovery Zone", 
    description: "Advanced recovery tools to help you perform your best.",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  { 
    title: "Online Coaching", 
    description: "Expert guidance wherever you are, whenever you need it.",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black"></div>
        {/* Red accent light */}
        <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-red-700 opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-32 bg-red-700 opacity-10 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-white">PREMIUM</span>
              <span className="absolute -left-1 -bottom-1 text-red-600 blur-[1px] z-0 opacity-50">PREMIUM</span>
            </span>
            <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700"> SERVICES</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mt-6 font-light">
            Experience exceptional fitness services designed to elevate your performance and transform your physique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 group transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : ''}`}></div>
              
              {/* Icon container */}
              <div className="relative mb-6 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black border border-gray-700 transition-colors duration-500 ${hoveredIndex === index ? 'from-red-900/50 to-red-800/30 border-red-700/50' : ''}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className={`w-7 h-7 text-gray-300 transition-colors duration-500 ${hoveredIndex === index ? 'text-white' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                  </svg>
                </div>
                
                {/* Animated glowing dot */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                  <div className="w-1 h-1 rounded-full bg-red-600 animate-ping"></div>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-red-500">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              
              {/* Animated underline */}
              <div className="relative mt-6 h-px w-full bg-gray-800">
                <div className={`absolute top-0 left-0 h-px bg-gradient-to-r from-red-600 to-red-500 transition-all duration-700 ease-out ${hoveredIndex === index ? 'w-full' : 'w-12'}`}></div>
              </div>
              
              {/* Subtle call to action */}
              <div className={`mt-6 text-sm text-red-600 font-medium flex items-center space-x-2 opacity-0 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'translate-y-4'}`}>
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Optional extra CTA */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <a href="#pricing" className="inline-flex items-center justify-center px-8 py-3 border border-gray-800 rounded bg-gradient-to-r from-gray-900 to-black text-white hover:from-red-700 hover:to-red-900 transition-all duration-300 group">
            <span className="mr-2">Explore our membership options</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;