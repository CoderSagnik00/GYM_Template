/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useState, useEffect, useRef } from 'react';

interface CTASectionProps {
  id: string;
  phoneNumber: string;
}

const CTASection: React.FC<CTASectionProps> = ({ id, phoneNumber = "+1234567890" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <section id={id} ref={sectionRef} className="relative py-16 sm:py-20 overflow-hidden bg-black">
      {/* Background Effects - more refined and premium */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/95 to-black/90"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Premium gym atmosphere" 
          className="w-full h-full object-cover opacity-15 mix-blend-overlay"
        />
        {/* Refined accent lighting */}
        <div className="absolute bottom-0 right-0 w-1/4 h-32 bg-red-700 opacity-15 blur-[80px]"></div>
        <div className="absolute top-1/4 left-0 w-1/5 h-32 bg-red-700 opacity-15 blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
          {/* Left column for heading - now taking less space */}
          <div className={`md:w-5/12 md:pr-8 mb-10 md:mb-0 transform transition-all duration-1000 text-right ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="md:sticky md:top-20">
              <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
                <span className="inline-block text-white">ELEVATE</span>
                <span className="block text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">YOUR POTENTIAL</span>
              </h2>
              <div className="h-1 w-16 bg-red-600 ml-auto"></div>
              <p className="text-base md:text-lg text-gray-300 mt-6 font-light">
                Elite training awaits. Our premium facilities and expert coaches are ready to transform your fitness journey.
              </p>
            </div>
          </div>
          
          {/* Right column for CTA - taking more space */}
          <div className={`md:w-7/12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
              {/* Accent border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-700/20 to-transparent opacity-50"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute -left-20 top-1/2 w-40 h-40 bg-red-600/30 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative p-8 md:p-10 backdrop-blur-sm flex flex-col text-right">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    BEGIN THE JOURNEY
                  </span>
                </h3>
                
                <p className="text-gray-300 text-sm mb-8 max-w-md ml-auto">
                  Take the first decisive step toward your transformation. Our elite team is standing by to guide you through every phase of your fitness evolution.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-end gap-4 mb-6">
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white font-bold text-lg transition-all duration-300 border border-gray-800 hover:border-red-800"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transition-transform duration-500 ease-out ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}></div>
                    
                    <svg className="h-5 w-5 mr-3 relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    
                    <span className="relative z-10">
                      {phoneNumber}
                    </span>
                  </a>
                </div>
                
                <div className="inline-block ml-auto p-3 bg-black/40 backdrop-blur-md rounded border border-gray-800 hover:border-red-800 transition-all duration-300">
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-medium">7AM-10PM</span> daily | Use code <span className="text-red-500 font-bold">ELITE50</span> for 50% off
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`mt-8 text-right transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block p-4 backdrop-blur-lg bg-gradient-to-br from-gray-900/80 to-black/80 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold mb-1">FORGE YOUR LEGACY</h4>
                <p className="text-gray-400 text-sm">
                  Limited memberships available for our premium services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;