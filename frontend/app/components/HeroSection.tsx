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
    <section className="relative h-screen overflow-hidden bg-black">
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
      
      {/* Main Content with Left Alignment */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-6 lg:px-16">
          <div 
            className={`max-w-3xl transform transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            {/* Explosive Typography - Left Aligned */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight text-left">
              <div className="overflow-hidden">
                <span 
                  className={`block mb-2 transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">FORGE</span>
                    <span className="absolute -left-1.5 -top-1.5 text-red-600 blur-[1px] z-0 opacity-80">FORGE</span>
                  </span>
                </span>
                <span 
                  className={`block transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                >
                  <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">YOUR LEGACY</span>
                </span>
              </div>
            </h1>
            
            {/* Tagline - Left Aligned */}
            <p 
              className={`text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light text-gray-300 transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-left`}
            >
              Transform your <span className="text-white font-medium">body</span>. Elevate your <span className="text-white font-medium">mind</span>. 
              <span className="block mt-3">Unleash your <span className="text-red-500 font-bold">full potential</span>.</span>
            </p>
            
            {/* CTA Buttons - Redesigned to Complement Website */}
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-900 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <button className="relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full bg-red-600 border-red-600 border-2 rounded transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-lg group-hover:shadow-red-600/30"></div>
                <span className="relative block px-12 py-4 font-bold uppercase tracking-wider text-base md:text-lg text-white z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1">
                  Start Now
                </span>
              </button>
              
              <button className="relative overflow-hidden group">
                <div className="absolute inset-0 w-full h-full border-2 border-white rounded transition-all duration-500 ease-in-out group-hover:border-red-500 group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-lg"></div>
                <div className="absolute inset-0 w-full h-full bg-white scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:-rotate-1"></div>
                <span className="relative block px-12 py-4 font-bold uppercase tracking-wider text-base md:text-lg text-white z-10 transition-all duration-500 ease-in-out group-hover:text-red-600 group-hover:-translate-y-1 group-hover:translate-x-1">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Slider Indicators - Repositioned */}
      <div className="absolute bottom-28 left-16 right-0 flex justify-start gap-3 z-10 container mx-auto px-6 lg:px-16">
        {backgroundImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-red-600 w-8' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      {/* Animated Stats Counters - At Bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div 
          className={`container mx-auto px-6 lg:px-16 transition-all duration-1000 delay-1200 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "5,000+", label: "ELITE MEMBERS" },
              { number: "25+", label: "MASTER TRAINERS" },
              { number: "100+", label: "PRO EQUIPMENT" },
              { number: "24/7", label: "UNLIMITED ACCESS" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-5 backdrop-blur-lg bg-black/30 rounded border border-gray-800 hover:border-red-800 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: `${1.3 + index * 0.1}s` }}
              >
                <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs tracking-wider text-red-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Repositioned */}
      <div className={`absolute bottom-6 right-10 flex justify-center transition-all duration-1000 delay-1600 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;