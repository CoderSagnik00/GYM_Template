/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      name: "Alex Johnson",
      position: "Member since 2022",
      image: "/api/placeholder/100/100",
      text: "This isn't just a gym, it's a transformation hub. The trainers pushed me beyond what I thought possible. Down 30lbs and feeling stronger than ever!"
    },
    {
      name: "Sarah Williams",
      position: "Elite Member",
      image: "/api/placeholder/100/100",
      text: "After trying countless gyms, I finally found my fitness home. The community here is incredible, and the results speak for themselves. Life-changing!"
    },
    {
      name: "Michael Davis",
      position: "Performance Athlete",
      image: "/api/placeholder/100/100",
      text: "The personalized approach makes all the difference. My trainer understood exactly what I needed and designed a program that got me real results."
    }
  ];

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
    <section id="testimonials" ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-black"></div>
        
        {/* Accent lighting */}
        <div className="absolute top-1/3 left-0 w-1/4 h-40 bg-red-700 opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-1/4 h-40 bg-red-700 opacity-10 blur-[100px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-800 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-gray-800 rounded-full opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">SUCCESS</span>
            <span className="ml-2 text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">STORIES</span>
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mt-6 font-light">
            Real results from dedicated members who transformed their lives with our premium training experiences.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-red-800 transform transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Quote mark and glow effect */}
                <div className="absolute -top-4 -left-4 w-16 h-16 text-red-600 opacity-10">
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600 opacity-5 rounded-full blur-xl"></div>
                
                {/* Testimonial content */}
                <div className="relative z-10">
                  <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
                  
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-800">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-600 bg-gray-900">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-red-600 to-red-700 rounded-full w-5 h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                      <div className="flex text-red-500 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Carousel Layout */}
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black p-8 border border-gray-800">
              {/* Quote mark and glow effect */}
              <div className="absolute -top-4 -left-4 w-16 h-16 text-red-600 opacity-10">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600 opacity-5 rounded-full blur-xl"></div>
              
              {/* Testimonial content */}
              <div className="relative z-10">
                <p className="text-gray-300 italic mb-6">{testimonials[activeIndex].text}</p>
                
                <div className="flex items-center mt-6 pt-6 border-t border-gray-800">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-600 bg-gray-900">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-br from-red-600 to-red-700 rounded-full w-5 h-5 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-gray-400">{testimonials[activeIndex].position}</p>
                    <div className="flex text-red-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-red-600 w-6' : 'bg-gray-700'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Optional badge/callout */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-gray-900/80 to-black/80 px-6 py-3 rounded border border-gray-800">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base font-medium">Join over <span className="text-red-500 font-bold">500+</span> members who've transformed their fitness journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;