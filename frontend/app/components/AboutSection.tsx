/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect, useRef } from 'react';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Elite Trainers",
      delay: 0.2
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Pro Equipment",
      delay: 0.4
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "24/7 Access",
      delay: 0.6
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Community",
      delay: 0.8
    }
  ];

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="py-32 relative bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -right-10 -top-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className={`lg:w-1/2 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="mb-14">
              <h4 className="text-red-600 font-bold text-xl mb-2 tracking-wider">OUR STORY</h4>
              <h2 className="text-6xl font-black mb-8 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">REDEFINING FITNESS</span>
                <span className="absolute h-1 bg-red-600 w-32 bottom-0 left-0"></span>
              </h2>
            </div>
            
            <p className="text-xl mb-8 text-gray-300 leading-relaxed font-light">
              We're not just a gym. We're a <span className="text-red-600 font-semibold">battle arena</span> where ordinary people transform into their extraordinary selves.
            </p>
            
            <p className="text-xl mb-12 text-gray-300 leading-relaxed font-light">
              With military-grade equipment, champion trainers, and revolutionary training methods, we create an environment where your limits are constantly <span className="text-red-600 font-semibold">challenged and shattered</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group flex items-center gap-4 transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${feature.delay}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                    {feature.icon}
                  </div>
                  <span className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="w-full h-[550px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-95 hover:rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Gym interior with modern equipment" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>
              
              {/* Small Image */}
              <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-3 hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Intense training session" 
                  className="w-full h-full object-cover"
                />
                
                {/* Red overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 via-red-600/30 to-transparent"></div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center border-4 border-red-600 shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-12">
                <div className="text-center">
                  <span className="block text-5xl font-black text-white">10+</span>
                  <span className="text-sm text-red-500 font-bold tracking-wider">YEARS EXPERIENCE</span>
                </div>
              </div>
              
              {/* Stats Badge */}
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-gradient-to-br from-red-600 to-red-800 text-white p-6 rounded-xl shadow-xl max-w-[180px] hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <p className="text-4xl font-black mb-1">500+</p>
                  <p className="text-sm font-medium uppercase tracking-wider">Transformations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;