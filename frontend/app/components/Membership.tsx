/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';

const Membership: React.FC = () => {
  const [isVisible, setIsVisible] = useState({ pricing: false });

  useEffect(() => {
    setIsVisible({ pricing: true });
  }, []);
 
  return (
<section id="pricing" className="relative py-16 sm:py-24 overflow-hidden bg-black">
  {/* Background Effects */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"></div>
    <img 
      src="https://img.freepik.com/premium-photo/gym-interior-with-modern-neon-red-concept_832479-8415.jpg" 
      alt="Background texture" 
      className="w-full h-full object-cover opacity-30"
    />
    {/* Red Accent Lights */}
    <div className="absolute top-0 right-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
    <div className="absolute bottom-0 left-10 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header with Animation */}
    <div className={`mb-10 sm:mb-16 transform transition-all duration-1000 ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-center">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">MEMBERSHIP</span>
          <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">MEMBERSHIP</span>
        </span>
        <span className="block text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">PLANS</span>
      </h2>
      <div className="h-1 w-24 bg-red-600 mx-auto"></div>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mt-6 font-light mx-auto text-center px-4">
        Choose the plan that fits your goals and transform your life with premium 
        training and exclusive facilities at <span className="text-white font-medium">FORGE</span>.
      </p>
    </div>
    
    {/* Membership Cards - Mobile Optimized */}
    <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-6xl mx-auto px-4">
      {[
        { 
          name: "STARTER", 
          price: "₹1499", 
          features: [
            "Full gym access", 
            "2 group classes/week", 
            "Basic fitness assessment", 
            "Locker access",
            "Water station access"
          ] 
        },
        { 
          name: "ELITE", 
          price: "₹1999", 
          features: [
            "24/7 gym access", 
            "Unlimited group classes", 
            "1 PT session/month", 
            "Nutrition consultation", 
            "Access to all facilities",
            "Mobile app access"
          ],
          highlighted: true
        },
        { 
          name: "PREMIER", 
          price: "₹2999", 
          features: [
            "24/7 VIP access", 
            "Unlimited premium classes", 
            "4 PT sessions/month", 
            "Personalized nutrition plan", 
            "Recovery zone access", 
            "Guest privileges",
            "Premium apparel package"
          ] 
        }
      ].map((plan, index) => (
        <div 
          key={index}
          className={`flex-1 relative overflow-hidden rounded-lg transition-all duration-700 ${
            plan.highlighted ? 'order-first lg:order-none lg:-mt-4 lg:mb-0 my-8' : ''
          } ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 ${
            plan.highlighted 
              ? 'bg-gradient-to-br from-red-600 to-red-900' 
              : 'bg-gray-900 border border-gray-800'
          } transition-all duration-500`}></div>
          
          {/* Highlight Glow Effect */}
          {plan.highlighted && (
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          )}
          
          {/* Content Container */}
          <div className="relative p-6 sm:p-8 backdrop-blur-sm rounded-lg h-full flex flex-col">
            {/* Plan Name */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              {plan.highlighted ? (
                <span className="relative">
                  <span className="relative z-10">{plan.name}</span>
                  <span className="absolute -left-1 -bottom-1 text-white blur-[1px] z-0 opacity-50">{plan.name}</span>
                </span>
              ) : plan.name}
            </h3>
            
            {/* Price Display */}
            <div className="mb-6 sm:mb-8 text-center">
              <div className="inline-block relative">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black">{plan.price}</span>
                <span className="absolute -top-2 -right-4 sm:-right-6 text-base sm:text-xl font-medium">/mo</span>
              </div>
            </div>
            
            {/* Features List */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start group">
                  <svg 
                    className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0 transition-all duration-300 ${plan.highlighted ? 'text-white' : 'text-red-600'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="transition-all duration-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <button className={`relative overflow-hidden py-3 sm:py-4 px-6 sm:px-8 rounded font-bold text-base sm:text-lg transition-all duration-500 group w-full ${
              plan.highlighted 
                ? 'bg-white text-red-600 hover:bg-gray-100' 
                : 'bg-transparent hover:bg-red-600 text-white border-2 border-red-600'
            }`}>
              <span className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 inline-block">
                {plan.highlighted ? 'GET STARTED' : 'GET STARTED'}
              </span>
              {!plan.highlighted && (
                <div className="absolute inset-0 w-full h-full scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-600 -z-0"></div>
              )}
            </button>
            
            {/* Best Value Badge */}
            {plan.highlighted && (
              <div className="absolute -top-1 -right-1 bg-white text-red-600 font-bold text-xs py-1 px-3 rotate-12 shadow-lg">
                BEST VALUE
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    
    {/* Additional Information */}
    <div className={`mt-12 sm:mt-16 max-w-3xl mx-auto text-center transition-all duration-1000 delay-300 px-4 ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <p className="text-sm sm:text-base text-gray-400">
        All memberships include access to our state-of-the-art facilities and premium equipment.
        <span className="block mt-2 sm:mt-3 text-xs sm:text-sm">
          <span className="text-red-500 font-semibold">*</span> Contracts are month-to-month with no long-term commitment required.
        </span>
      </p>
      
      {/* Call to Action for Special Offers */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-6 backdrop-blur-lg bg-black/30 rounded border border-gray-800 hover:border-red-800 transition-all duration-300">
        <h4 className="text-lg sm:text-xl font-bold mb-2">FORGE YOUR LEGACY TODAY</h4>
        <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">Join now and get 50% off your first month with code <span className="text-red-500 font-bold">LEGACY50</span></p>
        <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base transition-all duration-300">
          <span>CLAIM OFFER</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
  );
};

export default Membership;