'use client'

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-section').forEach(section => {
      if (section.id && observer.current) observer.current.observe(section);
    });
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover opacity-70"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://cdnjs.cloudflare.com/ajax/libs/Buttons/2.0.0/video/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-10">
          <div className="text-center max-w-5xl">
            <h1 className="text-8xl font-black mb-6 leading-none">
              <span className="relative inline-block">
                <span className="relative z-10">ELEVATE</span>
                <span className="absolute -left-1 -bottom-1 text-red-600 z-0">ELEVATE</span>
              </span>
              <br />
              <span className="text-red-600">YOUR LIMITS</span>
            </h1>
            
            <p className="text-2xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Where ordinary ends, your extraordinary begins. Experience fitness redefined.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group relative overflow-hidden rounded-md">
                <span className="relative z-10 block px-10 py-4 font-bold border-2 border-red-600 bg-red-600 text-white transition duration-300 group-hover:text-white">
                  JOIN NOW
                </span>
                <span className="absolute inset-0 h-full w-full scale-0 rounded-md transition duration-300 group-hover:scale-100 group-hover:bg-red-700"></span>
              </button>
              
              <button className="group relative overflow-hidden rounded-md">
                <span className="relative z-10 block px-10 py-4 font-bold border-2 border-white text-white transition duration-300 group-hover:text-black">
                  TAKE A TOUR
                </span>
                <span className="absolute inset-0 h-full w-full scale-0 rounded-md transition duration-300 group-hover:scale-100 group-hover:bg-white"></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="animate-section py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className={`lg:w-1/2 transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-8 relative inline-block">
                <span className="relative z-10">ABOUT US</span>
                <span className="absolute h-3 bg-red-600 bottom-2 left-0 right-0 -z-10"></span>
              </h2>
              <p className="text-xl mb-6 text-gray-300 leading-relaxed">
                We're not just a gym. We're a community of fitness enthusiasts dedicated to pushing boundaries and achieving the extraordinary.
              </p>
              <p className="text-xl mb-10 text-gray-300 leading-relaxed">
                With state-of-the-art equipment, expert trainers, and innovative training methodologies, we provide an environment where transformation isn't just possible—it's inevitable.
              </p>
              
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Expert Trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">24/7 Access</span>
                </div>
              </div>
            </div>
            
            <div className={`lg:w-1/2 transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Gym interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Training session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center border-4 border-red-600">
                  <div className="text-center">
                    <span className="block text-3xl font-bold">10+</span>
                    <span className="text-sm">YEARS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Carousel */}
      <section id="services" className="animate-section py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Personal Training", icon: "🏋️‍♂️", description: "One-on-one sessions tailored to your specific goals and needs." },
              { title: "Group Classes", icon: "👥", description: "High-energy workouts in a motivating group environment." },
              { title: "Nutrition Coaching", icon: "🥗", description: "Expert guidance on fueling your body for optimal performance." },
              { title: "Strength Training", icon: "💪", description: "Build muscle, increase strength, and improve your physique." },
              { title: "Recovery Zone", icon: "🧘‍♂️", description: "Advanced recovery tools to help you perform your best." },
              { title: "Online Coaching", icon: "💻", description: "Expert guidance wherever you are, whenever you need it." }
            ].map((service, index) => (
              <div 
                key={index}
                className={`bg-black p-8 rounded-lg border border-gray-800 group hover:border-red-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-red-600/20 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">{service.description}</p>
                <div className="mt-6 h-1 w-12 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Plans */}
      <section id="pricing" className="animate-section py-24 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-30"></div>
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Background texture" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              MEMBERSHIP <span className="text-red-600">PLANS</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "STARTER", 
                price: "$29", 
                features: ["Full gym access", "2 group classes/week", "Basic fitness assessment", "Locker access"] 
              },
              { 
                name: "ELITE", 
                price: "$59", 
                features: ["24/7 gym access", "Unlimited group classes", "1 PT session/month", "Nutrition consultation", "Access to all facilities"],
                highlighted: true
              },
              { 
                name: "PREMIER", 
                price: "$99", 
                features: ["24/7 VIP access", "Unlimited premium classes", "4 PT sessions/month", "Personalized nutrition plan", "Recovery zone access", "Guest privileges"] 
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`rounded-lg overflow-hidden ${plan.highlighted ? 'bg-gradient-to-br from-red-600 to-red-900 transform scale-105' : 'bg-gray-900'} transition-all duration-500 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
                  <div className="text-center mb-8">
                    <div className="inline-block relative">
                      <span className="text-6xl font-black">{plan.price}</span>
                      <span className="absolute -top-2 -right-4 text-xl">/mo</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 mr-2 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded font-bold text-lg transition-all duration-300 ${plan.highlighted ? 'bg-white text-red-600 hover:bg-gray-100' : 'bg-red-600 text-white hover:bg-red-700'}`}>
                    GET STARTED
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call-to-Action */}
      <section id="cta" className="animate-section py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Gym background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-12 transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="md:w-2/3">
              <h2 className="text-5xl font-bold mb-6">
                READY TO <span className="text-red-600">TRANSFORM</span> YOUR LIFE?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Take the first step towards a stronger, healthier you. Our team is ready to answer any questions and help you get started on your fitness journey.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a href="tel:+1234567890" className="group relative inline-flex items-center overflow-hidden rounded px-8 py-4 bg-red-600">
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <svg className="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-bold transition-all group-hover:me-4">
                    CALL US NOW
                  </span>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-800">
              <form>
                <div className="mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-600"
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300">
                  REQUEST A CALL BACK
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="animate-section py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              SUCCESS <span className="text-red-600">STORIES</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Alex Johnson",
                image: "/api/placeholder/100/100",
                text: "This isn't just a gym, it's a transformation hub. The trainers pushed me beyond what I thought possible. Down 30lbs and feeling stronger than ever!"
              },
              {
                name: "Sarah Williams",
                image: "/api/placeholder/100/100",
                text: "After trying countless gyms, I finally found my fitness home. The community here is incredible, and the results speak for themselves. Life-changing!"
              },
              {
                name: "Michael Davis",
                image: "/api/placeholder/100/100",
                text: "The personalized approach makes all the difference. My trainer understood exactly what I needed and designed a program that got me real results."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-black p-8 rounded-lg border border-gray-800 transform transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4 gap-3">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <svg className="absolute -top-4 -left-2 w-10 h-10 text-red-600 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 relative z-10">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section id="gallery" className="animate-section py-24">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              OUR <span className="text-red-600">FACILITY</span>
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden aspect-square transform transition-all duration-700 ${isVisible.gallery ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={`/api/placeholder/${600 + index}/${600 + index}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end p-4">
                  <h3 className="text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {["Weight Area", "Cardio Zone", "Group Classes", "Recovery Area", "Personal Training", "Nutrition Bar", "Locker Rooms", "Outdoor Area"][index]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}