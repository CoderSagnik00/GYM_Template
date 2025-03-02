'use client'

import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";  
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import ImageGallery from "../components/ImageGallery";
import Membership from "../components/Membership";

export default function Home() {
  const [, setIsVisible] = useState<{ [key: string]: boolean }>({});
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
      <HeroSection />
      
      {/* About Section */}
      <AboutSection id="about" />
      
      {/* Services Carousel */}
      <ServicesSection id="services" />
      
  {/* Membership Plans */}
  <Membership />


      {/* Call-to-Action */}
      <CTASection id={"id"} phoneNumber={""} />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Image Gallery */}
      <ImageGallery />
      
      
      <Footer />
    </div>
  );
}