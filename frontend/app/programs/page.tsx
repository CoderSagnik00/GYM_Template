/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const ProgramsPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  // Define program categories
  const categories = [
    { id: 'all', name: 'ALL PROGRAMS' },
    { id: 'strength', name: 'STRENGTH' },
    { id: 'cardio', name: 'CARDIO' },
    { id: 'hiit', name: 'HIIT' },
    { id: 'specialized', name: 'SPECIALIZED' }
  ];

  // Define programs data
  const programs = [
    {
      id: 1,
      title: "POWER LIFTING",
      category: "strength",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Master the art of strength with our comprehensive powerlifting program.",
      description: "Our elite Power Lifting program is designed for those who want to push their strength to the absolute limit. Under the guidance of our certified strength coaches, you'll master the three main lifts: squat, bench press, and deadlift. This program includes personalized training protocols, form correction, competition preparation, and advanced recovery techniques. Perfect for both competitive lifters and those looking to build raw strength.",
      features: [
        "Expert coaching from certified powerlifting instructors",
        "Personalized programming based on your current strength levels",
        "Form analysis and technique correction",
        "Progressive overload methodology",
        "Competition preparation for those interested in competing"
      ],
      schedule: "Mon/Wed/Fri 6am-8pm, Sat 8am-2pm"
    },
    {
      id: 2,
      title: "FORGE HIIT",
      category: "hiit",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Intense interval training to maximize calorie burn and cardiovascular fitness.",
      description: "FORGE HIIT is our signature high-intensity interval training program that will push your limits and transform your body. This 45-minute class combines explosive cardio bursts with strength-building exercises to maximize calorie burn and trigger the afterburn effect. You'll rotate through multiple stations that challenge every muscle group while improving your speed, agility, and endurance. Each class is different, ensuring your body never adapts and results never plateau.",
      features: [
        "45-minute scientifically optimized workout sessions",
        "Combination of bodyweight, free weight, and functional equipment",
        "Heart rate monitoring to ensure optimal intensity",
        "Modified exercises available for all fitness levels",
        "Burn up to 800 calories per session with afterburn benefits"
      ],
      schedule: "Daily classes at 6am, 12pm, 5pm and 7pm"
    },
    {
      id: 3,
      title: "PRECISION CARDIO",
      category: "cardio",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Science-backed cardio protocols for optimal heart health and endurance.",
      description: "Precision Cardio takes traditional cardio training to the next level by implementing heart-rate zone training, interval protocols, and endurance-building techniques. Unlike mindless treadmill sessions, each Precision Cardio workout has a specific purpose—whether it's improving your VO2 max, increasing lactate threshold, or enhancing recovery. Our coaches will guide you through various cardio modalities including treadmills, rowing machines, assault bikes, and more to create well-rounded cardiovascular fitness.",
      features: [
        "Heart rate zone training with real-time feedback",
        "Personalized cardio assessment and goal setting",
        "Varied cardio modalities to prevent plateaus",
        "Endurance-building protocols for athletic performance",
        "Fat-burning focused sessions for weight management"
      ],
      schedule: "Tue/Thu 7am-9pm, Sat/Sun 9am-3pm"
    },
    {
      id: 4,
      title: "OLYMPIC LIFTING",
      category: "strength",
      image: "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Technical coaching for clean, jerk, and snatch movements.",
      description: "Our Olympic Lifting program focuses on mastering the clean, jerk, and snatch with precision and power. Led by national-level Olympic lifting coaches, this program emphasizes technique first, followed by progressive loading. You'll develop explosive power, improve mobility, and gain a new appreciation for these technically demanding lifts. The program includes video analysis, mobility work specific to Olympic lifting, and periodized training cycles to help you reach new personal records.",
      features: [
        "Technical breakdown of clean, jerk, and snatch movements",
        "Video analysis and immediate feedback on form",
        "Mobility work specific to Olympic lifting demands",
        "Periodized training cycles for competition or personal goals",
        "Small group format (max 6 athletes) for individualized attention"
      ],
      schedule: "Mon/Wed/Fri 5pm-7pm, Sat 11am-1pm"
    },
    {
      id: 5,
      title: "COMBAT CONDITIONING",
      category: "specialized",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Boxing and martial arts-inspired training for total body fitness.",
      description: "Combat Conditioning brings the training methodologies of elite fighters to your fitness routine. This program combines boxing, kickboxing, and functional movement patterns to develop real-world strength, power, and cardiovascular endurance. You'll learn proper striking technique on heavy bags, speed bags, and focus mitts while incorporating bodyweight exercises, plyometrics, and core conditioning. No fighting experience necessary—just a willingness to push yourself to new limits.",
      features: [
        "Professional boxing and kickboxing technique instruction",
        "Heavy bag, speed bag, and focus mitt work",
        "Functional conditioning exercises to complement fight training",
        "Footwork and agility drills for improved coordination",
        "Stress relief and confidence building through controlled aggression"
      ],
      schedule: "Mon/Wed/Fri 6pm-8pm, Sat 10am-12pm"
    },
    {
      id: 6,
      title: "FORGE FLEX",
      category: "specialized",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Dynamic mobility training to improve flexibility and prevent injury.",
      description: "FORGE FLEX is more than just a stretching class—it's a comprehensive approach to mobility that combines dynamic stretching, fascial release, joint preparation, and recovery techniques. This program addresses the mobility limitations that hold back your performance in other training disciplines. Each session focuses on different movement patterns and body regions, gradually improving your range of motion and helping to prevent injuries. Perfect as a standalone program or as a complement to your current training regimen.",
      features: [
        "Dynamic mobility exercises targeting major movement patterns",
        "Foam rolling and fascial release techniques",
        "PNF and active stretching protocols for lasting flexibility gains",
        "Joint preparation exercises for improved movement quality",
        "Personalized mobility assessment and tracking"
      ],
      schedule: "Tue/Thu 6am & 7pm, Sun 10am"
    },
    {
      id: 7,
      title: "ENDURANCE ZONE",
      category: "cardio",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Train for long-distance events with structured endurance programming.",
      description: "The Endurance Zone is designed for those looking to build serious cardiovascular endurance for events like marathons, triathlons, or simply to improve their long-duration performance. With customized training plans based on your current fitness level and goals, our endurance coaches will guide you through progressive workouts that improve your aerobic capacity, lactate threshold, and muscular endurance. The program includes structured interval sessions, technique improvement, and periodization strategies to peak for specific events.",
      features: [
        "Customized training plans for specific endurance events",
        "VO2 max and lactate threshold testing",
        "Running gait analysis and technique correction",
        "Nutrition guidance for endurance athletes",
        "Recovery protocols including compression therapy and ice baths"
      ],
      schedule: "Tue/Thu/Sat 6am-10am, Wed 6pm-8pm"
    },
    {
      id: 8,
      title: "METABOLIC CONDITIONING",
      category: "hiit",
      image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      brief: "Strategic training to boost metabolism and maximize fat loss.",
      description: "Metabolic Conditioning is our science-backed approach to fat loss and metabolic health. This program strategically combines resistance training, cardiovascular conditioning, and recovery protocols to maximize caloric expenditure and fat oxidation. Unlike traditional cardio, these workouts are designed to create an optimal hormonal environment for fat loss while preserving lean muscle mass. Each session incorporates different training variables—time, intensity, volume, density—to continuously challenge your body and prevent adaptation.",
      features: [
        "Scientifically designed circuits to maximize EPOC (afterburn effect)",
        "Strategic combination of strength and conditioning elements",
        "Metabolic testing to establish optimal fat-burning zones",
        "Nutrition coaching to complement your fat loss goals",
        "Progress tracking using body composition analysis"
      ],
      schedule: "Mon/Wed/Fri 7am, 12pm & 6pm"
    },
    {
        id: 9,
        title: "METABOLIC CONDITIONING",
        category: "hiit",
        image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        brief: "Strategic training to boost metabolism and maximize fat loss.",
        description: "Metabolic Conditioning is our science-backed approach to fat loss and metabolic health. This program strategically combines resistance training, cardiovascular conditioning, and recovery protocols to maximize caloric expenditure and fat oxidation. Unlike traditional cardio, these workouts are designed to create an optimal hormonal environment for fat loss while preserving lean muscle mass. Each session incorporates different training variables—time, intensity, volume, density—to continuously challenge your body and prevent adaptation.",
        features: [
          "Scientifically designed circuits to maximize EPOC (afterburn effect)",
          "Strategic combination of strength and conditioning elements",
          "Metabolic testing to establish optimal fat-burning zones",
          "Nutrition coaching to complement your fat loss goals",
          "Progress tracking using body composition analysis"
        ],
        schedule: "Mon/Wed/Fri 7am, 12pm & 6pm"
      }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Filter programs based on active category
  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

    return (
        <div className="bg-black text-white font-sans ">
          <Navbar />
          
          {/* Hero Section with Premium Feel */}
          <section className="relative h-[70vh] overflow-hidden">
            {/* Background Image with Premium Filter */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ 
                  backgroundImage: `url(https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)`,
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
                          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">ELITE</span>
                          <span className="absolute -left-1 -top-1 text-red-600 blur-[1px] z-0 opacity-80">ELITE</span>
                        </span>
                      </span>
                      <span 
                        className={`block transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                      >
                        <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">PROGRAMS</span>
                      </span>
                    </div>
                  </h1>
                  
                  <p 
                    className={`text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light text-gray-300 transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  >
                    Specialized training methodologies designed to <span className="text-white font-medium">transform your body</span> and <span className="text-red-500 font-bold">exceed your limits</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Programs Filter Categories with Improved Symmetry */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                {categories.map((category, index) => (
                  <button 
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-8 py-3 rounded-full border-2 transition-all duration-300 text-sm md:text-base font-bold tracking-wider ${
                      activeCategory === category.id 
                        ? 'border-red-600 bg-red-600 text-white shadow-lg shadow-red-900/30' 
                        : 'border-gray-800 hover:border-red-600 text-gray-300 hover:text-white'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Premium Programs Grid with Better Symmetry */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPrograms.map((program, index) => (
                  <div 
                    key={program.id}
                    className={`group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/40 shadow-xl transition-all duration-700 transform hover:scale-[1.02] hover:border-red-800 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    {/* Program Image with Enhanced Visual Effects */}
                    <div className="h-72 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                      />
                      {/* Category Badge with Improved Design */}
                      <div className="absolute top-4 right-4 bg-red-600 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {program.category}
                      </div>
                    </div>
                    
                    {/* Program Content with Better Spacing */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                      <p className="text-gray-300 mb-5">{program.brief}</p>
                      
                      {/* Expanded Content with Improved Layout */}
                      <div className={`overflow-hidden transition-all duration-500 ${expandedProgram === program.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-6 border-t border-gray-800">
                          <p className="text-gray-200 mb-8 leading-relaxed">{program.description}</p>
                          
                          <h4 className="text-lg font-bold mb-4 text-red-500">PROGRAM FEATURES</h4>
                          <ul className="space-y-3 mb-8">
                            {program.features.map((feature, i) => (
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
                                <span className="text-sm text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex items-center mb-8">
                            <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-sm text-gray-300">{program.schedule}</span>
                          </div>
                          
                          {/* Premium Button with Better Animation */}
                          <button className="w-full relative overflow-hidden group bg-transparent hover:bg-red-600 border-2 border-red-600 text-white py-3 rounded font-bold tracking-wider transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40">
                            <span className="relative z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 inline-block">
                              ENROLL NOW
                            </span>
                            <div className="absolute inset-0 w-full h-full scale-0 rounded transition-all duration-500 ease-in-out group-hover:scale-100 bg-red-600 -z-0"></div>
                          </button>
                        </div>
                      </div>
                      
                      {/* Improved Show/Hide Details Button */}
                      <button 
                        onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                        className="mt-5 flex items-center text-red-500 hover:text-red-400 font-semibold transition-all duration-300"
                      >
                        {expandedProgram === program.id ? 'HIDE DETAILS' : 'SHOW DETAILS'}
                        <svg 
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedProgram === program.id ? 'rotate-180' : ''}`} 
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
          
          {/* Redesigned No Programs Message */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-20 max-w-lg mx-auto">
              <svg className="w-16 h-16 text-red-600 mx-auto mb-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-4">No programs found in this category</h3>
              <p className="text-gray-400 mb-6">Please try another category or check back later for new programs.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-bold transition-all duration-300"
              >
                View All Programs
              </button>
            </div>
          )}
          
          {/* Call-to-Action */}
          <CTASection id="programs-cta" phoneNumber="+91 7003390611" />
          
          <Footer />
        </div>
      );
};

export default ProgramsPage;