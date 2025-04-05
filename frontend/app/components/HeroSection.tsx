'use client'

import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Premium gym background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80", // Dark gym with equipment
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80", // Person lifting weights
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80", // Gym interior
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"  // Person boxing
  ];
  
  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Image slider timer
    const sliderInterval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % backgroundImages.length);
    }, 3000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(sliderInterval);
    };
  }, [backgroundImages.length]);
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-20">
      {/* Premium Background Image Slider */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out"
          style={{ 
            opacity: activeSlide === index ? 1 : 0,
            transform: `scale(${activeSlide === index ? (1.05 + scrollPosition * 0.0002) : 1.15})`,
            zIndex: 1
          }}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${image})`,
              filter: 'brightness(0.35) contrast(1.1) saturate(1.2)',
            }}
          ></div>
        </div>
      ))}
      
      {/* Image Overlay Gradient - Adjusted for left-aligned text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 z-2"></div>
      
      {/* Red Accents */}
      <div className="absolute top-0 left-0 w-1/2 h-40 bg-red-600 opacity-20 blur-[120px] z-3"></div>
      <div className="absolute bottom-0 left-10 w-1/3 h-40 bg-red-600 opacity-20 blur-[120px] z-3"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Heading Section - Perfectly Spaced */}
        <div className="flex-grow flex items-center">
          <div className="container mx-auto px-5 sm:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-0">
            <div 
              className={`max-w-3xl transform transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              {/* Explosive Typography - Refined Spacing */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-left">
                <div className="overflow-hidden">
                  <span 
                    className={`block mb-1 sm:mb-2 transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                  >
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">FORGE</span>
                      <span className="absolute -left-1 sm:-left-1.5 -top-1 sm:-top-1.5 text-red-600 blur-[1px] z-0 opacity-80">FORGE</span>
                    </span>
                  </span>
                  <span 
                    className={`block transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                  >
                    <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">YOUR LEGACY</span>
                  </span>
                </div>
              </h1>
              
              {/* Tagline - Precise Spacing */}
              <p 
                className={`text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 mb-8 sm:mb-10 max-w-xl leading-relaxed font-light text-gray-300 transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-left`}
              >
                Transform your <span className="text-white font-medium">body</span>. Elevate your <span className="text-white font-medium">mind</span>. 
                <span className="block mt-2 sm:mt-3">Unleash your <span className="text-red-500 font-bold">full potential</span>.</span>
              </p>
              
              {/* CTA Buttons - Perfectly Aligned */}
              <div 
                className={`flex flex-wrap gap-4 sm:gap-6 mt-2 transition-all duration-1000 delay-900 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <button className="relative overflow-hidden group">
                  <div className="absolute inset-0 w-full h-full bg-red-600 border-red-600 border-2 rounded transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-lg group-hover:shadow-red-600/30"></div>
                  <span className="relative block px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg text-white z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1">
                    Start Now
                  </span>
                </button>
                
                <button className="relative overflow-hidden group">
                  <div className="absolute inset-0 w-full h-full border-2 border-white rounded transition-all duration-500 ease-in-out group-hover:border-red-500 group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-lg"></div>
                  <div className="absolute inset-0 w-full h-full bg-white scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:-rotate-1"></div>
                  <span className="relative block px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg text-white z-10 transition-all duration-500 ease-in-out group-hover:text-red-600 group-hover:-translate-y-1 group-hover:translate-x-1">
                    Explore
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section Container - Perfect Spacing */}
        <div className="relative z-10 pb-14 sm:pb-16 md:pb-20 px-5 sm:px-8 lg:px-16">
          {/* Premium Slider Indicators - Perfectly Positioned */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
            {backgroundImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-red-600 w-6 sm:w-8' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Animated Stats Counters - Perfect Grid Spacing */}
          <div 
            className={`transition-all duration-1000 delay-1200 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 text-center">
              {[
                { number: "5,000+", label: "ELITE MEMBERS" },
                { number: "25+", label: "MASTER TRAINERS" },
                { number: "100+", label: "PRO EQUIPMENT" },
                { number: "24/7", label: "UNLIMITED ACCESS" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="p-3 sm:p-4 md:p-5 backdrop-blur-lg bg-black/30 rounded border border-gray-800 hover:border-red-800 transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${1.3 + index * 0.1}s` }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">{stat.number}</div>
                  <div className="text-xs tracking-wider text-red-500 font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;