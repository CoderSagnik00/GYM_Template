/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const TrainersPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedTrainer, setExpandedTrainer] = useState<number | null>(null);


  // Define trainers data
  const trainers = [
    {
      id: 1,
      name: "ALEX REYNOLDS",
      categories: ["strength", "hiit"],
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Head Strength Coach",
      brief: "Former powerlifting champion with over 10 years of elite coaching experience.",
      bio: "Alex is a former national powerlifting champion who has dedicated his career to helping athletes and fitness enthusiasts reach their strength potential. With multiple certifications in strength and conditioning, Alex applies scientific principles to his programming while keeping workouts engaging and challenging. He specializes in powerlifting, Olympic lifting, and strength-based HIIT protocols that build both raw power and functional fitness.",
      credentials: [
        "MS in Exercise Physiology",
        "Certified Strength and Conditioning Specialist (CSCS)",
        "USA Powerlifting Level 2 Coach",
        "Former National Powerlifting Champion (220lb class)",
        "10+ years elite coaching experience"
      ],
      specialties: ["Powerlifting", "Athletic Performance", "Hypertrophy Training"],
      quote: "Strength isn't just about lifting weights – it's about building a foundation that empowers every aspect of your life."
    },
    {
      id: 2,
      name: "SARAH CHEN",
      categories: ["hiit", "cardio"],
      image: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "HIIT Program Director",
      brief: "Former Division I athlete bringing elite conditioning methods to everyday fitness.",
      bio: "Sarah brings her experience as a former Division I track athlete to her role as our HIIT Program Director. She's known for creating innovative, results-driven workouts that push clients to their limits while keeping them motivated and engaged. Sarah's signature training style combines explosive plyometrics, metabolic conditioning, and strategic recovery protocols for maximum results. Her clients consistently report dramatic improvements in body composition, cardiovascular health, and overall athletic performance.",
      credentials: [
        "BS in Kinesiology",
        "NASM Certified Personal Trainer",
        "TRX Suspension Training Specialist",
        "Former Division I Track & Field Athlete",
        "Precision Nutrition Level 2 Coach"
      ],
      specialties: ["High-Intensity Interval Training", "Athletic Conditioning", "Weight Management"],
      quote: "Your mind will give up long before your body does. My job is to help you push past those mental barriers."
    },
    {
      id: 3,
      name: "MARCUS JOHNSON",
      categories: ["cardio", "rehab"],
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Endurance Specialist",
      brief: "Boston Marathon qualifier who specializes in endurance training and rehab.",
      bio: "Marcus is our endurance specialist with extensive experience in distance running, triathlon training, and cardiorespiratory fitness development. As a Boston Marathon qualifier and experienced physical therapist, Marcus brings a unique combination of endurance training expertise and rehabilitation knowledge to his coaching. He specializes in helping clients build sustainable cardio fitness while preventing injuries through proper technique and progressive programming. His holistic approach addresses biomechanics, nutrition, and mental preparation for endurance events.",
      credentials: [
        "Doctor of Physical Therapy",
        "USAT Level 1 Triathlon Coach",
        "RRCA Certified Running Coach",
        "Boston Marathon Qualifier (3x)",
        "Ironman 70.3 Finisher"
      ],
      specialties: ["Distance Running", "Triathlon Training", "Injury Prevention", "Return-to-Sport Rehab"],
      quote: "Endurance isn't about going fast – it's about going far. The journey of a thousand miles begins with consistent training and proper recovery."
    },
    {
      id: 4,
      name: "ELENA RODRIGUEZ",
      categories: ["nutrition", "hiit"],
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Nutrition Coach & HIIT Trainer",
      brief: "Specializes in metabolic conditioning and nutrition for optimal body composition.",
      bio: "Elena combines her expertise in nutrition science and high-intensity training to create comprehensive programs that transform both body composition and performance. With advanced certifications in sports nutrition and metabolic conditioning, she helps clients optimize their eating habits to fuel their workouts and recovery. Elena is known for her data-driven approach, using metabolic testing, nutrition timing protocols, and strategic workout programming to create personalized fitness and nutrition plans.",
      credentials: [
        "MS in Human Nutrition",
        "Precision Nutrition Level 2 Coach",
        "ACE Certified Personal Trainer",
        "Sports Nutrition Specialist",
        "Metabolic Analytics Certification"
      ],
      specialties: ["Nutrition Planning", "Body Composition Optimization", "Metabolic Conditioning"],
      quote: "Training and nutrition are two sides of the same coin. Master both, and you'll unlock your body's true potential."
    },
    {
      id: 5,
      name: "DAVID PARK",
      categories: ["strength", "rehab"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Corrective Exercise Specialist",
      brief: "Combines strength training with rehabilitation principles for safe, effective progress.",
      bio: "David specializes in bridging the gap between rehabilitation and performance training. With his background in sports medicine and strength coaching, he excels at helping clients overcome movement limitations, resolve pain, and build resilient strength. David's methodical approach begins with comprehensive movement assessments, followed by customized corrective exercise protocols and progressively challenging strength programs. He works extensively with post-rehabilitation clients, aging athletes, and those with chronic pain conditions.",
      credentials: [
        "MS in Sports Medicine",
        "NASM Corrective Exercise Specialist",
        "Functional Movement Screen (FMS) Level 2",
        "Selective Functional Movement Assessment Certified",
        "Certified Strength and Conditioning Specialist (CSCS)"
      ],
      specialties: ["Corrective Exercise", "Post-Rehab Training", "Pain-Free Performance", "Functional Fitness"],
      quote: "True strength isn't just about how much you can lift – it's about how well you can move."
    },
    {
      id: 6,
      name: "JASMINE PATEL",
      categories: ["hiit", "cardio"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Group Fitness Director",
      brief: "Creates dynamic, results-driven group workouts that build community and performance.",
      bio: "Jasmine leads our group fitness programs with an infectious energy that motivates clients to push their limits while having fun. Her background in competitive athletics and group dynamics helps her create classes that balance challenging workouts with supportive community-building. Jasmine specializes in designing progressive program cycles that produce measurable results for participants of all fitness levels. Her signature HIIT and cardio-based classes are consistently rated as both the most challenging and the most enjoyable.",
      credentials: [
        "BS in Exercise Science",
        "ACE Group Fitness Instructor",
        "Les Mills GRIT Certified",
        "Spinning Certified Instructor",
        "TRX Group Training Specialist"
      ],
      specialties: ["Group HIIT Training", "Cardio Programming", "Team-Based Fitness Challenges"],
      quote: "The energy of a group workout can take your performance to heights you never thought possible."
    },
    {
      id: 7,
      name: "MICHAEL TORRES",
      categories: ["strength", "nutrition"],
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Strength & Nutrition Coach",
      brief: "Specializes in body transformation through strategic strength and nutrition protocols.",
      bio: "Michael combines his expertise in strength training and nutritional science to help clients achieve dramatic body transformations. His methodical approach starts with detailed body composition analysis and nutritional intake assessment, followed by customized training and eating plans. Michael is known for his ability to break complex nutritional concepts into practical, sustainable habits while designing progressive strength programs that maximize muscle development and fat loss. His clients consistently achieve life-changing transformations that last.",
      credentials: [
        "BS in Nutritional Science",
        "ISSN Sports Nutrition Specialist",
        "NSCA Certified Personal Trainer",
        "Precision Nutrition Level 2 Coach",
        "Body Composition Specialist"
      ],
      specialties: ["Body Transformation", "Contest Preparation", "Sustainable Nutrition Planning"],
      quote: "The most powerful transformation happens when you align your training, nutrition, and mindset with crystal-clear goals."
    },
    {
      id: 8,
      name: "OLIVIA KIM",
      categories: ["rehab", "cardio"],
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      title: "Medical Exercise Specialist",
      brief: "Creates safe, effective exercise programs for those with medical conditions.",
      bio: "Olivia specializes in working with clients who have medical conditions that require special consideration in their exercise programs. With her background in clinical exercise physiology and cardiac rehabilitation, she creates safe, effective workouts for those with conditions like heart disease, diabetes, arthritis, and post-cancer recovery. Olivia works closely with healthcare providers to ensure her programs complement medical treatment while improving quality of life and functional capacity. Her compassionate approach makes exercise accessible and beneficial for those who need it most.",
      credentials: [
        "MS in Clinical Exercise Physiology",
        "ACSM Clinical Exercise Physiologist",
        "Medical Exercise Specialist",
        "Cancer Exercise Specialist",
        "5+ years Cardiac Rehabilitation experience"
      ],
      specialties: ["Medical Exercise Programming", "Cardiac Rehabilitation", "Chronic Disease Management", "Senior Fitness"],
      quote: "Exercise is medicine when prescribed correctly. The right program can transform health outcomes at any age or condition."
    }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Define specialties array
  const specialties = [
    { id: 'all', name: 'ALL' },
    { id: 'strength', name: 'STRENGTH' },
    { id: 'hiit', name: 'HIIT' },
    { id: 'cardio', name: 'CARDIO' },
    { id: 'nutrition', name: 'NUTRITION' },
    { id: 'rehab', name: 'REHABILITATION' }
  ];

  // Filter trainers based on active category
  const filteredTrainers = activeCategory === 'all' 
    ? trainers 
    : trainers.filter(trainer => trainer.categories.includes(activeCategory));

    const setActiveSpecialty = (id: string) => {
        setActiveCategory(id);
    };

    return (
        <div className="bg-black text-white font-sans">
          <Navbar />
          
          {/* Hero Section with Premium Feel */}
          <section className="relative h-[70vh] overflow-hidden">
            {/* Background Image with Premium Filter */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ 
                  backgroundImage: `url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)`,
                  filter: 'brightness(0.3) contrast(1.2) saturate(1.1)',
                }}
              ></div>
            </div>
            
            {/* Refined Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
            
            {/* Symmetrical Red Accents */}
            <div className="absolute top-0 left-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-40 bg-red-600 opacity-20 blur-[100px]"></div>
            
            {/* Hero Content with Improved Alignment */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-16">
                <div 
                  className={`max-w-3xl transform transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                >
                  <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                    <div className="overflow-hidden">
                      <span 
                        className={`block mb-2 transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                      >
                        <span className="relative inline-block">
                          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">EXPERT</span>
                          <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">EXPERT</span>
                        </span>
                      </span>
                      <span 
                        className={`block transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                      >
                        <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">TRAINERS</span>
                      </span>
                    </div>
                  </h1>
                  
                  <p 
                    className={`text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light text-gray-300 transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    World-class coaches committed to <span className="text-white font-medium">pushing your limits</span> and <span className="text-red-500 font-bold">maximizing your potential</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Trainer Specialties Filter */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                {specialties.map((specialty: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: number) => (
                  <button 
                    key={specialty.id}
                    onClick={() => setActiveSpecialty(specialty.id as string)}
                    className={`px-8 py-3 rounded-full border-2 transition-all duration-300 text-sm md:text-base font-bold tracking-wider ${
                      activeCategory === specialty.id 
                        ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-900/30' 
                        : 'border-gray-800 hover:border-red-600 text-gray-300 hover:text-white'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {specialty.name}
                  </button>
                ))}
              </div>
              
              {/* Trainers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredTrainers.map((trainer, index) => (
                  <div 
                    key={trainer.id}
                    className={`group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 shadow-xl transition-all duration-700 transform hover:scale-[1.02] hover:border-red-800 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    {/* Trainer Image with Enhanced Visual Effects */}
                    <div className="h-96 overflow-hidden">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      />
                      {/* Specialty Badge with Improved Design */}
                      <div className="absolute top-4 right-4 bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {trainer.specialties[0]}
                      </div>
                    </div>
                    
                    {/* Trainer Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                      <p className="text-red-500 font-medium text-sm uppercase tracking-wider mb-4">{trainer.title}</p>
                      <p className="text-gray-300 mb-5">{trainer.brief}</p>
                      
                      {/* Expanded Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${expandedTrainer === trainer.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-6 border-t border-gray-800">
                          <p className="text-gray-200 mb-8 leading-relaxed">{trainer.bio}</p>
                          
                          <h4 className="text-lg font-bold mb-4 text-red-500">CERTIFICATIONS</h4>
                          <ul className="space-y-3 mb-8">
                            {trainer.credentials.map((cert, i) => (
                              <li key={i} className="flex items-start">
                                <svg 
                                  className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24" 
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-sm text-gray-300">{cert}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="text-lg font-bold mb-4 text-red-500">SPECIALIZES IN</h4>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {trainer.specialties.map((spec, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                {spec}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center mb-8">
                            <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-sm text-gray-300">Available for booking</span>
                          </div>
                          
                          {/* Premium Button */}
                          <button className="w-full relative overflow-hidden group bg-transparent hover:bg-red-600 border-2 border-red-600 text-white py-3 rounded font-bold tracking-wider transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40">
                            <span className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 inline-block">
                              BOOK A SESSION
                            </span>
                            <div className="absolute inset-0 w-full h-full scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-600 -z-0"></div>
                          </button>
                        </div>
                      </div>
                      
                      {/* Show/Hide Details Button */}
                      <button 
                        onClick={() => setExpandedTrainer(expandedTrainer === trainer.id ? null : trainer.id)}
                        className="mt-5 flex items-center text-red-500 hover:text-red-400 font-semibold transition-all duration-300"
                      >
                        {expandedTrainer === trainer.id ? 'HIDE DETAILS' : 'SHOW DETAILS'}
                        <svg 
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedTrainer === trainer.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* No Trainers Message */}
          {filteredTrainers.length === 0 && (
            <div className="text-center py-20 max-w-lg mx-auto">
              <svg className="w-16 h-16 text-red-600 mx-auto mb-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-4">No trainers found in this specialty</h3>
              <p className="text-gray-400 mb-6">Please try another specialty or check back later for new trainer additions.</p>
              <button 
                onClick={() => setActiveSpecialty('all')}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-bold transition-all duration-300"
              >
                View All Trainers
              </button>
            </div>
          )}
          
          {/* Trainer Booking CTA */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
              <svg className="w-full h-full text-red-600 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.5,-76.3C59.1,-69.3,73.1,-60.2,79.9,-47C86.7,-33.8,86.3,-16.9,84.4,-1.1C82.5,14.7,79.2,29.3,71.9,41.8C64.5,54.3,53.1,64.6,40,69.9C26.9,75.2,13.5,75.4,-0.2,75.7C-13.8,76,-27.6,76.5,-40.1,71.2C-52.6,65.9,-63.8,54.9,-70.4,41.7C-77,28.5,-79,14.2,-77.9,0.6C-76.9,-13,-72.8,-26,-66.1,-37.8C-59.4,-49.5,-50.2,-60,-38.8,-67.2C-27.3,-74.3,-13.7,-78.2,0.7,-79.3C15,-80.4,30,-83.3,44.5,-76.3Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Personal Training </span>
                  <span className="text-red-500">Redefined</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  Experience transformation with personalized coaching from our elite trainers. Schedule your consultation today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-red-900/30 transform hover:translate-y-[-2px]">
                    BOOK A FREE CONSULTATION
                
                  </button>
                </div>
              </div>
              
              {/* Testimonials */}
              
            </div>
          </section>
          
          {/* Call-to-Action */}
          <CTASection id="trainers-cta" phoneNumber="+91 7003390611" />
          
          <Footer />
        </div>
      );
    }

export default TrainersPage;
