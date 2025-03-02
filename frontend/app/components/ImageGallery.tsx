/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect, useRef } from 'react';

const ImageGallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Gallery items with category and actual image URLs
  const galleryItems = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
      title: "Premium Weight Area", 
      description: "State-of-the-art free weights and machines",
      category: "Training"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80", 
      title: "High-Tech Cardio Zone", 
      description: "Latest cardio equipment with integrated entertainment",
      category: "Cardio"
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
      title: "Luxury Group Studio", 
      description: "Immersive spaces for transformative group experiences",
      category: "Classes"
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1662045010586-d3477ab33c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
      title: "Recovery & Wellness", 
      description: "Advanced recovery technology and relaxation spaces",
      category: "Recovery"
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80", 
      title: "Personal Training", 
      description: "Custom training with elite coaches in private studios",
      category: "Training"
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80", 
      title: "Performance Nutrition", 
      description: "Precision nutrition guidance and supplements",
      category: "Nutrition"
    },
    { 
      id: 7, 
      src: "https://images.unsplash.com/photo-1616394584738-fc6970f15c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
      title: "Executive Locker Rooms", 
      description: "Luxurious amenities and premium finishes",
      category: "Amenities"
    },
    { 
      id: 8, 
      src: "https://images.unsplash.com/photo-1517963628385-558eec7572d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
      title: "Outdoor Training Area", 
      description: "Functional training in premium outdoor spaces",
      category: "Training"
    }
  ];
  
  // Filter categories
  const categories = ["All", "Training", "Cardio", "Classes", "Recovery", "Nutrition", "Amenities"];
  
  // Filtered gallery items
  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);
    
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="gallery" 
      className="relative py-32 bg-black overflow-hidden" 
      ref={galleryRef}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      
      {/* Animated Red Accents */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-red-600/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Agency-Style Section Header with Split Animation */}
        <div className={`mb-24 max-w-5xl mx-auto transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center mb-4">
            <div className="h-px bg-red-600 w-10 mr-3 transform transition-all duration-1500 delay-500" style={{ width: isVisible ? '40px' : '0px' }}></div>
            <span className="text-red-600 font-medium uppercase text-xs tracking-widest">World-Class Facilities</span>
          </div>
          
          <div className="relative mb-6">
            <h2 className="text-6xl lg:text-7xl font-black text-white leading-none">
              ELITE
              <span className="relative ml-4 inline-block overflow-hidden">
                <span 
                  className="relative z-10 text-red-600 inline-block transform transition-transform duration-1000 delay-300"
                  style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
                >
                  FACILITIES
                </span>
                <span className="absolute left-0.5 top-0.5 text-red-700 blur-sm opacity-70 z-0 inline-block transform transition-transform duration-1000 delay-300" 
                  style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}
                >
                  FACILITIES
                </span>
              </span>
            </h2>
            <div className="absolute -left-10 -bottom-4 w-8 h-8 border-l-2 border-b-2 border-red-600/30 transform transition-all duration-1000 delay-700 opacity-0" style={{ opacity: isVisible ? 1 : 0 }}></div>
          </div>
          
          <p className="text-xl text-gray-400 max-w-2xl transform transition-all duration-1000 delay-500" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            Experience our meticulously designed environments that fuse cutting-edge technology with luxurious comfort to elevate your fitness journey beyond expectations.
          </p>
        </div>
        
        {/* Advanced Filter Controls */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className="flex flex-wrap justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`
                  relative mx-2 px-6 py-2 text-sm font-medium uppercase tracking-wider overflow-hidden transition-all duration-500
                  ${activeFilter === category ? 'text-white' : 'text-gray-500 hover:text-white'}
                `}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="relative z-10">{category}</span>
                
                {/* Animated underline effect */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-500 ease-out
                    ${activeFilter === category ? 'w-full' : 'w-0'}`}
                ></span>
                
                {/* Animated background effect on active */}
                <span 
                  className={`absolute inset-0 bg-red-600/10 transition-transform duration-500 ease-out
                    ${activeFilter === category ? 'scale-100' : 'scale-0'}`}
                ></span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Professional Gallery Grid with Advanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg transform transition-all duration-1000 h-96 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${(index * 100) + 600}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image with Advanced Hover Effects */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-1500 ease-out will-change-transform"
                style={{ 
                  transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1.01)',
                  filter: hoveredItem === item.id ? 'brightness(0.7)' : 'brightness(0.9)'
                }}
              />
              
              {/* Premium Overlay with Staggered Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500" 
                style={{ opacity: hoveredItem === item.id ? 1 : 0 }}
              >
                {/* Category Badge */}
                <div className="absolute top-6 right-6" style={{ 
                  transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(-10px)', 
                  opacity: hoveredItem === item.id ? 1 : 0,
                  transition: 'transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s'
                }}>
                  <span className="bg-red-600 text-white text-xs px-4 py-1.5 rounded-full uppercase font-semibold tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                {/* Advanced Bottom Content Animation */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  {/* Reveal line effect */}
                  <div className="h-0.5 bg-red-600 mb-5" style={{ 
                    width: hoveredItem === item.id ? '40px' : '0px',
                    transition: 'width 0.6s ease 0.2s'
                  }}></div>
                  
                  {/* Title with character animation */}
                  <h3 className="text-white font-bold text-2xl mb-3" style={{ 
                    transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20px)',
                    opacity: hoveredItem === item.id ? 1 : 0,
                    transition: 'transform 0.6s ease 0.3s, opacity 0.6s ease 0.3s'
                  }}>
                    {item.title}
                  </h3>
                  
                  {/* Description text */}
                  <p className="text-gray-300 text-sm mb-6" style={{
                    transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20px)', 
                    opacity: hoveredItem === item.id ? 0.8 : 0,
                    transition: 'transform 0.6s ease 0.4s, opacity 0.6s ease 0.4s'
                  }}>
                    {item.description}
                  </p>
                  
                  {/* Button with hover animation */}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-white"
                    style={{
                      transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(20px)', 
                      opacity: hoveredItem === item.id ? 1 : 0,
                      transition: 'transform 0.6s ease 0.5s, opacity 0.6s ease 0.5s'
                    }}
                  >
                    <span className="relative overflow-hidden inline-block">
                      <span className="relative z-10 font-medium">EXPLORE</span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-red-600 transform transition-transform duration-300 origin-left" 
                        style={{ transform: hoveredItem === item.id ? 'scaleX(1)' : 'scaleX(0)' }}></span>
                    </span>
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform duration-300" 
                      style={{ transform: hoveredItem === item.id ? 'translateX(3px)' : 'translateX(0)' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Subtle Reveal Border Effect */}
              <div className="absolute inset-0 border-0 border-red-600 rounded-lg transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"
                style={{ 
                  borderWidth: hoveredItem === item.id ? '1px' : '0px',
                  boxShadow: hoveredItem === item.id ? '0 0 30px -5px rgba(220, 38, 38, 0.15)' : 'none' 
                }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Agency-Style CTA Button */}
        <div className={`text-center mt-24 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="/facilities" 
            className="relative group overflow-hidden inline-block"
          >
            <div className="absolute top-0 left-0 w-full h-full border border-white transition-all duration-700 ease-out group-hover:border-red-600"></div>
            <div className="absolute top-0 left-0 w-0 h-full bg-red-600 transition-all duration-700 ease-out group-hover:w-full"></div>
            <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm bg-red-600/20"></div>
            
            <span className="relative block px-10 py-4 text-white uppercase tracking-widest font-medium text-sm transition-colors duration-700 ease-out group-hover:text-white">
              Explore All Facilities
              <svg 
                className="inline-block w-5 h-5 ml-3 transform transition-all duration-700 ease-out group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          {/* Designer Touch: Subtle Bottom Pattern */}
          <div className="mt-24 flex justify-center">
            <div className="w-1 h-1 rounded-full bg-red-600/80 mx-1 animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 rounded-full bg-red-600/50 mx-1 animate-pulse" style={{ animationDelay: '300ms' }}></div>
            <div className="w-1 h-1 rounded-full bg-red-600/30 mx-1 animate-pulse" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;